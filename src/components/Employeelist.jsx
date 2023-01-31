import React from 'react'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Button } from 'react-bootstrap'

// const Express=require('express')
// const Cors=require('cors')
// let app=Express()


//  app.use(Cors());
const Employeelist = () => {
//   const [data,setEmployeeList]=useState([]);
// const [data,setData]=useState('');
var [employeeList, setEmployeeList] = useState([])
var employeeLink= "http://localhost:3003/employeelist";
  useEffect(()=>{
    getData();
  },[])

  

  const getData = () => {
    
    return axios.post(employeeLink)
      .then((response) => {
        console.log("response",response.data);
        setEmployeeList(response.data);
      })
      .catch(
        (error) => {
            console.log("The error in loading data" + error)
        }
      )
  }



  //   const getUsers=async()=>{
//     const response=await axios.get("http://localhost:3003/employeelist");
//     console.log("res",response.data);
//    // const jsonResult=response.json();
//     //console.log(jsonResult);
// console.log("data1",response.data)
//     if(response.status===0){
//         // setData(jsonResult.data);
//         setData(response.data);
//     }
    
//   };
//   console.log("data",data);
  return (
    <div>
        
        <div className='container'>
          <div className="row">
            <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <div className="row g-3">
                <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                  <table class="table table-success table-striped">
                    <thead>
                      <tr>
                        <th scope="col">NAME</th>
                        <th scope="col">EMAILID</th>
                        <th scope="col">LOCATION</th>
                        <th scope="col">DESIGNATION</th>
                        {/* <th scope="col"><Button>Edit</Button></th>
                        <th scope="col"><Button>Delete</Button></th> */}
                      </tr>
                    </thead>
                    <tbody>
                      {employeeList.map(
                        (value, index) => {
                          return <tr>
                            <td>{value.id}</td>
                            <td>{value.name}</td>
                            <td>{value.email}</td>
                          </tr>
                        }
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div> 
    </div>
  )
  }
export default Employeelist