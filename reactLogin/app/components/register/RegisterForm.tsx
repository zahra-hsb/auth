import { zodResolver } from "@hookform/resolvers/zod";
import FormContainer from "../shared/FormContainer";
import { useForm } from "react-hook-form";
import type { HandleSubmit, RegisterFormType, LoginFormType, ApiResponseType } from "~/schemas/types";
import { RegisterSchema } from "~/schemas/RegisterSchema";
import { RegisterServerAction } from "~/serverActions/registerActions/registerServerAction";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import LoginIcon from '@mui/icons-material/Login';
import RegisterIcon from '@mui/icons-material/Person';
import { useState } from "react";


const RegisterForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormType>({
        resolver: zodResolver(RegisterSchema)
    })

    return (
        <FormContainer handleSubmit={handleSubmit as HandleSubmit} serverAction={RegisterServerAction as (formData: LoginFormType | RegisterFormType) => Promise<ApiResponseType>} >
            <>
                <div className='w-full'>
                    <TextField {...register("email")} fullWidth required label='email' type='text' placeholder='email' error={errors.email ? true : false} name='email' id="" className='' variant='standard' />
                    <span className='w-full text-xs text-left text-red-400'>{errors.email ? errors.email.message : ""}</span>
                </div>
                <div className='w-full'>
                    <TextField {...register("name")} fullWidth required label='Name' type='text' placeholder='name' className='' name='name' id="" variant='standard' />
                    <span className='w-full text-xs text-left text-red-400'>{errors.name ? errors.name.message : ""}</span>
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
                    <Button fullWidth loadingIndicator="loading" variant='contained' className='' type='submit' size='medium' startIcon={<RegisterIcon />}>
                        Register
                    </Button>
                    <Button href='/' fullWidth variant="outlined" startIcon={<LoginIcon />}>
                        Login
                    </Button>
                </Stack>
            </>
        </FormContainer>
    )
}

export default RegisterForm;