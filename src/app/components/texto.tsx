"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function Texto() {
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

  const containerVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95, rotateX: 10 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        delay: 0.3,
        duration: 1,
        type: "spring",
        stiffness: 70,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.7,
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="mt-10 px-8 py-10 max-w-4xl mx-auto rounded-2xl bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 shadow-2xl text-lg text-white transform transition-transform hover:scale-110 hover:shadow-xl"
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      <motion.div
        className="text-justify text-xl font-medium tracking-wide leading-relaxed"
        variants={textVariants}
      >
        A melhoria contínua pode ser a solução para o futuro da indústria ao
        promover a evolução constante dos processos produtivos, aumentando a
        eficiência e a qualidade dos produtos. A adoção de princípios como
        Kaizen, Lean e Six Sigma permite que as empresas identifiquem e eliminem
        desperdícios, otimizem recursos e melhorem continuamente o desempenho.
        Além disso, ao fomentar uma cultura de inovação e adaptação, a melhoria
        contínua assegura que as indústrias permaneçam competitivas em um
        mercado em constante mudança. Essa abordagem também incentiva a
        colaboração entre equipes, o que contribui para soluções mais criativas
        e eficazes, garantindo assim um crescimento sustentável e maior
        satisfação dos clientes.
      </motion.div>
    </motion.div>
  );
}
