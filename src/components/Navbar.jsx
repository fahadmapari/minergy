import styled from "styled-components";
import logo from "../assets/Minergy-Logo.png";

function Navbar() {
  return (
    <Nav>
      <div>
        <Logo src={logo} />
      </div>

      <div>
        <Cta>Get Quote</Cta>
      </div>
    </Nav>
  );
}

const Nav = styled.nav`
  background: white;
  padding: 2rem 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Logo = styled.img`
  width: 30rem;
`;

const Cta = styled.a`
  text-decoration: none;
  font-size: 2.5rem;
  background: var(--primary-color);
  color: white;
  padding: 1.1rem;
  border-radius: 8px;
  font-weight: 700;
  cursor: pointer;
`;

export default Navbar;
