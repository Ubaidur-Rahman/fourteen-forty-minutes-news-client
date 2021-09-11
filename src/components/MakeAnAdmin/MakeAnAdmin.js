import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';

const MakeAnAdmin = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        const adminData = {
            email: data.email,
            password: data.password

        };
        const url = 'http://localhost:5055/makeAnAdmin'

        console.log(adminData)
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(adminData)
        })
            .then(res => res.json())
            .then(data => console.log(data))
        alert('admin added')

    }
    return (
        
<div className="col-md-6">
           
            <form className="border border-primary border-2 rounded" style={{ marginTop: "30px" }} onSubmit={handleSubmit(onSubmit)}>
            <h4 className="text-center mt-5">Make an Admin</h4>
                <div className=" justify-content-around p-3">
                    <label><h5>Email</h5></label> <br />
                    <input className="form-control" name="email" placeholder="Enter email" ref={register} />
                    <label><h5>Password</h5></label> <br />
                    <input className="form-control" name="password" placeholder="Enter password" ref={register} />
                    <br /><div className=" text-center">
                        <input className="btn custom-btn-bg w-50" type="submit" value="Submit" />
                    </div>
                </div>
            </form>
</div>
        
    );
};

export default MakeAnAdmin;