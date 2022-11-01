import React, { Component } from 'react'

class Signup_component extends Component {
    render() {
        return (
        <form>
            <h3>Sign Up</h3>
            <div className="mb-3">
            <label>First name</label>
            <input
                type="text"
                className="form-control"
                placeholder="First name"
                
            />
            </div>
            <div className="mb-3">
            <label>Last name</label>
            <input type="text" className="form-control" placeholder="Last name" />
            </div>
            <div className="mb-3">
            <label>Email address</label>
            <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                required= {true}
            />
            </div>
            <div className="mb-3">
            <label>Password</label>
            <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                required= {true}
            />
            </div>
            <div className="d-grid">
            <button type="submit" className="btn btn-primary">
                Sign Up
            </button>
            </div>
            <p className="forgot-password text-right">
            Already registered <a href="/sign-in">sign in?</a>
            </p>
        </form>
        )
    }
}

export default Signup_component