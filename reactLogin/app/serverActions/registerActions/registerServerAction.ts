import type { ApiResponseType, RegisterFormType } from "~/schemas/types"


export async function RegisterServerAction(data: RegisterFormType) {
    "use server"
    console.log(JSON.stringify(data))
    const responseOfRegister = await fetch(`${import.meta.env.API_URL || 'http://localhost:3000'}/api/auth/register`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    const result = await responseOfRegister.json()
    return result as ApiResponseType
}