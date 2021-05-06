import React from 'react'
import {Navbar,Nav, NavDropdown} from "react-bootstrap"
import "./styles.css"
import {useStateValue} from "../../StateProvider"
import {auth} from "../../firebase"
const Navs = () => {
    const[{user,slots},] = useStateValue();

    const logout= () =>{
        if (user){
            auth.signOut();
        }
    };

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
    <Navbar.Brand href="/" className="title"><h3>MatchFix</h3></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <Nav.Link href="/guest" className="navlink">{user ? "Book for a Friend" : "Guest Register"}</Nav.Link>
        <Nav.Link href={!user && "/signup"} onClick= {logout} className="navlink">{user ? 'Sign Out' : "Sign Up"}</Nav.Link>
        <NavDropdown title="Facilities" id="basic-nav-dropdown" style={{textDecoration:"none",color:"white"}}>
            <NavDropdown.Item href="/football">Football</NavDropdown.Item>
            <NavDropdown.Item href="/basketball">Basketball</NavDropdown.Item>
            <NavDropdown.Item href="/cricket">Cricket</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/more">More</NavDropdown.Item>
        </NavDropdown>
        </Nav>
        <Nav className="justify-content-end" activeKey="/home">
            <Nav.Item>
                <Nav.Link href="/" className="navlink" >{slots.lenght}</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href={!user && "/login"} className="navlink" >{!user ? 'Sign in' : user.email}</Nav.Link>
            </Nav.Item>
            
        </Nav>
    </Navbar.Collapse>
    </Navbar>
    )
}

export default Navs


