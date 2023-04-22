import { NavLink } from "react-router-dom";
import "../index.css"

export const NavComponent = () => {
    return (
        <nav className="nav">
            <ul>
                <li>
                    <NavLink exact to="/" activeClassName="btn-active">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" activeClassName="btn-active">
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/" activeClassName="btn-active">
                        Login
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};
