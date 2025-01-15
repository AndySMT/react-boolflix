import { useGlobalContext } from "../context/GlobalContext";
export default function Header() {
  const { setQuery } = useGlobalContext();

  const handleSearch = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.searchInput.value.trim();
    setQuery(searchValue);
  };
  const searchOnEnter = (e) => {
    if (e.key === "Enter") {
      handleSearch(e);
    }
  };

  return (
    <>
      <div>
        <nav className="navbar bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand">BoolFlix</a>
            <div className="d-flex align-items-center">
              <div className="dropdown me-2">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
              <form
                className="d-flex"
                role="search"
                onSubmit={handleSearch}
                onKeyUp={searchOnEnter}
              >
                <input
                  className="form-control me-2"
                  name="searchInput"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
