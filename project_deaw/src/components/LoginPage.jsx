import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import { useNavigate } from "react-router-dom"

export const LoginPage = () => {
    const { user, setUser } = useContext(UserContext)
    const navigate = useNavigate()

    const onLogin = () =>{
        setUser({
            id:123,
            name:"Jonathan Lopez",
            email:"jlopez0313@hotmail.com"
        })

        const lasPath = localStorage.getItem('lastPath')  || '/'
        navigate(lasPath,{replace:true})
    }
    
    return(
        <>
            <div>Login Page</div>
            <pre>
                {JSON.stringify(user,null,3)}
            </pre>
            <button
                className="btn btn-primary"
                onClick={() => onLogin()}
            >
                Login
            </button>
        </>
    )
}