
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme='dark'>
        <div className="container-fluid">
            <a className="navbar-brand" href="#"><span calssName='badge bg-light text-dark fs-4'>UNews</span></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Add</a>
                </li>
            </ul>
            <div>
            <span className="navbar-text">
                SignUp
            </span>
            <span className="navbar-text">
                Login
            </span>
            </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
