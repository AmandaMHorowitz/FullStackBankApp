var target;

var ui = {};

ui.navigation = ' \
    <nav class="navbar navbar-expand-lg navbar-light bg-light"  \
          <a class="navbar-brand" href="#" onclick="defaultModule()">Home</a> \
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"> \
                  <span class="navbar-toggler-icon"></span> \
              </button><div class="collapse navbar-collapse" id="navbarNav"> \
                      <ul class="navbar-nav"> \
                          <li class="nav-item"> \
                              <a class="nav-link" href="#CreateAccount" onclick="loadCreateAccount()" id="createAccount">Create Account</a> \
                          </li> \
                          <li class="nav-item"> \
                              <a class="nav-link" href="#" onclick="loadLogin()" id="login">Login</a> \
                          </li> \
                          <li class="nav-item"> \
                              <a class="nav-link" href="#" onclick="loadDeposit()">Deposit</a> \
                          </li> \
                          <li class="nav-item"> \
                              <a class="nav-link" href="#" onclick="loadWithdraw()">Withdraw</a> \
                          </li> \
                          <li class="nav-item"> \
                              <a class="nav-link" href="#" onclick="loadBalance()">Balance</a> \
                          </li> \
                          <li class="nav-item"> \
                              <a class="nav-link" href="#" onclick="loadAllData()">AllData</a> \
                          </li> \
                      </ul> \
                  </div></> \
    </nav> \
';

var navigation = document.getElementById('navigation');
navigation.innerHTML += ui.navigation;
    
ui.createAccount = ' \
    <div class="card text-white bg-primary mb-3" style="max-width: 18rem;"> \
        <div class="card-header">Create Account</div> \
        <div class="card-body"> \
            Name<br> \
                <input type="input" class="form-control" id="name" placeholder="Enter Your Name"><br> \
                    Email Address<br> \
                        <input type="input" class="form-control" id="email" placeholder="Enter Your Email"><br> \
                            Password<br> \
                                <input type="password" class="form-control" id="password" placeholder="Enter Your Password"><br> \
                                    <button type="submit" id />"submit" class="btn" onclick="create()">Create Account</button> \
                                    <div id="createStatus"></div> \
                                </div> \
                            </div> \
                            ';

ui.login = ' \
<div class="card text-white bg-primary mb-3" style="max-width: 18rem;"> \
    <div class="card-header">Login</div> \
    <div class="card-body"> \
        Email<br> \
            <input type="input" class="form-control" id="loginEmail" placeholder="Enter Your Email"><br> \
                Password<br> \
                    <input type="password" class="form-control" id="loginPassword" placeholder="Enter Your Password"><br> \
                        <button type="submit" id />"submit" class="btn" onclick="login()">Login</button> \
                        <div id="loginStatus"></div> \
                    </div> \
                </div> \
                ';

ui.deposit = ' \
<div class="card text-white bg-primary mb-3" style="max-width: 18rem;"> \
    <div class="card-header">Deposit</div> \
    <div class="card-body"> \
        Email<br> \
            <input type="input" class="form-control" id="depositEmail" placeholder="Enter Your Email"><br> \
                Amount<br> \
                    <input type="number" class="form-control" id="depositAmount" placeholder="Enter Amount"><br> \
                        <button type="submit" class="btn" onclick="deposit()">Deposit</button> \
                        <div id="depositStatus"></div> \
                    </div> \
                    </div> \
                    ';

ui.withdraw = ' \
<div class="card text-white bg-primary mb-3" style="max-width: 18rem;"> \
    <div class="card-header">Withdraw</div> \
    <div class="card-body"> \
        Email<br> \
            <input type="input" class="form-control" id="withdrawEmail" placeholder="Enter Your Email"><br> \
                Amount<br> \
                    <input type="number" class="form-control" id="withdrawAmount" placeholder="Enter Amount"><br> \
                        <button type="submit" class="btn" onclick="withdraw()">Withdraw</button> \
                        <div id="withdrawStatus"></div> \
                    </div> \
                    </div> \
                    ';

ui.balance = ' \
<div class="card text-white bg-primary mb-3" style="max-width: 18rem;"> \
    <div class="card-header">Balance</div> \
    <div class="card-body"> \
        Email<br> \
            <input type="input" class="form-control" id="balanceEmail" placeholder="Enter Your Email"><br> \
                <button type="submit" class="btn" onclick="balance()">Show Balance</button> \
                <div id="balanceStatus"></div> \
            </div> \
            </div> \
            ';

ui.default = ' \
<div class="card bg-light mb-3" style="max-width: 18rem;"> \
    <div class="card-header">Home</div> \
    <div class="card-body"> \
        <h5 class="card-title">Welcome to the Bank of Horowitz</h5> \
        <p class="card-text">Please use this site for all your banking needs. Security now guaranteed.</p> \
        <img src="bank.png" class="img-fluid" alt="Responsive image"> \
        </></div> \
</div> \
';

ui.allData = ' \
<h5>All Data in Store</h5> \
<button type="button" class="btn btn-secondary" onclick="allData()">Show All Data</button> \
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