import { useState } from "react";
import { useRef } from "react"
import { Link } from "react-router-dom"
import  Logo  from "../../assets/img/logo.png"
import axiosClient from "../../axios-client";
import { useStateContext } from "../../components/contexts/ContextProvider";

export default function Login(){

        const emailRef = useRef();
        const passwordRef = useRef();
        const [errors, setErrors] = useState(null);
        const {setUser, setToken} = useStateContext();

    const onSubmit = (ev)=>{
        ev.preventDefault()

        const payload = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        }

        axiosClient.post('/login', payload)
        .then(({data}) => {
            setUser(data.user)
            setToken(data.token)
        })
        .catch(err => {
            const response = err.response;
            if(response && response.status==422){
                if(response.data.errors){
                    setErrors(response.data.errors);
                }else{
                    setErrors({
                        email: [response.data.message]
                    })
                }

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
                        <input ref={emailRef} className="form-control mb-2" type="email" placeholder="Email" />
                        <input ref={passwordRef} className="form-control mb-2" type="password" placeholder="Password" />
                        <button className="btn btn-primary mb-2 w-100">Login</button>
                        <Link className="btn btn-secondary w-100" to="/signup">Create an account</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}
