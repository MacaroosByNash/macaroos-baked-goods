import Image, { StaticImageData } from "next/image";
import Rating from "../ui/rating";
import { motion } from "framer-motion";

interface ITestimonialCardProps {
  testimonial: {
    name: string;
    stars: string;
    title: string;
    description: string;
    avatar: StaticImageData;
  };
}

export default function TestimonialCard({
  testimonial,
}: ITestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between"
      >
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-1 flex-col gap-10"
        >
          <Rating value={+testimonial.stars} />
          <p className="font-subHeading text-2xl leading-[32px]">
            {testimonial.title}
          </p>
        </motion.div>

        <Image
          src={testimonial.avatar}
          width={100}
          height={100}
          alt="avatar"
          className="w-[100px] h-[100px] rounded-full"
        />
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-[#3333337F] mt-5"
      >
        {testimonial.description}
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="self-end"
      >
        {testimonial.name}
      </motion.p>
    </motion.div>
  );
}
