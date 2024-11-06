import { Children } from "react"
import './index.css';

export default function Navbar() {
    return (
        <nav className="nav">
            <a href="/" className="site-title">San Diego's Best</a>
            <ul>
                <CustomLink href="/surf">Surf Spots</CustomLink>
                <CustomLink href="/offRoading">Off Roading</CustomLink>
                <CustomLink href="/sunSets">Sunsets</CustomLink>
            </ul>
        </nav>
    );
}

function CustomLink({ href, children, ...props }) {
    const path = window.location.pathname;

    return (
        <li className={path === href ? "active" : ""}>
            <a href={href} {...props}>{children}</a>
        </li>
    );
}
