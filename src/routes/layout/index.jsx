import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { DataContext } from "../../App";

export const Layout = () => {
    const { bag } = useContext(DataContext);

    return (
        <>
            <header>
                <div>
                    <Link to="/">Outster</Link>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/products">Products</Link></li>
                            <li><Link to="/wishlist">Wishlist</Link></li>
                            <li><Link to="/bag">Bag {bag.length > 0 && <span>{bag.length}</span>}</Link></li>
                        </ul>
                    </nav>
                </div>
                <button>Logout</button>
            </header>
            <div>
                <Outlet />
            </div>
        </>
    );
};