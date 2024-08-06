import Slider from "react-slick";
import "./App.css";
import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";
import AllRoute from "./allroute/AllRoute";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addData, updateCart } from "./Redux/SignInData/actionCreator";
import { updataAuth } from "./Redux/auth/actionCreator";

function App() {
  const dispatch = useDispatch();
  const state2 = useSelector((state) => state.signIn);
  

  const fetchCart=async()=>{
    const token = JSON.parse(localStorage.getItem("authToken"));
    try {
      const {data}=await axios.get("https://reliance-digital-backend-1.onrender.com/api/v1/users/get-cart",{headers: {
        Authorization: `Bearer ${token}`,
      }})

      dispatch(updateCart(data.cart))
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    async function fetchUserData() {
      const token = JSON.parse(localStorage.getItem("authToken"));
      try {
        if (token) {
          const { data } = await axios.get(
            "https://reliance-digital-backend-1.onrender.com/api/v1/users/get-user",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          dispatch(updataAuth());
          dispatch(addData(data));
        } else {
          console.log("No token found");
        }
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    }

    fetchUserData();
    fetchCart()
  }, [dispatch]);

  return (
    <div className="App">
      <div className="fixed">
        <Navbar />
      </div>
      <AllRoute />
      <Footer />
    </div>
  );
}

export default App;
