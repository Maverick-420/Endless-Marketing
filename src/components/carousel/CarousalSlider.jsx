import { useState, useEffect } from "react";
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
      desc: "We ran a successful brand awareness campaign that reached over 1 million users.",
      img: "/mb.jpg",
    },
    {
      id: "3",
      icon: "./facebook.png",
      title: "Shopping",
      desc: "Boosted sales through influencer marketing and customer engagement.",
      img: "/lavie.jpg",
    },
    {
      id: "4",
      icon: "./facebook.png",
      title: "Makeup and Skincare",
      desc: "Helped them grow organically through aesthetic social campaigns",
      img: "/sugarpop.jpg",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : data.length - 1)
      : setCurrentSlide((currentSlide + 1) % data.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % data.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [data.length]);

  return (
    <div className="main">
      <h1>Our clients</h1>
      <h2>
        <span>300+ Brands</span>
        <span>2+ years of Experience</span>
        <span>Trusted by Customers</span>
      </h2>
      <div className="works">
        <div
          className="slider"
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
        >
          {data.map((d, index) => (
            <div className="container" key={index}>
              <div className="item">
                <div className="left">
                  <div className="leftContainer">
                    <h1>Category</h1>
                    <h2>{d.title}</h2>
                    <p>{d.desc}</p>
                  </div>
                </div>
                <div className="right">
                  <img src={d.img} alt={d.title} />
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
