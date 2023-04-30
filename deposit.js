function Deposit() {
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');
  const [amount, setAmount] = React.useState('');
  const ctx = React.useContext(UserContext);
  let i = ctx.users.length -1;

    React.useEffect(() => {
      document.title = 'Deposit';
    });

  function handleChange(){
    setStatus('Only numbers!');
    setTimeout(() => setStatus(''), 5000);
    clearForm();
    alert('Enter a numeric value.')
    return false;
    }
  
    function validate(field, label){
    console.log(field);

    if(!field){
      setStatus('Error: ' + label);
      setTimeout(() => setStatus(''), 5000);
      clearForm();
      return false;
    }
    //Verifys numeric value
    else if (isNaN(+field)) {
      setStatus ('Only numbers!');
      setTimeout (() => setStatus(''), 5000);
      clearForm();
      alert('Enter a numeric value.')
      return false;
    }
    //Verify value is positive
    else if ( field < 0 ) {
      setStatus('Enter a positive number');
      setTimeout(() => setStatus(''), 5000);
      clearForm();
      return false;
    }
    //Sucess message
    setStatus ('Your deposit is sucessful!');
    setTimeout (() => setStatus(''), 5000);
    clearForm();
    return true;
  }

  function handleButton() {
    if (!validate(amount, 'Withdraw amount')) {return};
    ctx.users[i].balance = parseInt(ctx.users[i].balance) + parseInt(amount);
    setShow(false);
  }

  function clearForm(){
    setAmount('');
    setShow (true);
  }
  
  return (
    <center>
    <Card 
      bgcolor="primary"
      header="Deposit"
      status={status}
      body= { show ? ( 
        <>
        <div><p>Balance: {JSON.stringify(ctx.users[i].balance)}</p>
        <input type="input" className="form-control" id="amount" placeholder="Deposit amount" value={amount} onChange={e => !isNaN(+e.currentTarget.value) ? (setAmount(e.currentTarget.value)):(handleChange()) }/><br/><br/>
        <p><button disabled={!amount} className="btn btn-light" onClick={handleButton}>Deposit</button><br/></p></div>
      </>
  ):(
      <>
      <div><p>Balance: {JSON.stringify(ctx.users[i].balance)}</p>
        <input type="input" className="form-control" id="amount" placeholder="Deposit amount" value={amount} onChange={e => setAmount(e.currentTarget.value)}/><br/><br/>
        <p><button disabled={!amount} className="btn btn-light" onClick={handleButton}>Deposit</button><br/></p></div>
      </>
      )}
    />
    </center>
  );
};

