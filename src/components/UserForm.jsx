// import React, { useState } from 'react';

const UserForm = ({inputs, handleInputChange, handleFormSubmit}) =>{
    return (
        <div className="container d-flex flex-column justify-content-center">
            <div className="col-8 align-self-center border mt-5 mb-3">
                <form onSubmit={handleFormSubmit} className="mt-3">
                    <div className="form-group row">
                        <label htmlFor="firstName" className="col-4 text-left col-form-label">
                                First Name:
                        </label>
                        <div className="col-8">
                            <input 
                                type="text" 
                                name="firstName"
                                className="form-control" 
                                placeholder="First Name" 
                                onChange={handleInputChange} 
                                value={inputs.firstName}
                            />
                            {
                                <span>{inputs.firstName.length < 2 ? 
                                    <p className="small">First Name must be at leased 2 characters.</p> : ""}</span>
                            }
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="lastName" className="col-4 text-left col-form-label">
                            Last Name:
                        </label>
                        <div className="col-8">
                            <input 
                                type="text" 
                                name="lastName"
                                className="form-control" 
                                placeholder="Last Name" 
                                onChange={handleInputChange} 
                                value={inputs.lastName}
                            />
                            {
                                <span>{inputs.lastName.length < 2 ? 
                                    <p className="small">Last Name must be at leased 2 characters.</p> : ""}</span>
                            }
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="email" className="col-4 text-left col-form-label">
                            Email:
                        </label>
                        <div className="col-8">
                            <input 
                                type="email" 
                                name="email"
                                className="form-control" 
                                placeholder="Email" 
                                onChange={handleInputChange} 
                                value={inputs.email}
                            />
                            {
                                <span>{inputs.email.length < 2 ? 
                                    <p className="small">Email must be at leased 2 characters.</p> : ""}</span>
                            }
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="password" className="col-4 text-left col-form-label">
                            Password:
                        </label>
                        <div className="col-8">
                            <input 
                                type="password"
                                name="password"
                                className="form-control" 
                                placeholder="Password" 
                                onChange={handleInputChange} 
                            />
                            {
                                <span>{inputs.password.length < 8 ? 
                                    <p className="small">Password must be at leased 8 characters.</p> : ""}</span>
                            }
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="confirmPassword" className="col-4 text-left col-form-label">
                            Confirm Password:
                        </label>
                        <div className="col-8">
                            <input 
                                type="password" 
                                name="confirmPassword"
                                className="form-control" 
                                placeholder="Confirm Password" 
                                onChange={handleInputChange} 
                            />
                            {
                                <span>{inputs.password !== inputs.confirmPassword  ? 
                                    <p className="small">Passwords must match.</p> : ""}</span>
                            }
                        </div>
                    </div>
                    <div className="form-group row">
                        <input 
                            type="submit" 
                            value="Submit" 
                            className="btn btn-primary btn-outline-dark text-white mx-3"
                        />
                    </div>
                </form>
            </div>
        </div>

    );
}

export default UserForm;