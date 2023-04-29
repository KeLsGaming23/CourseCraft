import { useContext } from "react";
import { LoginContext } from "../../context/LoginContext";
import { useNavigate } from "react-router-dom";


function LoginPage() {
	const { setIsLogin, setUserRole } = useContext(LoginContext);
	const navigate = useNavigate();
	function handleLogin(e) {
		e.preventDefault();
		const username = e.target.username.value;
		const password = e.target.password.value;

		if (username === "student" && password === "student") {
			setUserRole("student");
			setIsLogin(true);
		} else if (username === "instructor" && password === "instructor") {
			setUserRole("instructor");
			setIsLogin(true);
		} else if (username === "admin" && password === "admin") {
			setUserRole("admin");
			setIsLogin(true);
		} else {
			setUserRole("Not Login");
			setIsLogin(false);
		}

		navigate("/");
	}

	return (
		<>
			<div className="text-center">
				<h2>Login Form</h2>
				<form onSubmit={handleLogin}>
					<label htmlFor="username">Username:</label>
					<input type="text" id="username" name="username" /><br /><br /><br />
					<label htmlFor="password">Password:</label>
					<input type="password" id="password" name="password" /><br /><br />
					<input type="submit" value="Login" />
				</form>
			</div>
		</>
	);
}
export default LoginPage;