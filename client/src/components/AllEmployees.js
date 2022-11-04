import React,{useEffect, useState,} from "react"
import axios from 'axios'
import { Link } from 'react-router-dom'


const AllEmployee = () => {

    const [employeeList, setEmployeeList] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8000/api/allWorkers')
        .then((res)=>{
            console.log(res)
            setEmployeeList(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    },[])







    return (
        <div className="flex-wrap">
            
            <div class="nav2"> 
                <h1>All Employees</h1>
            <Link to="/employer" className="m-3">Add new employee </Link>
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