import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Search Engine Optimisation",
    img: "./seo.jpg",
    desc: "We aim to improve your website's visibility and ranking in search engine results pages (SERPs), primarily for Google.",
    but: "Learn More",
    link: "https://www.youtube.com/watch?v=7WwtzsSHdpI",
  },

  {
    id: 2,
    title: "Social Media Marketing",
    img: "./socialmm.jpg",
    desc: "Increased brand awareness, improved brand image, boosted engagement, driving website traffic, and ultimately, sales conversions.",
    but: "Learn More",
    link: "https://www.youtube.com/watch?v=7WwtzsSHdpI",
  },
  {
    id: 3,
    title: "Online Reputation Management",
    img: "./orm.jpg",
    desc: "We help in monitoring and influencing how you're perceived online, aiming to cultivate a positive image and mitigate negative feedback",
    but: "Learn More",
    link: "https://www.youtube.com/watch?v=7WwtzsSHdpI",
  },

  {
    id: 4,
    title: "Website Development",
    img: "./website.jpg",
    desc: "We assist you in Crafting Stunning Websites That Launch Brands.We have highly skilled developers who  create Digital Masterpiece    .        Let's Build It",
    but: "Contact Agent",
    link: "https://www.linkedin.com/in/aniketbhagat420",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={`${item.link}`}>
              <button>{item.but}</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Services</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
