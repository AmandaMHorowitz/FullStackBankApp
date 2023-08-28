function Home(){
  return (
    <Card
      txtcolor="black"
      header="Bank of Horowitz"
      title="Welcome to the bank"
      text="Please use this site for all your banking needs. Security not guaranteed."
      body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
    />    
  );  
}
