import "./navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";
const textVariants = {
  initial: {
    x: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Endless Marketing
        </motion.span>
        <motion.div
          className="social"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.a
            href="https://www.linkedin.com/company/endlessmarketing/"
            target="_blank"
          >
            <img src="/linkedin.png" alt="" />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/endlessmarketingin"
            target="_blank"
          >
            <img src="/instagram.png" alt="" />
          </motion.a>
          <motion.a
            href="https://api.whatsapp.com/send/?phone=%2B918899451519&text&type=phone_number&app_absent=0"
            target="_blank"
          >
            <img src="/whatsapp.png" alt="" />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
