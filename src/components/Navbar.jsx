import Search from "./Search";
import Dropdown from "./Dropdown";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand">Navbar</a>
          <div className="d-flex align-items-center">
            <Dropdown></Dropdown>
            <Search></Search>
          </div>
        </div>
      </nav>
    </div>
  );
}
