import React from "react";
import Panel from "./Panel";
import Image from "./Image";
import CustomSlider from "./CustomSlider";
import MobileSlider from "./MobileSlider";
import MouseSlider from "./MouseSlider";
import Card from "./Card";
import EarBuds from "./EarBuds";
import TwoSlider from "./TwoSlider";
import Cardl from "./Cardl";
import Laptop from "./Laptop";
const Home = () => {
  return (
    <>
      <Panel />
      <Image />
      <CustomSlider />
      <Card/>
      <conatainer className="bg-white max-w-full ">
      <Laptop/>
        <MouseSlider/>
        <EarBuds/>
      
      </conatainer>
      <TwoSlider/>
      <Cardl/>
        <MobileSlider />
      
    </>
  );
};

export default Home;
