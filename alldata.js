function AllData(){
    const ctx = React.useContext(UserContext);
    
    function buildCard() {
      for (let i = 0; i < ctx.users.length; i++) {
        console.log(ctx.users[i].name);
      }
    }
    
    return (
      <>
        <h5>All Data in Store</h5>
        {JSON.stringify(ctx)}<br/>
        <script type = "text/javascript"> buildCard() </script> 
        <div class="card-group">
          
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Name</h5>
            </div>
          </div>
          
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Email Address</h5>
            </div>
          </div>
          
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Password</h5>
            </div>
          </div>
          
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Balance</h5>
            </div>
          </div>
          
        </div>
      </>
    ); 
  }