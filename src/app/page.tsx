'use client';
import { useEffect, useRef } from 'react';
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
  const { width, height } = useDimention();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);


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
      <div className={styles.gallery} ref={containerRef}>
        <Column images={images.slice(0, 3)} y={y} />
        <Column images={images.slice(3, 6)} y={y2} />
        <Column images={images.slice(6, 9)} y={y3} />
        <Column images={images.slice(9, 12)} y={y4} />
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
