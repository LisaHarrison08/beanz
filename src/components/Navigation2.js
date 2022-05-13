import React from "react"
import { Nav, Navbar } from "react-bootstrap"

function Navigation() {
    return (
        <nav>
            <Navbar className="nav2" expand="md" fixed="top" activeKey="/home">
                <Nav.Link href="/home" className="nav-link">Home</Nav.Link>
                <Nav.Link href="/about"className="nav-link">About</Nav.Link>
                <Nav.Link href="/menu" className="nav-link">Menu</Nav.Link>
            </Navbar>
        </nav>
    )
}

export default Navigation;
