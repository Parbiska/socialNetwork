const Navbar = () => (
    <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <a href="#">Profile</a>
            </li>
          <li className="nav__item">
            <a href="#">Messages</a>
            </li>
          <li className="nav__item">
            <a href="#">News</a>
          </li>
          <li className="nav__item">
            <a href="#">Music</a>
          </li>
          <li className="nav__item">
            <a href="#" id="settings">Settings</a>
          </li>
        </ul>
    </nav>
    );

export default Navbar;