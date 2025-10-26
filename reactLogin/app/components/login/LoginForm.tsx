import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import RegisterIcon from '@mui/icons-material/Person';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { loginServerAction } from '~/serverActions/loginActions/loginSeverAction';
import { LoginSchema } from '~/schemas/loginSchema';
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import type { HandleSubmit, LoginFormType } from '~/schemas/types';
import FormContainer from '../shared/FormContainer';

const LoginForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormType>({
        resolver: zodResolver(LoginSchema)
    })

    return (
        <FormContainer handleSubmit={handleSubmit as HandleSubmit} serverAction={loginServerAction}>
            <>
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
                    },
                    paddingY: {
                        lg: 3,
                        xs: 1
                    }
                }} width={'100%'} flex={'flex'} gap={1}>
                    <Button fullWidth loadingIndicator="loading" variant='contained' className='' type='submit' size='medium' startIcon={<LoginIcon />}>
                        Login
                    </Button>
                    <Button href='/register' fullWidth variant="outlined" startIcon={<RegisterIcon />}>
                        Register
                    </Button>
                </Stack>
            </>
        </FormContainer>
    )
}

export default LoginForm;