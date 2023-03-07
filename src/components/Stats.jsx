import React from "react";
import styles from "../style";
import { stats } from "../constants";

const Stats = () => (
  <section
    className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6 bg-discount-gradient rounded-[10px]`}
  >
    {stats.map((stat) => (
      <div
        key={stat.id}
        className={`flex flex-1 flex-row flex-wrap justify-evenly items-center`}
      >
        <div className="flex items-center">
          <h4 className="font-poppins font-normal xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white">
            {stat.value}
          </h4>
          <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[25px] leading-[20px] text-gradient uppercase ml-3">
            {stat.title}
          </p>
        </div>
      </div>
    ))}
  </section>
);

export default Stats;
