import { ImQuotesLeft } from "react-icons/im";
import SectionHead from "./SectionHead";
import Card from "../UI/Card";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { useState } from "react";
import { testimonials } from "../data";
import "../containers/home/home.css";

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const { name, quote, job, avatar } = testimonials[index];
  return (
    <section className="testimonials">
      <div className="container testimonials__container">
        <SectionHead
          icon={<ImQuotesLeft />}
          title="Testimonials"
          className="testimonials__head"
        />
        <Card className="testimonial">
          <div className="testimonial__avatar">
            <img src={avatar} alt="testimonial" />
          </div>
          <p className="testimonial__quote">{`${quote}`}</p>
          <h5>{name}</h5>
          <small className="testimonial__title">{job}</small>
        </Card>
        <div className="testimonials_btn-container">
          <button
            className="testimonials__btn"
            onClick={() => setIndex((cur) => (cur === 0 ? cur : cur - 1))}
          >
            <IoIosArrowDropleftCircle />
          </button>
          <button
            className="testimonials__btn"
            onClick={() =>
              setIndex((cur) =>
                cur === testimonials.length - 1 ? cur : cur + 1
              )
            }
          >
            <IoIosArrowDroprightCircle />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
