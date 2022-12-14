import React, { Component } from 'react'

class Login_component extends Component {
    render() {
        return (
        <form>
            <h3>Sign In</h3>
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
            <div className="mb-3">
            <div className="custom-control custom-checkbox">
            <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                <span className="remember-me-tag">Remember me</span>
                </label>
            </div>
            </div>
            <div className="d-grid">
            <button type="submit" className="btn btn-primary">
                Submit
            </button>
            </div>
            <p className="forgot-password text-right">
            Forgot <a href="/reset-password">password?</a>
            </p>
        </form>
        )
    }
    }

export default Login_component