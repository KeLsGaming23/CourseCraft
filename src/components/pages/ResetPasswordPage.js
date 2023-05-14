import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ResetPasswordPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    token: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("http://127.0.0.1:8000/api/reset/password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Password reset successful. Please login with your new password.");
      navigate("/loginPage");
    } else {
      alert("Password reset failed. Please try again later.");
    }
  };

  return (
    <>
      <div>
        <div className="" style={{ height: "100vh" }}>
          <div
            className="mx-auto p-5 mt-5"
            style={{ width: "30%", border: "2px solid gray" }}
          >
            <h3 className="bg-secondary text-white p-2 text-center mb-3">
              Reset Password
            </h3>

            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <label htmlFor="token">Token</label>
                <input
                  type="text"
                  name="token"
                  className="form-control"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="password">New Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="password_confirmation">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="password_confirmation"
                  className="form-control"
                  required
                  onChange={handleChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary mb-3"
                style={{ width: "100%" }}
              >
                Reset Password
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResetPasswordPage;