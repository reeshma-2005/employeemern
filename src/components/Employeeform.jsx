import React from 'react'
import Navbarlogin from './Navbarlogin'
import './style.css'

const Employeeform = () => {
  return (
    <div>
            <Navbarlogin />
            <div className="container">
                <div className="row emp-add bg-3">
                    <h1 >Add Employee</h1>
                    <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="col col-sm-8 emp">
                            <form className="form-horizontal">
                                <div className="form-group">
                                    <lable className="control-label col-sm-4">Name</lable>
                                    <div className="col-sm-8">
                                        <input type="text" placeholder='' />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <lable className="control-label col-sm-4">Email Id</lable>
                                    <div className="col-sm-8">
                                        <input type="text" placeholder='' />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <lable className="control-label col-sm-4">Location</lable>
                                    <div className="col-sm-8">
                                        <input type="text" placeholder='' />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <lable className="control-label col-sm-4">Designation</lable>
                                    <div className="col-sm-8">
                                        <input type="text" placeholder=' ' />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <lable className="control-label col-sm-4">           </lable>
                                    <div className="col-sm-offset-4 col-sm-8">
                                        <button type="submit" class="btn btn-success" >Add</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>

  )
}

export default Employeeform