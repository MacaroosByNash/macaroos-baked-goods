import { Star } from "../icons";
import * as motion from "framer-motion/client";

interface RatingProps {
  value: number;
}

export default function Rating({ value }: RatingProps) {
  return (
    <motion.ul
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="main_rating-stars flex items-center accent"
    >
      {Array.from({ length: 5 }, (_, index) => (
        <motion.li
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 * index }}
          className="main_rating-stars_star text-xl"
          key={index}
        >
          <Star
            fill={index < value ? "#FFC107" : "#E0E0E0"}
            stroke={index < value ? "#FFC107" : "#E0E0E0"}
          />
        </motion.li>
      ))}
    </motion.ul>
  );
}
