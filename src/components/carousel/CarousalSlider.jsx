import { useState } from "react";
import "./carousel.scss";

const CarousalSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./facebook.png",
      title: "Electronics and Gadgets",
      desc: "We helped them to gather countless Organic Reviews through Social media Marketing",
      img: "/noise.png",
    },
    {
      id: "2",
      icon: "./facebook.png",
      title: "Health and Fitness",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "/mb.jpg",
    },
    {
      id: "3",
      icon: "./facebook.png",
      title: "Shopping",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "/lavie.jpg",
    },
    {
      id: "4",
      icon: "./facebook.png",
      title: "Makeup and Skincare",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "/sugarpop.jpg",
    },
    {
      id: "5",
      icon: "./physicswallah.jpeg",
      title: "Education",
      desc: "We helped them to gather countless Organic Reviews through Social media Marketing",
      img: "/physicswallah.png",
    },
  ];
  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 4)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="main">
      <h1>Our clients</h1>
      <h2>
        <span>300+ Brands</span>
        <span>4+years of Experience</span>
        <span>Trusted by Customers</span>
      </h2>
      <div className="works">
        <div
          className="slider"
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
        >
          {data.map((d) => (
            <div className="container">
              <div className="item">
                <div className="left">
                  <div className="leftContainer">
                    <h1>Category</h1>
                    <h2>{d.title}</h2>
                  </div>
                </div>
                <div className="right">
                  <img src={d.img} alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>
        <img
          src="arrow.png"
          className="arrow left"
          alt=""
          onClick={() => handleClick("left")}
        />
        <img
          src="./arrow.png"
          className="arrow right"
          alt=""
          onClick={() => handleClick()}
        />
      </div>
    </div>
  );
};

export default CarousalSlider;
