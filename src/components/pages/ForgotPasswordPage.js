import React, { useState } from 'react';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:8000/api/forget/password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setSuccess(true);
      } else {
        const data = await response.json();
        setError(data.error);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <div className="" style={{ height: '100vh' }}>
        <div className="mx-auto p-5 mt-5" style={{ width: '30%', border: '2px solid gray' }}>
          <h3 className="bg-secondary text-white p-2 text-center mb-3">Forgot Password</h3>

          {success ? (
            <div className="alert alert-success" role="alert">
              Password reset email has been sent to {email}. Please check your email.
            </div>
          ) : (
            <>
              <form onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-primary mb-3" style={{ width: '100%' }}>
                  Reset Password
                </button>
              </form>
              {error && <p className="text-danger">{error}</p>}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;