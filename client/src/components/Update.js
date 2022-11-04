import React, {useState, useEffect} from 'react'
import axios from 'axios'
import  {useParams, useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom'


const Update = () => {

    const {id} = useParams()
    const [errors,setErrors] = useState({})
    const navigate = useNavigate()



    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [department, setDepartment] = useState('')
    const [position, setPosition] = useState('')
    const [background, setBackground] = useState('')
    const [role, setRole] = useState('')
    const [employeeSince, setEmployeeSince] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')
    const [image, setImage] = useState('')

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/worker/${id}`)
        .then((res)=>{
            console.log(res)
            setFirstName(res.data.firstName)
            setLastName(res.data.lastName)
            setDepartment(res.data.department)
            setPosition(res.data.position)
            setBackground(res.data.background)
            setRole(res.data.role)
            setEmployeeSince(res.data.employeeSince)
            setEmail(res.data.email)
            setNumber(res.data.number)
            setImage(res.data.image)
        }).catch((err)=>{
            console.log(err)
        })

    },[])

    const submitHandler = (e) => {
        e.preventDefault()
        axios.put (`http://localhost:8000/api/update/${id}`, {
            firstName,
            lastName,
            department,
            position,
            background,
            role,
            employeeSince,
            email,
            number,
            image,
        }).then((res)=>{
            navigate('/')
        }).catch((err)=>{
            console.log(err)
            setErrors(err.response.data.errors)

        })


    }

return (

    <div>
            
    <div className="flex1">
        <h1>Office Directory</h1> 
        <Link to="/" className="m-3">Back to home</Link>
    </div>

    <form onSubmit={submitHandler} className='new container-fluid'>

        <div  className="name col-md-4"> 
            <label className="form-label">First Name:</label>
            <input type="text"className="form-control" value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
            {errors.firstName ?<span className="text-danger">{errors.firstName.message}</span> : null}<br></br>
            
            <label className="form-label" >Last Name:</label>
            <input type="text" className="form-control" value={lastName} onChange={(e)=>setLastName(e.target.value)}/> 
            {errors.lastName ?<span className="text-danger">{errors.lastName.message}</span> : null}<br></br>
            
            <label className="form-label" >Department:</label>
            <input type="text" className="form-control" value={department} onChange={(e)=>setDepartment(e.target.value)}/> 
            {errors.department ?<span className="text-danger">{errors.department.message}</span> : null}<br></br>

            <label className="form-label">Position:</label>
            <input type="text"className="form-control" value={position} onChange={(e)=>setPosition(e.target.value)}/>
            {errors.position ?<span className="text-danger">{errors.position.message}</span> : null}<br></br>

            <label className="form-label">Background:</label>
            <input type="text" className="form-control" value={background} onChange={(e)=>setBackground(e.target.value)}/>
            {errors.background ?<span className="text-danger">{errors.background.message}</span> : null}<br></br>

        </div>

        <div className="name col-md-4"> 
            <label className="form-label"> Role:</label>
            <input type="text"className="form-control" value={role} onChange={(e)=>setRole(e.target.value)}/>
            {errors.role ?<span className="text-danger">{errors.role.message}</span> : null}<br></br>
            
            <label className="form-label" >Employee Since:</label>
            <input type="number" className="form-control" value={employeeSince} onChange={(e)=>setEmployeeSince(e.target.value)}/> 
            {errors.employeeSince ?<span className="text-danger">{errors.employeeSince.message}</span> : null}<br></br>
            
            <label className="form-label" >Email:</label>
            <input type="text" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)}/> 
            {errors.email ?<span className="text-danger">{errors.email.message}</span> : null}<br></br>

            <label className="form-label">Phone Number:</label>
            <input type="number"className="form-control" value={number} onChange={(e)=>setNumber(e.target.value)}/>
            {errors.number ?<span className="text-danger">{errors.number.message}</span> : null}<br></br>

            <label className="form-label">Upload an image:</label>
            <input type="text"className="form-control" value={image} onChange={(e)=>setImage(e.target.value)}/>
            {errors.image ?<span className="text-danger">{errors.image.message}</span> : null}<br></br>

            <button type='submit' className='btn btn-info mt-3'>Edit  Employee</button>


        </div>

    
    </form>

</div>



)

}

export default Update