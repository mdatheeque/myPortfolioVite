import "./NavBar.css";
import { Link } from "react-router-dom";

interface NavLinkProps {
  linkPath: string;
  linkName: string;
}

function NavLink(props: NavLinkProps) {
  const { linkPath, linkName } = props;
  return (
    <Link
      to={linkPath}
      className="navBarContainer__link navBarContainer__link--underline"
    >
      {linkName}
    </Link>
  );
}

export default NavLink;
