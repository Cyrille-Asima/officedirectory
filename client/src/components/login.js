import React,{useState} from 'react'
import axios from 'axios'
import {useNavigate, Link} from 'react-router-dom'


const Login = () => {

    const navigate = useNavigate()

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [errors,setErrors] = useState({})

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post ('http://localhost:8000/api/login',{
            email,
            password,
        
        },{withCredentials:true,Credentials:'include'})
        .then((res)=>{
            navigate('/employees')
        }).catch((err)=>{
            console.log(err)
            setErrors(err.response.data.errors)

        })
    }

    return (

        <div>
            <h1>Register to Office Directory</h1>
            <Link to='/'>Need an account?</Link>
            <form onSubmit={submitHandler} className='col-3 mx-auto'>
                <label>Email:</label>
                <input type="text" className='form-control'onChange={(e)=>setEmail(e.target.value)}></input>
                {/* {errors.email ?<span className="text-danger">{errors.email.message}</span> : null}<br></br> */}
                <label>Password:</label>
                <input type="password" className='form-control'onChange={(e)=>setPassword(e.target.value)}></input>
                {/* {errors.password ?<span className="text-danger">{errors.password.message}</span> : null}<br></br> */}


                <button className='btn btn-info mt-3'>Login</button>
            </form>
        </div>
    )



}

export default Login