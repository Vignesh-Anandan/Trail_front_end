import axios from 'axios';
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';

function EditUser() {

    const navigate = useNavigate();  /*to navigate to the home*/
    const {id}  = useParams();

    const [userInput, setUserInput] = useState({
        Name: "",
        age: "",
        email: "",
    });

    useEffect(()=> {
        getData();
    }, []);

    const getData = async () => {
        const user = await axios.get(
          `https://6737493baafa2ef22233489c.mockapi.io/Engineers_details/${id}`
        );
    
        setUserInput(user.data);
      };

    const handleChange = ({ target: { value, name} }) => {
        setUserInput({ ...userInput, [name]: value})
    };

    const handleSubmit = async (e) => {             /*it prevents to stop loading and shows the dats as is */
        e.preventDefault();

        const postData = await axios.put(
            `https://6737493baafa2ef22233489c.mockapi.io/Engineers_details/${id}`,
            userInput
        );

        if(postData)    {
            navigate("/")
        }
    };

    return (
        <div class="bg-success p-2 text-dark bg-opacity-25">
           <div className="mainContainer">
            <form onSubmit={handleSubmit}>
                <h2>New Registration</h2>

                <div class="mb-3">
                    <label for="exampleInputEmail" class="form-label">
                        Name
                    </label>
                    <input type="text" class="form-control" name="Name" onChange={handleChange} />
                </div>

                <div class="mb-3">
                    <label for="exampleInputEmail" class="form-label">
                        Age
                    </label>
                    <input type="number" class="form-control" name="age" onChange={handleChange} />
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail" class="form-label">
                        Email
                    </label>
                    <input type="email" class="form-control" name="email" onChange={handleChange} />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
     </div>
    )
}


export default EditUser
