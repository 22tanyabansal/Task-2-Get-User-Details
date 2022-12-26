import {useState} from 'react';
import "./App.css";
function App(){
  const [users, setUsers] = useState([]);
  const loadUsers= async()=>{
  const response = await fetch('https://reqres.in/api/users?page=1');
  const jsonresponse = await response.json();
  setUsers(jsonresponse.data);
  document.getElementById("btn").style.display = "none";
}
return(
  <>
  <center>
  <header className='header'>
    <button type="button" id="btn" onClick={loadUsers}>Get User Details</button>
  <div className="user">
    {users.map((data,index)=>{
      return(
        <div className='card column' key={index}>
          <img src={data.avatar} className="card-image" alt=""></img>
            <div className='card-data'>
              <h2 className='card-name'>
                {data.first_name} {data.last_name}
              </h2>
              <h3 className="card-email">{data.email}</h3>
            </div>
        </div>
      
      );
    })}
  </div>
  </header>
  </center>
  </>
);
}
export default App;
