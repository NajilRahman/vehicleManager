import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <Navbar expand="lg" className="bg-dark border-0 py-4">
      <Container>
      <span><i className="fa-solid fa-gear fa-3x me-3"></i> <span className='fs-4'>Vehicle <span className='text-warning'>Manager</span></span></span>
      </Container>
    </Navbar>
  );
}

export default Header;