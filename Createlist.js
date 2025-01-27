import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


function Createlist() {

    const navigate = useNavigate();  /*to navigate to the home*/

    const [userInput, setuserInput] = useState({
        Name: "",
        age: "",
        email: "",
    })

    const handleChange = ({ target: { value, name} }) => {
        setuserInput({ ...userInput, [name]: value})
    };

    const handleSubmit = async (e) => {             /*it prevents to stop loading and shows the dats as is */
        e.preventDefault()
        console.log(userInput)

        const postData = await axios.post(
            'https://6737493baafa2ef22233489c.mockapi.io/Engineers_details',
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

export default Createlist
