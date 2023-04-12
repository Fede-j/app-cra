import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './Cart/CartWidget'

const NavBar = () => {
    
    return (
        <>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Home</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Productos</Nav.Link>
                    <Nav.Link href="#features">Zapatillas</Nav.Link>
                    <Nav.Link href="#pricing">Contactos</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        <CartWidget />
        </>

        
        
    )
    
}


export default NavBar