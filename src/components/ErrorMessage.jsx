import React from "react";
import { motion } from "framer-motion";

const ErrorMessage = ({ errorMessage }) => {
  return (
    <motion.div
      className="absolute p-10 text-center text-red-500 -translate-x-1/2 shadow-2xl left-1/2 bg-lightBlue top-10 rounded-xl"
      initial={{ y: -200, translateX: "-50%" }}
      animate={{ y: 0, translateX: "-50%" }}
      exit={{ y: -200 }}
    >
      {errorMessage}
    </motion.div>
  );
};

export default ErrorMessage;
