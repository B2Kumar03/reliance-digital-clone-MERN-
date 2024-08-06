import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { addData } from "../Redux/SignInData/actionCreator";
import { updataAuth } from "../Redux/auth/actionCreator";


const Login = () => {
  const [email, setEmail] = useState("");
  const [showOTP, setShowOTP] = useState(false);
  const [backendOtp,setBavkendotp]=useState("")
  const [otp, setOtp] = useState("");
  const [emailError, setEmailError] = useState("");
  const [otpError, setOtpError] = useState("");
  const [user,setUser]=useState({})
  const navigate = useNavigate();

  const dispatch=useDispatch()
  const state=useSelector((state)=>state)
  console.log(state);
  const handleMobileNumberChange = (e) => {
    setEmail(e.target.value);
    setEmailError(""); // Clear error on change
  };

  const handleOTPChange = (e) => {
    setOtp(e.target.value);
    setOtpError(""); // Clear error on change
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email) {
      setEmailError("Email is required");
      return;
    }

    try {
      
      const { data } = await axios.post("https://reliance-digital-backend-1.onrender.com/api/v1/users/login",{email});
      
      if (data.success) {
        setShowOTP(true);
        setUser(data)
        setBavkendotp(5728)
        toast.success("OTP sent to your email.");
      } else {
        navigate("/register");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
  };

  const handleOTPSubmit = async (e) => {
    e.preventDefault();

    if (!otp) {
      setOtpError("OTP is required");
      return;
    }

    try {
      if (otp==backendOtp) {
        toast.success("Login successful!");
        localStorage.setItem('authToken', JSON.stringify(user.token)); // Save token to local storage
        const { data } = await axios.get("https://reliance-digital-backend-1.onrender.com/api/v1/users/get-user", {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        
        dispatch(addData(data))
        dispatch(updataAuth())
        navigate("/");
      } else {
        toast.error("Invalid OTP. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred during OTP verification.");
    }
  };

  return (
    <div className="flex items-center justify-center my-20 bg-gray-100">
      <div className="flex bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl w-full">
        <div
          className="w-1/2 bg-cover"
          style={{
            backgroundImage:
              "url('https://www.reliancedigital.in/akamai/images/web/LoginWebBanner.jpeg')",
          }}
        ></div>
        <div className="w-1/2 p-8">
          {!showOTP ? (
            <form onSubmit={handleSubmit}>
              <h2 className="text-2xl font-bold mb-4 text-center">Login / Register</h2>
              <input
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={handleMobileNumberChange}
                className={`w-full p-2 mb-4 border rounded ${emailError ? 'border-red-600' : ''}`}
              />
              {emailError && <p className="text-red-600 mb-4">{emailError}</p>}
              <button
                type="submit"
                className="w-full bg-red-600 text-white p-2 rounded"
              >
                PROCEED
              </button>
            </form>
          ) : (
            <form onSubmit={handleOTPSubmit}>
              <h2 className="text-2xl font-bold mb-4 text-center">Login / Register</h2>
              <p className="mb-2">OTP Verification</p>
              <p className="mb-4">
                Please enter the OTP sent to your mobile number {email}
              </p>
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={handleOTPChange}
                className={`w-full p-2 mb-4 border rounded ${otpError ? 'border-red-600' : ''}`}
              />
              {otpError && <p className="text-red-600 mb-4">{otpError}</p>}
              <button
                type="submit"
                className="w-full bg-red-600 text-white p-2 rounded mb-2"
              >
                LOGIN
              </button>
              <button
                type="button"
                className="w-full bg-gray-300 text-black p-2 rounded"
                onClick={() => setShowOTP(false)}
              >
                BACK
              </button>
            </form>
          )}
        </div>
      </div>
      <ToastContainer /> {/* Add ToastContainer to your component */}
    </div>
  );
};

export default Login;
