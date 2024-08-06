import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import {
  FaShippingFast,
  FaStoreAlt,
  FaTruck,
  FaMoneyBillWave,
} from "react-icons/fa";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify"; // Import toast for notifications
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS
import { useDispatch, useSelector } from "react-redux";
import { updateCart } from "../Redux/SignInData/actionCreator";

Modal.setAppElement("#root");

const ProductDetails = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const state2 = useSelector((state) => state.signIn);
  const [zoomStyle, setZoomStyle] = useState({
    backgroundPosition: "center",
    backgroundSize: "cover",
  });
  const [data1, setData] = useState({});
  const [loading, setLoading] = useState(false); // State for handling loading
  const { id } = useParams();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.auth);
  console.log(state2);
  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get(
          `https://reliance-digital-backend-1.onrender.com/api/v1/users/product-with-id?id=${id}`
        );
        setData(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [id]);

  const addToCart = async () => {
    if (!state.auth) {
      toast.error("Please sign in to add product to cart");
      return;
    }
    setLoading(true); // Set loading to true when the button is clicked

    try {
      const { data } = await axios.post(
        "https://reliance-digital-backend-1.onrender.com/api/v1/users/add-cart",
        { ...data1, email: state2.data.user.email }
      );

      if (data.success) {
        const token = JSON.parse(localStorage.getItem("authToken"));

        const { data } = await axios.get(
          "https://reliance-digital-backend-1.onrender.com/api/v1/users/get-cart",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        dispatch(updateCart(data.cart));
        toast.success("Added to cart successfully");
      } else if (data.message === "This product alredy is cart") {
        toast.error("This product is already in the cart");
      } else {
        toast.error("Failed to add product to cart");
      }
    } catch (error) {
      toast.error("Failed to add product to cart");
    } finally {
      setLoading(false); // Set loading to false after operation is complete
    }
  };

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setZoomStyle({
      backgroundPosition: `${x}% ${y}%`,
      backgroundSize: "200%",
    });
  };

  return (
    <div className="p-6 w-full h-full bg-white rounded-xl shadow-md mt-20 space-y-4">
      <div className="flex flex-col md:flex-row">
        <img
          className="h-48 w-full md:w-48 object-cover rounded cursor-pointer"
          src={data1.img}
          alt={data1.name}
          onClick={() => setModalIsOpen(true)}
          onMouseMove={handleMouseMove}
          style={zoomStyle}
        />
        <div className="ml-0 md:ml-6 flex flex-col justify-between w-full mt-4 md:mt-0">
          <div>
            <h2 className="text-xl font-semibold">{data1.name}</h2>
            <p className="text-gray-500">{data1.category}</p>
            <p className="text-gray-900 font-bold text-2xl mt-2">
              ₹{data1.price}
            </p>
            <p
              className={`mt-1 ${
                data1.available ? "text-green-500" : "text-red-500"
              }`}
            >
              {data1.available ? "In Stock" : "Out of Stock"}
            </p>
            <div className="flex items-center mt-2">
              <svg
                className="w-5 h-5 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.528 4.697a1 1 0 00.95.69h4.911c.969 0 1.371 1.24.588 1.81l-3.974 2.888a1 1 0 00-.364 1.118l1.528 4.697c.3.921-.755 1.688-1.54 1.118l-3.975-2.888a1 1 0 00-1.175 0l-3.975 2.888c-.785.57-1.84-.197-1.54-1.118l1.528-4.697a1 1 0 00-.364-1.118L2.98 10.124c-.783-.57-.381-1.81.588-1.81h4.911a1 1 0 00.95-.69l1.528-4.697z" />
              </svg>
              <p className="ml-2 text-gray-700">{data1.rating}</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-4 mt-4">
            <button className="flex-1 px-4 py-2 bg-red-500 text-white font-semibold rounded hover:bg-red-600">
              Buy Now
            </button>
            <button
              className={`flex-1 px-4 py-2 ${
                loading ? "bg-gray-400" : "bg-gray-300"
              } text-gray-700 font-semibold rounded hover:bg-gray-400 mt-2 md:mt-0`}
              onClick={addToCart}
              disabled={loading} // Disable button when loading
            >
              {loading ? "Adding..." : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <h3 className="text-lg font-semibold">Key Features</h3>
        <ul className="list-disc pl-5 mt-2">
          <li>Processor: Apple M2 Chip</li>
          <li>RAM: 8GB</li>
          <li>Internal storage: 256GB SSD</li>
          <li>Display: 13.6-inch Liquid Retina</li>
        </ul>
      </div>
      <div className="mt-6">
        <h3 className="text-lg font-semibold">Warranty</h3>
        <p>1 Year manufacturer warranty</p>
      </div>
      <div className="mt-6 flex flex-col md:flex-row md:space-x-4">
        <div className="flex items-center space-x-2">
          <FaShippingFast className="text-blue-500" />
          <p>FREE Shipping!</p>
        </div>
        <div className="flex items-center space-x-2 mt-2 md:mt-0">
          <FaStoreAlt className="text-blue-500" />
          <p>Pick at Store: Available</p>
        </div>
        <div className="flex items-center space-x-2 mt-2 md:mt-0">
          <FaTruck className="text-blue-500" />
          <p>Standard Delivery: 09 Aug (Fri) - 10 Aug (Sat)</p>
        </div>
        <div className="flex items-center space-x-2 mt-2 md:mt-0">
          <FaMoneyBillWave className="text-blue-500" />
          <p>No Cost EMI</p>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: { backgroundColor: "rgba(0, 0, 0, 0.75)" },
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            padding: 0,
            border: "none",
            background: "none",
          },
        }}
      >
        <img
          src={data1.img}
          alt={data1.name}
          className="w-full h-full object-contain"
        />
      </Modal>
      <ToastContainer />
    </div>
  );
};

export default ProductDetails;
