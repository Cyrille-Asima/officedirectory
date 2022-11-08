import React,{useEffect, useState,} from "react"
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'


const AllEmployee = () => {

    const [employeeList, setEmployeeList] = useState([])
    const navigate = useNavigate()


    useEffect(()=>{
        axios.get('http://localhost:8000/api/allWorkers',{withCredentials:true, credentials:'include'})
        .then((res)=>{
            console.log(res)
            setEmployeeList(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    },[])

    const logout = (e) => {
        console.log('test')
        axios.get('http://localhost:8000/api/logout',{withCredentials:true, credentials:'include'})
        .then((res)=>{
            console.log('logged out')
            navigate('/login')
        }).catch((err)=>{
            console.log(err)
        })
    }





    return (
        <div className="flex-wrap">
            
            <div class="nav2"> 
                <h1>All Employees</h1>
            <Link to="/employer" className="m-3">Add new employee </Link>
            <button onClick={logout}>Logout</button>

            </div>
        

            <div className='d-flex flex-wrap'>
            { 
                employeeList.map((employee)=>(
                    <div className='col col-2 mt-3'>
                        <img src={employee.image} className="col-9" /><br></br>
                        <h4>{employee.firstName}, {employee.lastName}</h4>
                        <h5>{employee.position}</h5>
                        <Link className='navBarLink'to={`/employee/${employee._id}`}>Read More</Link> 
                    </div> 
                ))
            }
        </div>
            
            
            
            
            
        </div>
        


    )
}

export default AllEmployee