import React, { useState } from 'react';

const UserCard = ({firstName, lastName, email, password, confirmPassword}) => {
    
    return (
        <div className="card col-4 offset-4">
            <div className="card-body">
                <h4 className="card-title">Name: {firstName} {lastName}</h4>
                <p className="card-text">Email: {email}</p>
                <p className="card-text">Password: {password}</p>
                <p className="card-text">Confirm Password: {confirmPassword}</p>
            </div>
        </div>
    );
}

export default UserCard;