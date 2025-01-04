import "./NavBar.css";
import logo from "../../assets/logo.svg";
import About from "./About/About";

function NavBar() {
  return (
    <div className="navBarContainer">
      <object
        className="navBarContainer__logo"
        data={logo}
        width={40}
        height={40}
      >
        Logo
      </object>
      <div className="navBarLinkContainer">
        <About />
        {/* <NavLink linkName="WORKS" linkPath="/works" />
        <NavLink linkName="SKILLS" linkPath="/skills" />
        <NavLink linkName="CONTACT" linkPath="/contact" /> */}
      </div>
    </div>
  );
}

export default NavBar;
