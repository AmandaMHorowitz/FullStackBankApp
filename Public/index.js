import { createRoot } from 'react-dom';

function Spa() {
    return (
      <HashRouter>
          <NavBar/>
          <div>
            <hr/>
          </div>
        <UserContext.Provider value={{users:[{name:'Horowitz',email:'Horowitz@gmail.com',password:'secret',balance:0}]}}>
          <div className="container" style={{padding: "20px"}}>
            <Route path="/" exact         component={Home} />
            <Route path="/CreateAccount/" component={CreateAccount} />
            <Route path="/Login/"         component={Login} />
            <Route path="/deposit/"       component={Deposit} />
            <Route path="/withdraw/"      component={Withdraw} />
            <Route path="/balance/"       component={Balance} />
            <Route path="/alldata/"       component={AllData} />
          </div>
        </UserContext.Provider>      
      </HashRouter>
    );
  }
  
  const root = document.getElementById('root');
  const rootElement = createRoot(root);
  rootElement.render(<Spa />);