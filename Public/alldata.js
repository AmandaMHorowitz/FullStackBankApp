function AllData(){
    const [data, setData] = React.useState('');

    React.useEffect(() => {

      // fetch all accounts from API
      fetch('/account/all')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setData(JSON.stringify(data));
        });
    },  []);
    
    function buildCard() {
      for (let i = 0; i < ctx.users.length; i++) {
        console.log(ctx.users[i].name);
      }
    }
    
    return (
      <>
        <h5>All Data in Store</h5>
        {data}
      </>;
};