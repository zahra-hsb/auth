import Snackbar from "@mui/material/Snackbar";
import { useMutation, type MutationFunction } from "@tanstack/react-query";
import { useState, type ReactElement } from "react";
import type { ApiResponseType, FormContainerProps, HandleSubmit, LoginFormType, RegisterFormType, ToastState } from "~/schemas/types";



const FormContainer = ({
    handleSubmit,
    children,
    serverAction
}: FormContainerProps): ReactElement => {
    const [isShowToast, setShowToast] = useState<ToastState>({ isShow: false, message: "", error: false });

    const mutation = useMutation<ApiResponseType, unknown, LoginFormType>({
        mutationFn: (formData: LoginFormType) => {
            // console.log(formData)
            return serverAction(formData)
        },
        onSuccess: async (res) => {
            res.errors &&
                res.errors.length > 0 ?
                res.errors.forEach(element => {
                    setShowToast({
                        isShow: true,
                        message: element.msg,
                        error: true
                    })
                }) :
                setShowToast({
                    isShow: true,
                    message: res.message,
                    error: false
                })
            setTimeout(() => {
                setShowToast({
                    error: false,
                    isShow: false,
                    message: ""
                })
            }, 3000)
        },
        onError: (error) => {
            console.log(error)
            setShowToast({
                isShow: true,
                message: String(error),
                error: true
            })
        }
    });
    return (
        <form onSubmit={handleSubmit((data) => mutation.mutate(data))} className='flex flex-col items-center w-full gap-5'>
            {children}
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

export default FormContainer;
