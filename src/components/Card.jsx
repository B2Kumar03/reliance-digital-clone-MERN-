import React from "react";
import "tailwindcss/tailwind.css";

const Card = () => {
  return (
    <div className="max-w-full bg-slate-50">
        <p className="p-3">Digital Midnight Sale</p>
    <div className="grid grid-cols-1 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-4">
        
     
        <div className="max-w-sm rounded overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">
          <div className="relative overflow-hidden">
            <img
              src="https://www.reliancedigital.in/medias/iphone15-Midnight-Sale-Banner-340x255px.jpg?context=bWFzdGVyfGltYWdlc3wyOTQ1NXxpbWFnZS9qcGVnfGltYWdlcy9oMjcvaDFjLzEwMTcyNTEzMDkxNjE0LmpwZ3xiODE1YTc1OGMxMTdlMjc2OTE5MTU1MDBlNTg3NjA4ODA1MGEyZTAxY2NmMjA2OTE1MzJmYjgwMTlmYWNlZGZm"
              alt="Image of a product"
              className="w-full object-cover transform transition-transform duration-300 hover:scale-110"
            />
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">
          <div className="relative overflow-hidden">
            <img
              src="https://www.reliancedigital.in/medias/End-of-Season-Clearance-Sale-MNS-B.jpg?context=bWFzdGVyfGltYWdlc3w1MTYwNXxpbWFnZS9qcGVnfGltYWdlcy9oNDMvaDAyLzEwMTcwNDc1MDUzMDg2LmpwZ3wzMTk0M2QyNmI1NjhkMjczNmExYWMyYzcwMzU1YWZlMjY3N2FlNDgxM2NlNDJlZjYyYzE0MTYwZmNmNjQxNmRk"
              alt="Image of a product"
              className="w-full object-cover transform transition-transform duration-300 hover:scale-110"
            />
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">
          <div className="relative overflow-hidden">
            <img
              src="https://www.reliancedigital.in/medias/Upgrade-your-Audio-Experience-MNS-B.jpg?context=bWFzdGVyfGltYWdlc3w0OTY1MXxpbWFnZS9qcGVnfGltYWdlcy9oYTEvaDQyLzEwMTcwNDc1MTE4NjIyLmpwZ3w2OTNmN2Q0ZjQwMWI5M2U1MGUwNjA3MjQ0YmQ2NGNhMmY3MzY4N2YyM2ZhZWYxMmE2M2Q5MTEzOTlmYTI4OTg2"
              alt="Image of a product"
              className="w-full object-cover transform transition-transform duration-300 hover:scale-110"
            />
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">
          <div className="relative overflow-hidden">
            <img
              src="https://www.reliancedigital.in/medias/Limited-Time-Deals-on-Small-Appliances-MNS-B.jpg?context=bWFzdGVyfGltYWdlc3w1MzcyMnxpbWFnZS9qcGVnfGltYWdlcy9oODgvaDg1LzEwMTcwNDc0NDk2MDMwLmpwZ3wwNzEyZmI3NWRiM2Q0YjAxOTYwN2E5NGJiMzZiNjhkYmRjNDNiYTg5NjY0ODUzNjliNDY2YmEyYTBiNTUwYTRl"
              alt="Image of a product"
              className="w-full object-cover transform transition-transform duration-300 hover:scale-110"
            />
          </div>
        </div>
     
    </div>
    </div>
  );
};

export default Card;
