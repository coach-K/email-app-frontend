import { Badge, Container, Nav, Navbar, NavbarBrand, Stack } from 'react-bootstrap';
import { fetchOverview } from '../lib/data';

export default async function NavLink() {
    const response = await fetchOverview();
    const overview = response?.data;
    const unreadMessage = overview?.unreadMessage || 0;
    const user = overview?.user;

    return (<>
      <Navbar expand="lg" bg="primary" data-bs-theme="dark">
      <Container>
        <NavbarBrand href="/">
          Email App
        </NavbarBrand>
        <Nav>
            <div className="d-flex text-white">
                {user && `${user.firstname} ${user.lastname}`}
                {unreadMessage >0 && <Stack direction="horizontal" gap={2} className='ms-2'>
                    <Badge pill bg="secondary">{unreadMessage}</Badge>
                </Stack>}
            </div>
        </Nav>
      </Container>
    </Navbar>
    </>);
}