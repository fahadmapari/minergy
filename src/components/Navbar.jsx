import { Link } from "react-scroll";
import styled from "styled-components";
import logo from "../assets/Minergy-Logo.png";

function Navbar() {
  return (
    <Nav>
      <div>
        <Logo src={logo} />
      </div>

      <div>
        <Cta>
          <Link to="contact" spy={true} smooth={true}>
            Get Quote
          </Link>
        </Cta>
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
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;

  @media (max-width: 425px) {
    padding: 2rem 2rem;
  }
`;
const Logo = styled.img`
  width: 30rem;

  @media (max-width: 425px) {
    width: 20rem;
  }
  @media (max-width: 320px) {
    width: 15rem;
  }
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

  @media (max-width: 425px) {
    font-size: 1.8rem;
  }

  @media (max-width: 320px) {
    font-size: 1rem;
  }
`;

export default Navbar;
