function AllData(){
  const ctx = React.useContext(UserContext);
  const usersData = ctx.users;

  function createCard(user) {
    const { name, email, password, balance} = user;
    return (
      <center><Card 
        header = "All Data"
        bgcolor="primary"
        body={
          <>
            <p className="card-text">Name: {name}</p>
            <p className="card-text">Email: {email}</p>
            <p className="card-text">Password: {password}</p>
            <p className="card-text">Balance: ${balance}</p>
          </>
        }
        />
      </center>
    );
  }

  const cards = usersData.map(createCard);

  return(
    <div>
      {cards}
    </div>
  );
}