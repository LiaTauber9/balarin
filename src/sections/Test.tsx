'use client';
import { useEffect, useRef, useState } from 'react';
import styles from '../app/page.module.scss'
import Image from 'next/image';
import Lenis from '@studio-freight/lenis'
import { useTransform, useScroll, motion } from 'framer-motion';
import { images } from '@/assets/images';
import { Hero } from '@/sections/Hero';
import AnimatedColumns from '@/sections/ParallaxSection';
import ParallaxSection from '@/sections/Test';

export default function HomeTest() {
  const gallery = useRef(null);

  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const [isMobile, setIsMobile] = useState(false);

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ['start end', 'end start']
  })
  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25])
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3])

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

  useLayoutEffect(() => {
    const lenis = new Lenis()

    const raf = (time: number) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight })
    }

    window.addEventListener("resize", resize)
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    }
  }, [])

  return (
    <main className={styles.main}>
      <>
      {Hero(isMobile)}
      </>
     
      
      <div ref={gallery} className={styles.gallery}>
      {!isMobile ? (
          <>
             <Column images={[images[0], images[1], images[2]]} y={y as unknown as number} />
             <Column images={[images[3], images[8], images[4]]} y={y2 as unknown as number} />
          </>
        ) : null}
          <>
            <Column images={[images[5], images[6], images[7]]} y={y3 as unknown as number} />
            <Column images={[images[9], images[10], images[11]]} y={y4 as unknown as number} />
          </>
      </div>
      <div className="h-[100vh]"></div>
      {
      AnimatedColumns()
    }
     <div className="h-[100vh]"></div>
     {
      ParallaxSection()
     }
          <div className="h-[100vh]"></div>

    </main>
  )
}

const Column = ({ images, y }: { images: string[], y: number | string }) => {
  return (
    <motion.div
      className={styles.column}
      style={{ y }}
    >
      {
        images.map((src, i) => {
          return <div key={i} className={styles.imageContainer}>
            <Image
              src={src}
              alt='image'
              fill
              sizes="(max-width: 768px) 50vw,  
              25vw"
            //  style={{ objectFit: 'cover' }}
            />
          </div>
        })
      }
    </motion.div>
  )
}

function useLayoutEffect(arg0: () => () => void, arg1: never[]) {
  throw new Error('Function not implemented.');
}
