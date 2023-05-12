import { NavLink } from 'react-router-dom';
import { ImUser } from 'react-icons/im';

const Navbar = () => (
  <>
    <nav className="flexer">
      <div className="main-nav flexer">
        <NavLink><h1 className="logo">Bookstore CMS</h1></NavLink>
        <NavLink to="/">Books</NavLink>
        <NavLink to="/Categories">Cartegories</NavLink>
      </div>
      <div className="mask">
        <ImUser />
      </div>

    </nav>
    <div className="nav-line" />
  </>

);

export default Navbar;
