import React from 'react';

const Login = () => {
    return (
        <React.Fragment>
            <form >
                <div className="container">
                    <label htmlFor="uname"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="uname" required />

                    <label htmlFor="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required />

                    <button type="submit">Login</button>
                 
                </div>

                <div className="container" style={{backgroundColor:'#f1f1f1'}}>
                    <button type="button" className="cancelbtn">Cancel</button>
                    <span className="psw">Forgot <a href="#">password?</a></span>
                </div>
            </form>
        </React.Fragment>
    )
}

export default Login;