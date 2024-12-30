import React from "react";
import reviews from "./data";
import Testimonial from "./components/Testimonial";

const App = () => {
  return (
    <div className="w-[100vw] h-[100vh] flex flex-col justify-center items-center bg-gray-300  ">
      <div className="w-[25%] flex flex-col gap-7">
      <div className="flex flex-col items-center">
      <h1 className="font-bold text-3xl">Our Testimonials</h1>
      <div className="h-[2px] w-[20%] bg-gray-600 "></div>
      </div>
      <Testimonial reviews={reviews}></Testimonial>
      </div>
    </div>
  );
};

export default App;
