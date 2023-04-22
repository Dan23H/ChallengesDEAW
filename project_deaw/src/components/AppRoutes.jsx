import { LoginPage } from "./LoginPage"
import { UserRoutes } from "./UserRoutes"
import { PrivateRoutes } from "./PrivateRoutes"
import { Route, Routes } from "react-router-dom"

export const AppRoutes = () => {
    return(
        <>
            <Routes>
                <Route path='login' element={<LoginPage/>} />
                <Route path='/' element={
                    <PrivateRoutes>
                        <UserRoutes/>
                    </PrivateRoutes>
                } />
            </Routes>
        </>
    )
}