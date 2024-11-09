'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './page.module.scss'
import Lenis from '@studio-freight/lenis'
import { useTransform, useScroll, motion, MotionValue } from 'framer-motion';
import { Hero } from '@/sections/Hero';
// import ParallaxSection from '@/sections/ParallaxSection';
import { images } from '@/assets/images';
import Image from 'next/image';


export default function Home() {

  // const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });
  const y = useTransform(scrollYProgress, [0, 1], [-50, 500]);


  useEffect(() => {
    const lenis = new Lenis();
    const raf = (time: number) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf);
  }, []);

  // const resize = () => {
  // setDimension({ width: window.innerWidth, height: window.innerHeight });
  // }

  // window.addEventListener('resize', resize);
  // requestAnimationFrame(raf);
  // resize();



  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();

    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  return (
    <main className={styles.main}>
      {Hero(isMobile)}
      <div className={styles.gallery} ref={containerRef}>
        <Column images={images.slice(0, 3)} y={y} />
        <Column images={images.slice(3, 6)} />
        <Column images={images.slice(6, 9)} />
        <Column images={images.slice(9, 12)} />
      </div>
      <div className="h-screen"></div>

    </main>
  )
}

const Column = ({ images, y }: { images: string[], y?: MotionValue<number> }) => {
  return (
    <motion.div className={styles.column} style={{ y }}>
      {images.map((src, index) => (
        <div key={index} className={styles.imageContainer}>
          <Image src={src} alt="Image" fill />
        </div>
      ))}
    </motion.div>
  );

}
