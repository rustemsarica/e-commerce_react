import { useState } from "react"
import { useEffect } from "react"
import { useRef } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axiosClient from "../../axios-client"
import Loading from "../inc/Loading"

export default function UserForm(){

    const {id} = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState({
        id: null,
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
    });

    if(id){
        useEffect(()=>{
            setLoading(true);
            axiosClient.get('/users/'+id)
            .then(({data})=>{
                setLoading(false);
                setUser(data);
            })
            .catch(()=>{
                setLoading(false);
            })
        },[])
    }

    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const [errors, setErrors] = useState(null);

    const onSubmit = (ev)=>{
        ev.preventDefault()

        if(user.id){
            axiosClient.put('/users/'+user.id, user)
            .then(()=>{
                navigate('/users')
            })
            .catch(err => {
                const response = err.response;
                if(response && response.status==422){
                    setErrors(response.data.errors);
                }
            })
        }else{
            axiosClient.post('/users', user)
            .then(()=>{
                navigate('/users')
            })
            .catch(err => {
                const response = err.response;
                if(response && response.status==422){
                    setErrors(response.data.errors);
                }
            })
        }
    }

    return (
        <div className="container-fluid py-4">
            <div className="row">
                <div className="col-md-6 m-auto">
                    {loading &&
                        <Loading/>
                    }
                    {!loading &&
                        <div className="card my-4">
                            <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                                <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                                    <h6 className="text-white text-capitalize ps-3 text-center">{id && user.name }{!id && "New User" }</h6>
                                </div>
                            </div>
                            <div className="card-body px-3 pb-2">
                                <form onSubmit={onSubmit}>
                                    { errors &&
                                        <div className="alert alert-danger">
                                            {Object.keys(errors).map(key => (
                                                <div key={key}>{errors[key][0]}</div>
                                            ))}
                                        </div>
                                    }
                                    <label>Name:</label>
                                    <input value={user.name} onChange={ev => setUser({...user, name:ev.target.value})} ref={nameRef} className="form-control mb-2" type="text" placeholder="Name" autoComplete="off" />

                                    <label>Email:</label>
                                    <input value={user.email} onChange={ev => setUser({...user, email:ev.target.value})} ref={emailRef} className="form-control mb-2" type="email" placeholder="Email" autoComplete="off" />

                                    <label>Password:</label>
                                    <input onChange={ev => setUser({...user, password:ev.target.value})} ref={passwordRef} className="form-control mb-2" type="password" placeholder="Password" autoComplete="off" />

                                    <label>Password Cofirmation:</label>
                                    <input onChange={ev => setUser({...user, password_confirmation:ev.target.value})} ref={passwordConfirmRef} className="form-control mb-2" type="password" placeholder="Password Confirmation" autoComplete="off" />

                                    <button className="btn btn-primary my-2 w-100">Save</button>
                                </form>
                            </div>
                        </div>
                    }
                </div>
            </div>

        </div>
    )
}
