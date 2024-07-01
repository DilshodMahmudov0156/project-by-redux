import React from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {toast} from "react-toastify";

function Home(props) {
    const contacts = useSelector(state => state);
    const dispatch = useDispatch();
    const deleteContact = (id) => {
        dispatch({type: 'DELETE_CONTACT', payload: id});
        toast.success('Contact deleted successfully!');
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 my-5 d-flex justify-content-end">
                    <Link to="/add" className="btn btn-outline-dark">Add Contact +</Link>
                </div>
                <div className="col-md-10 mx-auto">
                    <h1>Welcome to React Redux Student Books</h1>

                    <table className="table table-hover">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Number</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {contacts.map((contact, id) => (
                            <tr key={id}>
                                <td>{id+1}</td>
                                <td>{contact.name}</td>
                                <td>{contact.email}</td>
                                <td>{contact.number}</td>
                                <td>
                                    <Link to={`/edit/${contact.id}`} className="btn btn-sm btn-primary mx-2">
                                        Edit
                                    </Link>
                                    <button
                                        className="btn btn-sm btn-danger"
                                        onClick={() => {deleteContact(contact.id)}}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Home;