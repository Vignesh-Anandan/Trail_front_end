import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Userlist() {
  const [state, setState] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {

    const userData = await axios.get(
      'https://6737493baafa2ef22233489c.mockapi.io/Engineers_details'
    );

    setState(userData.data)
  };

  const handleDelete =  async (id) => {
    const deleteData = await axios.delete(
      `https://6737493baafa2ef22233489c.mockapi.io/Engineers_details/${id}`
    );
    if(deleteData){
      getData();
    }
  };

  return (
    <div class="bg-success p-2 text-white bg-opacity-75">
     <Link to={"/Createlist"} className="btn btn-primary m-4">
        Create user
      </Link>
      
      <table class="table table-dark">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Email</th>
             <th scope="col">Action taken</th>
          </tr>
        </thead>
        <tbody>
          {state.map((item, index) => {
            return (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{item.Name}</td>
                <td>{item.age}</td>
                <td>{item.email}</td>
                <td>
              <Link to={`/edit/${item.id}`} className="btn btn-primary">
                  EDIT
                    </Link>
                  <button className="btn btn-danger" onClick={()=>{
                    handleDelete(item.id);
                  }}>REMOVE</button>
                </td>
              </tr>
            );
          })
          }

        </tbody>
      </table>
    </div>
  )

}

export default Userlist
