import { useContext } from "react";
import { LoginContext } from "../../context/LoginContext";
import { useNavigate } from "react-router-dom";


function LoginPage(){
	const { setIsLogin } = useContext(LoginContext);
	const navigate = useNavigate();
	function handleLogin(e){
		e.preventDefault();
		setIsLogin(true);
		navigate("/");
	}
	
    return(
        <>
		<div className="text-center">
            <h2>Login Form</h2>
	        <form onSubmit={handleLogin}>
		        <label for="username">Username:</label>
		        <input type="text" id="username" name="username"/><br /><br /><br />
		        <label for="password">Password:</label>
		        <input type="password" id="password" name="password"/><br /><br />
		        <input type="submit" value="Login" />
	        </form>
		</div>
        </>
    );
}
export default LoginPage;