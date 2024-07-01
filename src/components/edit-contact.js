import React, {useEffect, useState} from 'react';
import {Link, useParams, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {toast} from "react-toastify";
import {v4 as uuidv4} from "uuid";

function EditContact(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const {id} = useParams();
    const contacts = useSelector(state => state);
    const dispatch = useDispatch();
    const currentContact = contacts.find(contact => contact.id === id);
    const navigate = useNavigate();

    useEffect(() => {
        if (currentContact){
            setName(currentContact.name);
            setEmail(currentContact.email);
            setNumber(currentContact.number);
        }
    }, [currentContact]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const checkEmail = contacts.find(contact => contact.id !== id && contact.email === email);
        const checkNumber = contacts.find(contact => contact.id !== id && contact.number === number);

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
                id: id,
                name,
                email,
                number
            }
            dispatch({type: 'UPDATE_CONTACT', payload: data});
            console.log(contacts);
            toast.success('Student updated successfully!');
            navigate('/');
        }

    }

    return (
        <div className="container">
            {
                currentContact? (
                    <div className="row">
                        <h1 className="display-6 d-flex justify-content-center mt-3">Edit Student (<p className="dots">{id})</p></h1>
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
                                <button className="btn btn-dark mx-3 mt-3">
                                    Update Student
                                </button>
                            </form>
                        </div>
                    </div>
                ) : (
                    <div className="alert alert-warning alert-dismissible fade show w-75 mx-auto mt-5">
                        <strong>🙄 Oh sorry bro!</strong> <p className="d-flex">Student Contact with id: (<p className="dots"> {id}</p>) is not exists!</p>
                    </div>
                )
            }
        </div>
    );
}

export default EditContact;