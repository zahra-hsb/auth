import type { ReactElement } from "react";

export interface LoginFormType { email: string; password: string; }
export interface RegisterFormType { email: string; password: string; name: string; }

export interface ApiResponseType {
    success: boolean;
    message: string;
    // data?: 
    errors?:
    {
        value: string;
        msg: string;
        path: string;
    }[]
}


export interface HandleSubmit {
    (onSubmit: (data: LoginFormType | RegisterFormType) => void): (e?: unknown) => void;
}


export interface ToastState {
    isShow: boolean;
    message: string;
    error: boolean;
}

export interface FormContainerProps {
    handleSubmit: HandleSubmit;
    children: ReactElement;
    serverAction: (formData: LoginFormType | RegisterFormType) => Promise<ApiResponseType>;
}
