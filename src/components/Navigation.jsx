import { Link, Outlet } from "react-router-dom";


const Navigation = () => {

    return (
        <>
            <nav>
                <ul>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Sign Up</Link></li>
                </ul>
            </nav>
            <Outlet/>
        </>
    );    

}

export default Navigation;