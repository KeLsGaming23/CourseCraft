function LoginPage(){
    return(
        <>
		<div className="text-center">
            <h2>Login Form</h2>
	        <form action="/login" method="POST">
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