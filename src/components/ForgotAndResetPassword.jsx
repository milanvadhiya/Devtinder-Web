import React, { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constant";
import { useNavigate } from "react-router-dom";


const ForgotAndResetPassword = () => {
  const [emailId, setEmailId] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [token, setToken] = useState(""); // store reset token from backend
  const [step, setStep] = useState(1); // 1 = enter email, 2 = enter new password
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate=useNavigate();

  // Step 1: Send forgot password
 const handleSendLink = async () => {
  try {
    const res = await axios.post(BASE_URL + "/forgotPassword", { emailId });
    setMessage(res.data.message || "Reset token generated!");
    setError("");
    setToken(res.data.token); // use token directly
    setStep(2); // go to reset password input
  } catch (err) {
    setError(err?.response?.data || "Something went wrong!");
    setMessage("");
  }
};


  // Step 2: Reset password
  const handleResetPassword = async () => {
    try {
      const res = await axios.post(BASE_URL + `/resetPassword/${token}`, { newPassword });
      setMessage(res.data || "Password reset successful!");
      setError("");
      setStep(1); // back to email input if you want
      setEmailId("");
      setNewPassword("");
       setTimeout(() => {
        navigate("../login");
      }, 1000);
    } catch (err) {
      setError(err?.response?.data || "Invalid or expired token!");
      setMessage("");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-base-100">
      <div className="card w-96 bg-base-300 shadow-lg">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold text-primary mb-4">
            {step === 1 ? "Forgot Password" : "Reset Password"}
          </h2>

          {step === 1 ? (
            <>
              <input
                type="email"
                value={emailId}
                onChange={(e) => setEmailId(e.target.value)}
                placeholder="Enter your email"
                className="input input-bordered w-full mb-2"
              />
              <button className="btn btn-primary w-full mt-2" onClick={handleSendLink}>
                Send Reset Link
              </button>
            </>
          ) : (
            <>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Enter new password"
                className="input input-bordered w-full mb-2"
              />
              <button className="btn btn-primary w-full mt-2" onClick={handleResetPassword}>
                Reset Password
              </button>
            </>
          )}

          {message && <p className="text-green-500 mt-2">{message}</p>}
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default ForgotAndResetPassword;
