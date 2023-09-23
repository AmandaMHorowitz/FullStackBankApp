import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js";

function Login(){
    // Your web app's Firebase configuration, get it from your firebase project settings page on the General tab.
    const firebaseConfig = {
        apiKey: "AIzaSyAdsv0Bt16GFEN7Ph0qpTs-LtzW6fVoAIM",
        authDomain: "fullstackbankapp.firebaseapp.com",
        projectId: "fullstackbankapp",
        storageBucket: "fullstackbankapp.appspot.com",
        messagingSenderId: "706429237779",
        appId: "1:706429237779:web:892cc45ee3ffa01b5f5de6",
        measurementId: "G-B61XLJSLZM"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    // Initialize Firebase Authentication and get a reference to the service
    const auth = getAuth(app);

    // TODO: initialize provider for google auth
    const provider = new GoogleAuthProvider();

    console.log("app initialized...");

    // get elements
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const login = document.getElementById("login");
    const signup = document.getElementById("signup");
    const logout = document.getElementById("logout");
    const loggedInStatus = document.getElementById("loggedInStatus");
    const googlelogin = document.getElementById("googlelogin");

    const [show, setShow]     = React.useState(true);
    const [status, setStatus] = React.useState('');  

    // login
    login.addEventListener("click", (e) => {
        signInWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            // Signed in
            console.log(userCredential);
        })
        .catch((error) => {
            console.log(error);
        });
    });
    
    return (
      <Card
        bgcolor="dark"
        header="Login"
        status={status}
        body={show ? 
          <LoginForm setShow={setShow} setStatus={setStatus}/> :
          <LoginMsg setShow={setShow} setStatus={setStatus}/>}
      />
    ) 
  }
  
  function LoginMsg(props){
    return(<>
      <h5>Success</h5>
      <button type="submit" 
        className="btn btn-light" 
        onClick={() => props.setShow(true)}>
          Authenticate again
      </button>
    </>);
  }
  
  function LoginForm(props){
    const [email, setEmail]       = React.useState('');
    const [password, setPassword] = React.useState('');
  
    function handle(){
      fetch(`/account/login/${email}/${password}`)
      .then(response => response.text())
      .then(text => {
          try {
              const data = JSON.parse(text);
              props.setStatus('');
              props.setShow(false);
              console.log('JSON:', data);
          } catch(err) {
              props.setStatus(text)
              console.log('err:', text);
          }
      });
    }
  
    return (<>
  
      Email<br/>
      <input type="input" className="form-control" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
      Password<br/>
      <input type="password" className="form-control" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
      <button type="submit" className="btn btn-light" onClick={handle}>Login</button>
     
    </>);
  }