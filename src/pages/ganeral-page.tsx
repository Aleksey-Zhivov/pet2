import { authData } from "../testData/login"

export const GeneralPage = () => {
    return (
        <main>
            <h1>Welcome, {authData.login}!</h1>
        </main>
    )
}