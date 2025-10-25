import type { ApiResponseType, LoginFormType } from "~/schemas/types"


export async function loginServerAction(data: LoginFormType) {
    "use server"
    const responseOfLogin = await fetch(`${import.meta.env.API_URL || 'http://localhost:3000'}/api/auth/login`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    const result = await responseOfLogin.json()
    return result as ApiResponseType
}