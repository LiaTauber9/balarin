import { useEffect, useRef, useState } from "react";
import { motion, MotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { images } from '@/assets/images';
import Lenis from '@studio-freight/lenis';
import useDimention from '@/utils/useDimention';
import Image from "next/image";

export default function ParallaxSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const {height} = useDimention();
  const { width } = useDimention();
  console.log("ParallaxSection -> height", height);

  // Track scroll progress within the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"], // Start the scroll when container is in view
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]); 
  const y1 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]); 
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]); 
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 3.1]); 

  // Use `useSpring` to add an easing effect
const springY = useSpring(y, { stiffness: 100, damping: 20 });
const springY1 = useSpring(y1, { stiffness: 80, damping: 25 });
const springY2 = useSpring(y2, { stiffness: 90, damping: 15 });
const springY3 = useSpring(y3, { stiffness: 70, damping: 20 });

  const columnsHtml = [
    <Column key="column-0" images={[images[0], images[1], images[2], images[0]]} y={springY} top="-45%" />,
    <Column key="column-1" images={[images[3], images[8], images[4], images[3]]} y={springY1} top="-95%" />,
    <Column key="column-2" images={[images[5], images[6], images[7], images[5]]} y={springY2} top="-45%" />,
    <Column key="column-3" images={[images[11], images[9], images[10], images[11]]} y={springY3} top="-85%" />
];

  useEffect(() => {    
    const lenis = new Lenis();

    let animationFrameId: number;

    function raf(time: number) {
      lenis.raf(time)
      animationFrameId = requestAnimationFrame(raf);
    }


    // requestAnimationFrame(raf)
    // return () => cancelAnimationFrame(animationFrameId); 
    const resize = () => {

      setDimensions({width: window.innerWidth, height: window.innerHeight})

    }



    window.addEventListener("resize", resize)

    requestAnimationFrame(raf);

    resize();



    return () => {

      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId); 

    }

    
     
  }, []);

  

    return (
      <div className="flex flex-row h-[175vh] w-full gap-[2vw] p-[2vw] box-border overflow-hidden" ref={containerRef}>
        {
        width > 768 ?  
        columnsHtml.map((column) => (
          <div key={column.key} className="w-[25%] h-full relative flex">
            {column}
          </div>
        ))
        : width >= 480 ?
        [columnsHtml[0], columnsHtml[1], columnsHtml[2]].map((column) => (
          <div key={column.key} className="w-[33%] h-full relative flex">
            {column}
          </div>
        ))
        : [columnsHtml[0], columnsHtml[1]].map((column) => (
          <div key={column.key} className="w-[50%] h-full relative flex">
            {column}
          </div>
        ))
        }
      </div>
    );
}

const Column = ({ y, top = "0", images: image }: { y: MotionValue; top?: string; images: string[] }) => {
  return (
    <motion.div
      className="h-full w-full flex flex-col gap-[2vw] absolute"
      style={{ y, top }}
    >
      {image.map((image, index) => (
        <div key={index} className="w-full h-full relative rounded-[1vw] overflow-hidden">
          <Image
            src={image}
            fill
            className="object-cover object-center"
            alt={""} />
        </div>
      ))}
    </motion.div>
  );
}


