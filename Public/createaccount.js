// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   GoogleAuthProvider,
//   signInWithPopup,
// } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js";

   
function CreateAccount(){
  // Your web app's Firebase configuration, get it from your firebase project settings page on the General tab.
  // const firebaseConfig = {
  //   apiKey: "AIzaSyAdsv0Bt16GFEN7Ph0qpTs-LtzW6fVoAIM",
  //   authDomain: "fullstackbankapp.firebaseapp.com",
  //   projectId: "fullstackbankapp",
  //   storageBucket: "fullstackbankapp.appspot.com",
  //   messagingSenderId: "706429237779",
  //   appId: "1:706429237779:web:892cc45ee3ffa01b5f5de6",
  //   measurementId: "G-B61XLJSLZM"
  // };

  // // Initialize Firebase
  // const app = initializeApp(firebaseConfig);
  // // Initialize Firebase Authentication and get a reference to the service
  // const auth = getAuth(app);

  // // TODO: initialize provider for google auth
  // const provider = new GoogleAuthProvider();

  // console.log("app initialized...");

  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');

  return (
    <Card
      bgcolor="dark"
      header="Create Account"
      status={status}
      body={show ? 
        <CreateForm setShow={setShow}/> : 
        <CreateMsg setShow={setShow}/>}
    />
  )
}

function CreateMsg(props){
  return(<>
    <h5>Success</h5>
    <button type="submit" 
      className="btn btn-light" 
      onClick={() => props.setShow(true)}>Add another account</button>
  </>);
}

function CreateForm(props){
  const [name, setName]         = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');

  function handle(){
    console.log(name,email,password);
    const url = `/account/create/${name}/${email}/${password}`;
    (async () => {
        var res  = await fetch(url);
        var data = await res.json();    
        console.log(data);        
    })();
    props.setShow(false);
  }    

  return (<>

    Name<br/>
    <input type="input" className="form-control" placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)} /><br/>
    Email address<br/>
    <input type="input" className="form-control" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
    Password<br/>
    <input type="password" className="form-control" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
    <button type="submit" className="btn btn-light" onClick={handle}>Create Account</button>
  </>);
}