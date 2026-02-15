import { Box } from "lucide-react";

const Navbar = () => {
  return (
    <header className="navbar">
      <nav className="inner">
        <div className="left">
          <div className="brand">
            <Box className="logo"/>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
