'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './page.module.scss'
import Lenis from '@studio-freight/lenis'
import { useTransform, useScroll, motion } from 'framer-motion';
import { Hero } from '@/sections/Hero';
import ParallaxSection from '@/sections/ParallaxSection';
import HomeTest from '@/sections/Test';


export default function Home() {

  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const [isMobile, setIsMobile] = useState(false);

  

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

  // useEffect(() => {
  //   const lenis = new Lenis()

  //   const raf = (time: number) => {
  //     lenis.raf(time)
  //     requestAnimationFrame(raf)
  //   }

  //   const resize = () => {
  //     setDimension({ width: window.innerWidth, height: window.innerHeight })
  //   }

  //   window.addEventListener("resize", resize)
  //   requestAnimationFrame(raf);
  //   resize();

  //   return () => {
  //     window.removeEventListener("resize", resize);
  //   }
  // }, [])

  return (
    <main className={styles.main}>
      {Hero(isMobile)}
      {ParallaxSection()}
     <div className="h-[100vh]"></div>
     {/* {HomeTest()} */}
    </main>
  )
}
