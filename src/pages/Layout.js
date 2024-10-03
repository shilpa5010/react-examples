import { Outlet, Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.css';
const Layout = () => {
  return (
    <>
      <nav>
        <ul className="nav">
          <li className="nav-item">
            <Link to="/" className="nav-link active">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/blogs" className="nav-link">Blogs</Link>
          </li>
          <li className="nav-item">
            <Link to="/display" className="nav-link">Simple Display Example</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">Contacts</Link>
          </li>
          <li className="nav-item">
            <Link to="/counter" className="nav-link">Counter</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
