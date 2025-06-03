'use client';
import { useEffect } from 'react';
import { useRef } from 'react';

import styles from './page.module.scss'
import Lenis from '@studio-freight/lenis'
import { useTransform, useScroll, motion, MotionValue } from 'framer-motion';
import { Hero } from '@/sections/Hero';
// import ParallaxSection from '@/sections/ParallaxSection';
import { images } from '@/assets/images';
import Image from 'next/image';
import useDimention from '@/utils/useDimention';


export default function Home() {

  const containerRef = useRef<HTMLDivElement>(null);
  const { width } = useDimention();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 1600]);
const y2 = useTransform(scrollYProgress, [0, 1], [0, 2640]);
const y3 = useTransform(scrollYProgress, [0, 1], [0, 1000]);
const y4 = useTransform(scrollYProgress, [0, 1], [0, 2400]);


  useEffect(() => {
    const lenis = new Lenis();
    const raf = (time: number) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf);
  }, []);


  return (
    <main className={styles.main}>
      {Hero(width <= 768)}
      <div className="relative flex h-[175vh] gap-[2vw] overflow-hidden box-border" ref={containerRef}>
      {width <= 768 ? (
          <>
            <Column images={images.slice(0, 6)} y={y2} className="-top-[95%]" />
            <Column images={images.slice(6, 12)} y={y3} className="-top-[45%]" />
          </>
        ) : (
          <>
            <Column images={images.slice(0, 3)} y={y} className="-top-[45%]" />
            <Column images={images.slice(3, 6)} y={y2} className="-top-[95%]" />
            <Column images={images.slice(6, 9)} y={y3} className="-top-[45%]" />
            <Column images={images.slice(9, 12)} y={y4} className="-top-[75%]" />
          </>
        )}
      </div>
      <div className="h-screen"></div>

    </main>
  )
}

const Column = ({ images, y= 0, className=''}: { images: string[], y: MotionValue<number> | number, className?: string; }) => {
  return (
    <motion.div 
      className={`relative flex h-full w-1/4 min-w-[250px] flex-col gap-[2vw] transition-all duration-[20ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] max-md:w-1/2 max-md:min-w-[100px] ${className}`} 
      style={{ y }}
      >
      {images.map((src, index) => (
        <div key={index} className="relative h-full w-full min-w-[250px] overflow-hidden rounded-[1vw] max-md:min-w-[100px]">
          <Image src={src} alt="Image" fill className="object-cover" />
        </div>
      ))}
    </motion.div>
  );

}


