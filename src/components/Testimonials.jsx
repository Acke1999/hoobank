import React from "react";
import styles from "../style";
import { feedback } from "../constants";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
  <section
    id="clients"
    className={`${styles.flexCenter} ${styles.paddingY} flex-col relative`}
  >
    <div className="absolute z-[0] w-[80%] h-[80%] -right-[70%] rounded-full blue-gradient" />{" "}
    <div className="w-full flex items-center justify-between flex-col md:flex-row mb-6 sm:mb-16 relative z-[1]">
      <h2 className={styles.heading2}>
        What people are <br className="sm:block hidden" /> saying about us
      </h2>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} max-w-[450px] text-left`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
    </div>
    <div className="w-full relative flex flex-wrap md:justify-between sm:justify-start z-[1] feedback-container ">
      {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </div>
  </section>
);

export default Testimonials;
