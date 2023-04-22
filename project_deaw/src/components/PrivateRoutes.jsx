import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import { useLocation } from "react-router-dom"

export const PrivateRoutes = ({children}) => {
    const { user } = useContext(UserContext)
    
    const { pathname, search } = useLocation()
    localStorage.setItem('lastPath', `${pathname}${search}`)
    
    return user ? children : <>Error 403</>
}