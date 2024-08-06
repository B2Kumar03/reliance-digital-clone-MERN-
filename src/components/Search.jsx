import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const Search = () => {
  const { id } = useParams();
  const category = id;
  const [products, setProducts] = useState([]);
  const [loading,setLoading]=useState(false)
  const navigate=useNavigate()
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading((prev)=>!prev)
      try {
        const response = await axios.get(`https://reliance-digital-backend-1.onrender.com/api/v1/users/products?category=${category}`);
        setLoading((prev)=>!prev)
        setProducts(response.data);
      } catch (error) {
        setLoading((prev)=>!prev)
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [category]);
  if(loading){
    return <div className="text-center mt-10">Loading...</div>
  }

  return (
    <div className="container mx-auto p-4 mt-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map(product => (
          <div key={product.id} className="bg-white border rounded-lg shadow-md p-4 flex flex-col">
            <img src={product.img} alt={product.name} className="h-48 w-full object-cover mb-4 rounded" />
            <div className="flex-grow">
              <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
              <p className="text-blue-600 text-lg font-bold mb-1">{product.price}</p>
              <p className="text-green-600">{product.category}</p>
            </div>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" onClick={()=>navigate(`/product-details/${product._id}`)} >View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;