function NavBar(){
  return(
    <>
      <nav 
        id="navbar" className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid"> 
          <a className="navbar-brand" href="#">
            <h5>
              Wheeler's Bad Bank Home
            </h5>
          </a>
          <button 
            className= "navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText" 
            aria-controls="navbarText" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
            
              <li className="nav-item">
                <Link
                  data-toggle="tooltip"
                  data-placement="bottom"
                  className="nav-link"
                  title="Create an Account Here"
                  to="createAccount"
                >
                  Create Account
                </Link>
              </li>

              <li className ="nav-item">
                <Link
                  data-toggle="tooltip"
                  data-placement="bottom"
                  className="nav-link"
                  title="Deposit Funds"
                  to ="deposit"
                  >
                    Deposit
                  </Link>
              </li>
              <li className="nav-item">
                <Link
                  data-toggle="tooltip"
                  data-placement="bottom"
                  className="nav-link"
                  title="Withdraw Funds"
                  to="withdraw"
                >
                  Withdraw 
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  data-toggle="tooltip"
                  data-placement="bottom"
                  className="nav-link"
                  title="View user profile information"
                  to="alldata"
                >
                  All Data
                </Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}