import { motion, AnimatePresence } from "framer-motion";

const ModalImg = ({ isOpen, onClose, imageURL }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modalImg-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="modalImg-content"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
          >
            <img src={imageURL} alt="Modal Image" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalImg;
