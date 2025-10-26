import Stack from '@mui/material/Stack';
import RegisterForm from './RegisterForm';

const Register = () => {
    // Register form
    return (
        <Stack sx={{
            padding: {
                xs: 5,
                sm: 6,
                md: 7,
                lg: 20
            },
            paddingX: {
                lg: 50,
                md: 30,
                sm: 15,
                xs: 2
            },
        }}
            className='w-screen h-screen max-w-7xl mx-auto'
        >
            <Stack
                padding={5}
                borderRadius={2}
                sx={{
                    paddingX: {
                        lg: 10
                    },
                    spacing: {
                        xl: 0,
                    }
                }}
                className='xl:h-full border border-gray-300 dark:border-[#555] hover:shadow max-h-96 duration-300 justify-between dark:hover:border! dark:hover:border-[#999]! bg-linear-to-bl dark:from-[#1f1f1f] dark:to-[#171717] from-[#fdfdfd]'
                flexDirection={'column'} justifyItems={'flex-end'}  alignItems={'center'}>
                <h3 className='text-3xl'>
                    Register
                </h3>
                <RegisterForm />
            </Stack>
        </Stack>
    )
}

export default Register;