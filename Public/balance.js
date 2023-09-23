function Balance(){
    const [show, setShow]     = React.useState(true);
    const [status, setStatus] = React.useState('');    
  
    return (
      <Card
        bgcolor="dark"
        header="Balance"
        status={status}
        body={show ? 
          <BalanceForm setShow={setShow} setStatus={setStatus}/> :
          <BalanceMsg setShow={setShow} setStatus={setStatus}/>}
      />
    ) 
  }

  function BalanceMsg(props){
    return(<>
      <h5>Success</h5>
      <button type="submit" 
        className="btn btn-light" 
        onClick={() => {
            props.setShow(true);
            props.setStatus('');}}>
          Check your balance again
      </button>
    </>);
  }

  function BalanceForm(props){
    const [email, setEmail]       = React.useState('');
    const [balance, setBalance] = React.useState('');

    function handle() {
      fetch(`/account/findOne/${email}`)
        .then(response => response.json())
        .then(data => {
          console.log('Data from server:', data);
          console.log('Balance from server:', data.balance)  // Add this log
  
          if (data && data.balance !== undefined) {
            console.log('Setting balance:', data.balance);  // Add this log
            setBalance(data.balance);
            props.setShow(false);
            props.setStatus('Your balance is: $' + data.balance);
          } else {
            props.setStatus('Failed to retrieve balance');
          }
        })
        .catch(err => {
          props.setStatus('Error while fetching balance');
        });
    }

      return (<>
    
        Email<br/>
        <input type="input" className="form-control" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
        <button type="submit" className="btn btn-light" onClick={handle}>Check Balance</button>
     </>);
}