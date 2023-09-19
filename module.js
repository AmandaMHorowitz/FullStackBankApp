var target;

var ui = {};

ui.navigation = ' \
    <nav className="navbar navbar-expand-lg navbar-light bg-light"  \
          <a className="navbar-brand" href="#" onclick="defaultModule()">Home</a> \
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"> \
                  <span className="navbar-toggler-icon"></span> \
              </button><div className="collapse navbar-collapse" id="navbarNav"> \
                      <ul className="navbar-nav"> \
                          <li className="nav-item"> \
                              <a className="nav-link" href="#CreateAccount" onclick="loadCreateAccount()" id="createAccount">Create Account</a> \
                          </li> \
                          <li className="nav-item"> \
                              <a className="nav-link" href="#Login" onclick="loadLogin()" id="login">Login</a> \
                          </li> \
                          <li className="nav-item"> \
                              <a className="nav-link" href="#Deposit" onclick="loadDeposit()">Deposit</a> \
                          </li> \
                          <li className="nav-item"> \
                              <a className="nav-link" href="#Withdraw" onclick="loadWithdraw()">Withdraw</a> \
                          </li> \
                          <li className="nav-item"> \
                              <a className="nav-link" href="#Balance" onclick="loadBalance()">Balance</a> \
                          </li> \
                          <li className="nav-item"> \
                              <a className="nav-link" href="#AllData" onclick="loadAllData()">AllData</a> \
                          </li> \
                      </ul> \
                  </div> \
    </nav> \
';

var navigation = document.getElementById('navigation');
navigation.innerHTML += ui.navigation;
    
ui.createAccount = ' \
    <div className="card text-white bg-primary mb-3" style="max-width: 18rem;"> \
        <div className="card-header">Create Account</div> \
        <div className="card-body"> \
            Name<br/> \
                <input type="input" classNameName="form-control" id="name" placeholder="Enter Your Name"><br> \
                    Email Address<br/> \
                        <input type="input" classNameName="form-control" id="email" placeholder="Enter Your Email"><br> \
                            Password<br/> \
                                <input type="password" classNameName="form-control" id="password" placeholder="Enter Your Password"><br> \
                                <button type="submit" id="submit" classNameName="btn" onclick="create()">Create Account</button> \
                                    <div id="createStatus"></div> \
                            </div> \
                            </div> \
                            ';

ui.login = ' \
<div className="card text-white bg-primary mb-3" style="max-width: 18rem;"> \
    <div className="card-header">Login</div> \
    <div className="card-body"> \
        Email<br> \
            <input type="input" className="form-control" id="loginEmail" placeholder="Enter Your Email"><br> \
                Password<br> \
                    <input type="password" className="form-control" id="loginPassword" placeholder="Enter Your Password"><br> \
                        <button type="submit" id />"submit" className="btn" onclick="login()">Login</button> \
                        <div id="loginStatus"></div> \
                    </div> \
                </div> \
                ';

ui.deposit = ' \
<div className="card text-white bg-primary mb-3" style="max-width: 18rem;"> \
    <div className="card-header">Deposit</div> \
    <div className="card-body"> \
        Email<br> \
            <input type="input" className="form-control" id="depositEmail" placeholder="Enter Your Email"><br> \
                Amount<br> \
                    <input type="number" className="form-control" id="depositAmount" placeholder="Enter Amount"><br> \
                        <button type="submit" className="btn" onclick="deposit()">Deposit</button> \
                        <div id="depositStatus"></div> \
                    </div> \
                    </div> \
                    ';

ui.withdraw = ' \
<div className="card text-white bg-primary mb-3" style="max-width: 18rem;"> \
    <div className="card-header">Withdraw</div> \
    <div className="card-body"> \
        Email<br> \
            <input type="input" className="form-control" id="withdrawEmail" placeholder="Enter Your Email"><br> \
                Amount<br> \
                    <input type="number" className="form-control" id="withdrawAmount" placeholder="Enter Amount"><br> \
                        <button type="submit" className="btn" onclick="withdraw()">Withdraw</button> \
                        <div id="withdrawStatus"></div> \
                    </div> \
                    </div> \
                    ';

ui.balance = ' \
<div className="card text-white bg-primary mb-3" style="max-width: 18rem;"> \
    <div className="card-header">Balance</div> \
    <div className="card-body"> \
        Email<br> \
            <input type="input" className="form-control" id="balanceEmail" placeholder="Enter Your Email"><br> \
                <button type="submit" className="btn" onclick="balance()">Show Balance</button> \
                <div id="balanceStatus"></div> \
            </div> \
            </div> \
            ';

ui.default = ' \
<div className="card bg-light mb-3" style="max-width: 18rem;"> \
    <div className="card-header">Home</div> \
    <div className="card-body"> \
        <h5 className="card-title">Welcome to the Bank of Horowitz</h5> \
        <p className="card-text">Please use this site for all your banking needs. Security now guaranteed.</p> \
        <img src="bank.png" className="img-fluid" alt="Responsive image"> \
        </></div> \
</div> \
';

ui.allData = ' \
<h5>All Data in Store</h5> \
<button type="button" className="btn btn-secondary" onclick="allData()">Show All Data</button> \
<div id="allDataStatus"></div> \
';

var loadCreateAccount = function(){target.innerHTML = ui.createAccount};

var loadLogin = function(){target.innerHTML = ui.login};

var loadDeposit = function(){target.innerHTML = ui.deposit};

var loadWithdraw = function(){target.innerHTML = ui.withdraw};

var loadBalance = function(){target.innerHTML = ui.balance};

var defaultModule = function(){target.innerHTML = ui.default};

var loadAllData = function(){target.innerHTML = ui.allData};

defaultModule();