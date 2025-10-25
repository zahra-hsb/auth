

export async function loginServerAction(data: unknown) {
    "use server"
    console.log(data)
    // const responseOfLogin = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`, {
    const responseOfLogin = await fetch(`http://localhost:3000/api/auth/login`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    const result = await responseOfLogin.json()
    console.log(data, responseOfLogin, result)
    return 'Login was successful!'
}