// import Button from 'react-bootstrap/Button';
import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
function Navbarx() {

    return (
        <>
            <div className="navbar1">
                <p>Revfin</p>
            </div>
            <div className="navbar2">
                <Navbar className="navbar2a" collapseOnSelect expand="lg">
                    <p>Revfin</p>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav.Link href="#User">Dahboard </Nav.Link>
                        <Nav.Link href="#User">User</Nav.Link>
                        <Nav.Link href="#Loans">Loan Application</Nav.Link>
                        <Nav.Link href="#Loans">Loan Schedule</Nav.Link>
                        <Nav.Link href="#Collections">Partner Management</Nav.Link>
                        <Nav.Link href="#Collections">Revenue Management</Nav.Link>
                        <Nav.Link href="#Insurance">Insurance</Nav.Link>
                        <Nav.Link href="#Communications">Communications</Nav.Link>
                        <Nav.Link href="#Remarks">Bulk Updates</Nav.Link>
                        <Nav.Link href="#User">Rules</Nav.Link>
                        <Nav.Link href="#User">Comnpany Policies</Nav.Link>
                        <Nav.Link href="#IOT">IOT</Nav.Link>
                    </Navbar.Collapse>
                </Navbar>
            </div>

        </>

    )
}

export default Navbarx;
