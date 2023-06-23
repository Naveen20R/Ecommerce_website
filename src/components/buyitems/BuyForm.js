import React from 'react';
import './Buy.css';
import { useState } from 'react';
const formHeading = {
    textAlign: 'center',
    color: 'blue',
    marginTop:'60px',
}

function BuyForm() {
    const [username, Setusername] = useState();
    const userName = () => {
        var responce = window.confirm(` Are you want to set the username as ${localStorage.getItem('useName')} ? \n NOTE: To change the userName again click the input field and click the cancel button.`)

        if (responce) {
            Setusername(localStorage.getItem('useName'));
        } else {
            Setusername();
        }
    }
    return (
        <>
            <h2 style={formHeading} >Fill This Form</h2>
            <form className='BuyForm'>
                <div class="form-group">
                    <div class="row">
                        <div class="col">
                            <label for="exampleInputEmail1">Name</label>
                            <input type="text" value={username} onClick={userName} class="form-control" placeholder="First name" required />
                            <div class="valid-feedback"></div>
                        </div>
                        <div class="col">
                            <label for="exampleInputEmail1">Last Name</label>
                            <input type="text" class="form-control" placeholder="Last name" required />
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Mobile Number</label>
                    <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Mobile Number" required />

                </div>
                <div class="form-group">
                    <label for="inputAddress">Address</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder="Enter Address" required />
                </div>

                <div class="row">
                    <div class="col">
                        <label for="exampleInputEmail1">City</label>
                        <input type="text" class="form-control" placeholder="Enter City" required />
                    </div>
                    <div class="col">
                        <label for="exampleInputEmail1">State</label>
                        <input type="text" class="form-control" placeholder="Enter State" required />
                    </div>
                    <div class="row">
                        <div class="col">
                            <label for="exampleInputEmail1">Select size</label>
                            <select class="form-control" required>
                                <option value="">Open this select size</option>
                                <option value="1">X-Small</option>
                                <option value="2">Small</option>
                                <option value="3">Medium</option>
                                <option value="3">Large</option>
                                <option value="3">X-Large</option>
                                <option value="3">XX-Large</option>
                            </select>
                        </div>
                        <div class="col">
                            <label for="exampleInputEmail1">Select Number Of Quantity</label>
                            <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Quantity" required />
                        </div>
                    </div>
                </div>
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" required />
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" class="btn btn-primary" >Buy Now</button>
            </form>

        </>
    )
}

export default BuyForm
