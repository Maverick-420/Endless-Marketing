import "./servicesmob.scss";
import { motion } from "framer-motion";

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

const Servicesmob = () => {
  return (
    <motion.div
      className="servicesformob"
      variants={variants}
      initial="initial"
      animate={"animate"}
    >
      <motion.div className="titleContainer">
        <h1>
          <motion.b whileHover={{ color: "orange" }}>About Us</motion.b>
        </h1>
      </motion.div>
      <motion.div
        className="box"
        whileHover={{ background: "lightgray", color: "black" }}
      >
        <p>
          Tired of campaigns that fizzle like wet fireworks? We get it.
          Marketing's a crowded space, filled with empty promises and
          cookie-cutter strategies. But at Endless Marketing, we're different.
          We're not just marketers, we're growth alchemists. We blend data,
          creativity, and a dash of pixie dust to transform your brand into a
          sales-generating juggernaut. No fluffy tactics, just laser-focused
          campaigns that ignite brand love and skyrocket your bottom line.
        </p>
        <br></br>
        <h2>Meet the masterminds behind our Success:</h2>
      </motion.div>
      <motion.div
        className="box"
        whileHover={{ background: "lightgray", color: "black" }}
      >
        <h2>Akash</h2>
        <p>
          Our data King, unearths insights hidden in mountains of numbers,
          crafting strategies that hit your target audience right in the
          bullseye.
        </p>
      </motion.div>
      <motion.div
        className="box"
        whileHover={{ background: "lightgray", color: "black" }}
      >
        <h2>Aman</h2>
        <p>
          Craft search engine magic, conjuring up targeted keywords, weaving
          SEO-rich content, and building bridges of backlinks.Don't settle for
          digital invisibility, unlock your ranking potential with my SEO
          alchemy.
        </p>
      </motion.div>
      <motion.div
        className="box"
        whileHover={{ background: "lightgray", color: "black" }}
      >
        <p>
          We're a team of passionate rebels who break the marketing mold,
          embrace the weird, and celebrate the unexpected. We don't just work
          for you, we work with you, becoming an extension of your team, your
          cheerleader. and your confidante.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Servicesmob;
