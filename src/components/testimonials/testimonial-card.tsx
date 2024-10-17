import Image, { StaticImageData } from "next/image";
import Rating from "../ui/rating";

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
    <>
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-10">
          <Rating value={+testimonial.stars} />
          <p className="font-subHeading text-2xl leading-[32px]">
            {testimonial.title}
          </p>
        </div>

        <Image src={testimonial.avatar} width={100} height={100} alt="avatar" />
      </div>
      <p className="text-[#3333337F] mt-5">{testimonial.description}</p>
      <p className="self-end">{testimonial.name}</p>
    </>
  );
}
