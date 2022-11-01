import React, { Component } from 'react'

class Password_reset extends Component {
    render() {
        return (
            <form>
            <h3>Reset Password</h3>
            <div className="mb-3">
            <label>Email address</label>
            <input
                type="email"
                className="form-control"
                placeholder="Enter email"
            />
            </div>
            <div className="mb-3">
            <label>Old Password</label>
            <input
                type="password"
                className="form-control"
                placeholder="Enter old password"
                required= {true}
            />
            </div>
            <div className="mb-3">
            <label>New Password</label>
            <input
                type="password"
                className="form-control"
                placeholder="Enter new password"
                required= {true}
            />
            </div>
            <div className="d-grid">
            <button type="submit" className="btn btn-warning">
                Reset
            </button>
            </div>
            <p className="forgot-password text-right">
            Back to login <a href="/sign-in"> sign in?</a>
            </p>
            </form>
        )
    }
}

export default Password_reset