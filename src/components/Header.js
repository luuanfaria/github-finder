import React from 'react'
import { Navbar } from 'react-bootstrap'

const Header = () => {
    return (
        <Navbar bg="light" className="justify-content-center">
            <Navbar.Brand href="/">GitHub Profile</Navbar.Brand>
        </Navbar>
    )
}

export default Header
