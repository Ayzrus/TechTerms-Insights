"use client";
import { FC, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

interface TermDefinitionProps {
  term: string;
  definition: string;
  id: string;
  image: string;
}

const TermDefinition: FC<TermDefinitionProps> = ({
  term,
  definition,
  id,
  image,
}) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.4,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      id={id}
      className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden dark:bg-gray-800 dark:border-gray-700 dark:text-white"
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1 },
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      whileHover={{
        scale: 1.03,
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
      }}
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <Image
          width={1920}
          height={1080}
          src={image}
          alt={term}
          className="rounded-t-lg w-full object-cover h-48"
        />
      </motion.div>
      <motion.div
        className="p-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
      >
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
          {term}
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400 text-lg">
          {definition}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default TermDefinition;
