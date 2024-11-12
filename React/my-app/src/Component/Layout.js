import {Outlet,Link} from "react-router-dom"
function Layout(){
    return (
        <div>
            <>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/Blog">Blogs</Link>
                        </li>
                        <li>
                            <Link to="/Contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </>
            <Outlet />
        </div>
    )
}; export default Layout;