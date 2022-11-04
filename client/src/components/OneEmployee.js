import React,{useEffect, useState,} from "react"
import {useParams, useNavigate, Link} from 'react-router-dom'
import axios from 'axios'


const OneEmployee = () => {

    const {id} = useParams()

    const navigate = useNavigate()

    const [oneEmployee, setOneEmployee] = useState({})

    
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/worker/${id}`)
        .then((res)=>{
            setOneEmployee(res.data)
        }).catch((err)=>{
            console.log(err)
        })

    },[])

    const deleteHandler = (id) => {
        axios.delete(`http://localhost:8000/api/delete/${id}`)
        .then((res)=>{
            console.log('Deleted')
            navigate('/')
        }).catch((err)=>{
            console.log(err)
        })

    }

    return (
        <div > 

            <div class="flex1">
                <h1>Office Directory</h1> 
                <Link to="/" className="m-3">back to home</Link>
        </div>


        <div class="main"> 
        
                <div class="flex">
                    <div>
                        <h2> {oneEmployee.firstName}, {oneEmployee.lastName}</h2> 
                        <img src={oneEmployee.image} className="col col-8 img-thumbnail "/> <br></br>
                        <Link to={`/update/${oneEmployee._id}`}>Edit Employee</Link> 
                        <button className="btn btn-danger" onClick={(e)=>deleteHandler(oneEmployee._id)}> Delete Profile</button>
                        </div>
                    
                </div>
                
                <div class="second">

                    <div class="flex2 ">
                    <div class="flex3">
                        <h5>Role:</h5>
                        <h5>Department:</h5>
                        <h5>Employee Since:</h5>
                        <h5>Email:</h5>
                        <h5>Phone Number:</h5>
                        <h5>Background:</h5>
                    </div>

                </div>
                <div class="flex2">
                    
                <div class="flex4">
                        <h5>{oneEmployee.role}</h5>
                        <h5>{oneEmployee.department}</h5>
                        <h5>{oneEmployee.employeeSince}</h5>
                        <h5>{oneEmployee.email}</h5>
                        <h5>{oneEmployee.number}</h5>
                        <h5>{oneEmployee.background}</h5>
                    </div>
                </div>

                </div>
            
        </div>

            
            
            
        </div>


    )
}

export default OneEmployee