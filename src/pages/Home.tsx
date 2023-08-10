import { motion } from "framer-motion";

const MyComponent = () => {
  return (
    <motion.div
      whileHover={{
        opacity: 0,
      }}
    >
      Hello, welcome!
    </motion.div>
  );
};

export default MyComponent;