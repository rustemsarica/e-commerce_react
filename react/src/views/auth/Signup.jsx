import { useState } from "react";
import { useRef } from "react"
import { Link } from "react-router-dom"
import  Logo  from "../../assets/img/logo.png"
import axiosClient from "../../axios-client";
import { useStateContext } from "../../components/contexts/ContextProvider";

export default function Signup(){


        const nameRef = useRef();
        const emailRef = useRef();
        const passwordRef = useRef();
        const passwordConfirmRef = useRef();
        const [errors, setErrors] = useState(null);
        const {setUser, setToken} = useStateContext();

    const onSubmit = (ev)=>{
        ev.preventDefault()


        const payload = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            password_confirmation: passwordConfirmRef.current.value,
        }

        axiosClient.post('/signup', payload)
        .then(({data}) => {
            setUser(data.user)
            setToken(data.token)
        })
        .catch(err => {
            const response = err.response;
            if(response && response.status==422){
                setErrors(response.data.errors);
            }
        })
    }

    return (
        <div className="container text-center">
            <div className="row">
                <div className="col-md-4 m-auto p-4">
                    <img className="mw-100 p-4" src={Logo} alt="" />
                    <form onSubmit={onSubmit}>
                        { errors &&
                        <div className="alert alert-danger">
                            {Object.keys(errors).map(key => (
                                <div key={key}>{errors[key][0]}</div>
                            ))}
                        </div>
                        }
                        <input ref={nameRef} className="form-control mb-2" type="text" placeholder="Name" />
                        <input ref={emailRef} className="form-control mb-2" type="email" placeholder="Email" />
                        <input ref={passwordRef} className="form-control mb-2" type="password" placeholder="Password" />
                        <input ref={passwordConfirmRef} className="form-control mb-2" type="password" placeholder="Password Confirmation" />
                        <button className="btn btn-primary mb-2 w-100">Register</button>
                        <Link className="btn btn-secondary w-100" to="/login">Login</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}
