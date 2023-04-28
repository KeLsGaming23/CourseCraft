function NavBar() {
    return (
        <>
            <div className="container">
                <header className="d-flex align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                    <div className="col-md-3 mb-2 mb-md-0">
                        <a href="/" className="d-inline-flex link-body-emphasis text-decoration-none">
                            <h1>Course Craft</h1>
                            {/* <svg className="bi" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap" /></svg> */}
                        </a>
                    </div>
                    <form class="col-sm-5 col-lg mb-3 mb-lg-0 me-lg-3" role="search">
                        <input type="search" class="form-control form-control-secondary" placeholder="Search..." aria-label="Search" />
                    </form>
                    <div>
                        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                            <li><a href="#ID" className="nav-link px-2 link-secondary">Dashboard</a></li>
                        </ul>
                    </div>

                    {/* <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                        <li><a href="#" className="nav-link px-2 link-secondary">Home</a></li>
                        <li><a href="#" className="nav-link px-2">Features</a></li>
                        <li><a href="#" className="nav-link px-2">Pricing</a></li>
                        <li><a href="#" className="nav-link px-2">FAQs</a></li>
                        <li><a href="#" className="nav-link px-2">About</a></li>
                    </ul> */}

                    {/* <div className="col-md-3 text-end">
                        <button type="button" className="btn btn-outline-primary me-2">Login</button>
                        <button type="button" className="btn btn-primary">Sign-up</button>
                    </div> */}
                    <div class="dropdown text-end">
                        <a href="#" class="d-block link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" class="rounded-circle" />
                        </a>
                        <ul class="dropdown-menu text-small">
                            <li><a class="dropdown-item" href="#">New project...</a></li>
                            <li><a class="dropdown-item" href="#">Settings</a></li>
                            <li><a class="dropdown-item" href="#">Profile</a></li>
                            {/* <li>< class="dropdown-divider"></li> */}
                            <li><a class="dropdown-item" href="#">Sign out</a></li>
                        </ul>
                    </div>
                    
                </header>
            </div>
        </>
    );
}
export default NavBar;