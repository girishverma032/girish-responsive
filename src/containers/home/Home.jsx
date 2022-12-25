import "./home.css";
import MainHeader from "../../components/mainHeader/MainHeader";
import Programs from "../../components/Programs";
import Values from "../../components/Values";
import FAQs from "../../components/FAQs";
import Testimonial from "../../components/Testimonials";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <>
      <MainHeader />
      <Programs />
      <Values />
      <FAQs />
      <Testimonial />
      <Footer />
    </>
  );
};

export default Home;
