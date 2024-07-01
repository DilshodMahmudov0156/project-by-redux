import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {toast} from "react-toastify";
import { v4 as uuidv4} from "uuid";

function AddContact(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const contacts = useSelector((state) => state);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const checkEmail = contacts.find(contact => contact.email === email && contact);
        const checkNumber = contacts.find(contact => contact.number === number && contact);
        if(!email || !number || !name){
            return toast.warning('Please fill in all fields!')
        };
        if (checkEmail){
            toast.error('This email allready Exists')
        }
        if(checkNumber){
            toast.error('This number allready Exists')
        }

        if(name && !checkEmail && !checkNumber){
            const data = {
                id: uuidv4(),
                name,
                email,
                number
            }
            dispatch({type: 'ADD_CONTACT', payload: data});
            console.log(contacts);
            toast.success('Student ddded successfully!');
            navigate('/');
        }

    }

    return (
        <div className="container">
            <div className="row">
                <h1 className="display-6 text-center mt-3">Add Contact</h1>
                <div className="col-md-6 mx-auto p-5 shadow card mt-3">
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="name"
                            className="form-control"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value)
                            }}
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="form-control my-3"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                        />
                        <input
                            type="number"
                            placeholder="Number"
                            className="form-control"
                            value={number}
                            onChange={(e) => {
                                setNumber(e.target.value)
                            }}
                        />
                        <Link to="/" className="btn btn-outline-danger mt-3">Cancel</Link>
                        <input type="submit" value="Add Student" className="btn btn-block btn-dark mx-3  mt-3"/>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddContact;