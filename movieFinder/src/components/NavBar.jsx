import { Link } from "react-router-dom";

function NavBar(){
    return(
        <nav>
            <div>
                <Link to="/">Movie App</Link>
            </div>
            <div>
                <Link to="/"> Home</Link>
                <Link to="/favs">Fav</Link>
            </div>
        </nav>
    )
}
export default NavBar