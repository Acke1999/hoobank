import React from "react";
import styles from "../style";
import { robot, discount } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => (
  <section id="home" className={`flex flex-col md:flex-row ${styles.paddingY}`}>
    <div
      className={`flex-1 ${styles.flexStart} flex-col px-6 xl:px-0 sm:px-16`}
    >
      <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
        <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
        <p className={`${styles.paragraph} ml-2`}>
          <span className="text-white">20%</span> Discount For{" "}
          <span className="text-white">1 Month</span> Account
        </p>
      </div>
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-semibold font-poppins ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
          The Next
          <br className="sm:block hidden" />{" "}
          <span className="text-gradient">Generation</span>
        </h1>
        <div className="ss:flex hidden md:mr-4 mr-0">
          <GetStarted />
        </div>
      </div>

      <h1 className="font-semibold font-poppins ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">
        Payment Method
      </h1>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Our team of experts uses a methodology to identify the credit cards most
        likely to fit your needs. We examine annual precentage rates, annual
        fees.
      </p>
    </div>

    <div className={`flex-1 flex relative my-10 md:my-0 ${styles.flexCenter}`}>
      <img
        src={robot}
        alt="hand"
        className="w-[100%] h-[100%] relative z-[5]"
      />
      <div className="absolute top-0 z-[0] w-[40%] h-[35%] pink-gradient" />
      <div className="absolute bottom-40 z-[1] w-[40%] h-[40%]  white-gradient rounded-full" />
      <div className="absolute right-20 bottom-20 z-[0] w-[60%] h-[60%] blue-gradient" />
    </div>

    <div className={`${styles.flexCenter} ss:hidden`}>
      <GetStarted />
    </div>
  </section>
);

export default Hero;
