import "./loginSignin.css"

export default function LoginSignin() {
  return (
    <div className="login">
      <div className="loginTop">
        <img src="assets/bg/login-top.png" alt="" className="loginBg" />
        <div className="loginMainHeading">My Account</div>
      </div>
      <div className="loginMain">
      <div className="loginLeft">
        <div className="loginHeadingLogin">Login</div>
        <form action="." className="loginLeftSection">
          <label htmlFor="loginMail" className="loginText">Email Address</label><br />
          <input type="email" id="loginMail" className="loginInput" /><br />
          <label htmlFor="loginPassword" className="loginText">Password</label><br />
          <input type="password" id="loginPassword" className="loginInput" /><br />
          <div className="forgotPassword">Forgot password?</div>
          <input type="checkbox" id="remember" className="rememberInput" />
          <label htmlFor="remember" className="rememberText">Remember Me</label><br />
          <button type="submit" className="button">Login</button>
        </form>
      </div>
      <div className="loginRight">
        <div className="loginHeadingAccount">Create an Account</div>
        <form action="." className="loginRightSection">
          <div>
          <label htmlFor="firstName" className="loginText">First Name</label><br />
          <input type="Text" id="firstName" className="loginInput" /><br />
          <label htmlFor="number" className="loginText">Phone Number</label><br />
          <input type="number" id="number" className="loginInput" /><br />
          <label htmlFor="password" className="loginText">Password</label><br />
          <input type="password" id="password" className="loginInput" /><br />
          <button type="submit" className="button">Sign In</button>
          </div>
          <div>
          <label htmlFor="lastName" className="loginText">Last Name</label><br />
          <input type="text" id="lastName" className="loginInput" /><br />
          <label htmlFor="mail" className="loginText">Email Address</label><br />
          <input type="email" id="mail" className="loginInput" /><br />
          <label htmlFor="cpassword" className="loginText">Confirm Password</label><br />
          <input type="password" id="cpassword" className="loginInput" /><br />
          </div>
        </form>
      </div>
      </div>
    </div>
  )
}
