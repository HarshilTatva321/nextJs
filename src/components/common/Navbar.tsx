import Link from "../../../node_modules/next/link";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <div className="logo">
                    NextJs Demo
                </div>
                <div className="nav-elements">
                    <ul>
                        <li>
                            <Link href="/">Posts</Link>
                        </li>
                        <li>
                            <Link href="/add-post">Add Post</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;