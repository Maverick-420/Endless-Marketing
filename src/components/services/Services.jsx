import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref);

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={isInView && "animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          We are Leading Online Reputation Management Service Provider in India.
        </p>
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Every</motion.b> Brand
            Deserves
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Infinite </motion.b>
            Horizon.
          </h1>
          <button>About Us</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Client Focus</h2>
          <p>
            We craft bespoke solutions for ambitious brands like yours, from
            trailblazing startups to established leaders seeking fresh horizons.
            Whether you're chasing brand awareness, customer engagement, or lead
            generation, we tailor our expertise to fuel your unique journey. We
            see your potential, and we're laser-focused on helping you unleash
            it to the world. Join us, and let's redefine what's possible for
            your brand, together.
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Our Mission</h2>
          <p>
            To ignite brands with limitless potential, crafting unforgettable
            narratives that transcend boundaries and propel them to unimaginable
            heights. We're catalysts of growth, shattering marketing norms and
            unleashing a tsunami of innovation to propel our clients into the
            infinite horizon of success.To redefine the landscape of marketing,
            leaving cookie-cutter campaigns in the dust.With every partnership,
            we rewrite the narrative, proving that in the realm of marketing,
            there is no such thing as impossible, only endless possibilities.
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Agency Culture</h2>
          <p>
            we're not just colleagues, we're a tribe of passionate explorers,
            united by a thirst for the uncharted.We work with collaboration,
            curiosity, a growth mindset, and a fun-loving attitude. We celebrate
            individuality, embrace risks as stepping stones, and believe that
            failure is simply the next stepping stone to success. With a healthy
            dose of caffeine and a dash of friendly competition, we push each
            other to reach higher, break boundaries, and rewrite the marketing
            rulebook.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
