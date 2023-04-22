import { UserProvider } from "../context/UserProvider"
import { Child1 } from "./Child1"
import { Child2 } from "./Child2"

export const Parent = () => {
    return (
        <UserProvider>
            <h1>Parent App</h1>
            <hr />
            <Child1 />
            <Child2 />
        </UserProvider>
    )
}