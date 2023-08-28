function NavBar(){
  return(
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Home</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#/CreateAccount/" data-toggle="tooltip" title="Create your account">Create Account</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/deposit/" data-toggle="tooltip" title="Deposit money into your account">Deposit</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/withdraw/" data-toggle="tooltip" title="Withdraw money from your account">Withdraw</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/alldata/" data-toggle="tooltip" title="See who else has an account with us">AllData</a>
          </li>          
        </ul>
      </div>
    </nav>
    </>
  );
}