/* eslint-disable jsx-a11y/anchor-is-valid */
import { NavLink } from "react-router-dom"
export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link" activeClassName="active">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/marvel" className="nav-link" activeClassName="active">
                                Marvel
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/marvel-dc" className="nav-link" activeClassName="active">
                                Marvel-DC
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/power-matrix" className="nav-link" activeClassName="active">
                                Power-Matrix
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/characters" className="nav-link" activeClassName="active">
                                Characters
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/characters-to-comics" className="nav-link" activeClassName="active">
                                CharactersToComics
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/characters-stats" className="nav-link" activeClassName="active">
                                CharactersStats
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/comics" className="nav-link" activeClassName="active">
                                Comics
                            </NavLink>
                        </li>
                        {/*<li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
    </li>*/}
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav >
    )
}