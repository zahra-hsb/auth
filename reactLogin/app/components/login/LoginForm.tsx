import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import RegisterIcon from '@mui/icons-material/Person';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { useMutation, useQuery } from '@tanstack/react-query';
import { loginServerAction } from '~/serverActions/loginActions/loginSeverAction';
import { LoginSchema } from '~/schemas/loginSchema';
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import type { ApiResponseType, LoginFormType } from '~/schemas/types';

const LoginForm = () => {
    
    const [isShowToast, setShowToast] = useState<{
        isShow: boolean;
        message: string;
        error: boolean;
    }>({ isShow: false, message: "", error: false });

    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormType>({
        resolver: zodResolver(LoginSchema)
    })

    const mutation = useMutation<ApiResponseType, unknown, LoginFormType>({
        mutationFn: (formData: LoginFormType) => loginServerAction(formData),
        onSuccess: async (res) => {

            setShowToast({
                isShow: true,
                message: res.message,
                error: false
            })
        },
        onError: (error) => {
            setShowToast({
                isShow: true,
                message: String(error),
                error: true
            })
        }
    });

    return (
        <form onSubmit={handleSubmit((data) => mutation.mutate(data))} className='flex flex-col items-center w-full gap-5'>
            <div className='w-full'>
                <TextField {...register("email")} fullWidth required label='email' type='text' placeholder='email' error={errors.email ? true : false} name='email' id="" className='' variant='standard' />
                <span className='w-full text-xs text-left text-red-400'>{errors.email ? errors.email.message : ""}</span>
            </div>
            <div className='w-full'>
                <TextField {...register("password")} error={errors.password ? true : false} fullWidth required label='password' type='password' placeholder='password' className='' name='password' id="" variant='standard' />
                <span className='w-full text-xs text-left text-red-400'>{errors.password ? errors.password.message : ""}</span>
            </div>
            <Stack sx={{
                flexDirection: {
                    lg: 'row'
                }
            }} width={'100%'} flex={'flex'} gap={1}>
                <Button fullWidth loadingIndicator="loading" variant='contained' className='' type='submit' size='medium' startIcon={<LoginIcon />}>
                    Login
                </Button>
                <Button fullWidth variant="outlined" startIcon={<RegisterIcon />}>
                    Register
                </Button>
            </Stack>
            <Snackbar
                open={isShowToast.isShow}
                onClose={() => setShowToast({
                    isShow: false,
                    message: "",
                    error: false
                })}
                message={isShowToast.message}
                color={isShowToast.error ? "#ff0000" : "#fff"}
            />
        </form>
    )
}

export default LoginForm;