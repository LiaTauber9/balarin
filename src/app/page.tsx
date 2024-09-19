'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './page.module.scss'
import Image from 'next/image';
import Lenis from '@studio-freight/lenis'
import { useTransform, useScroll, motion } from 'framer-motion';

const images = [
  "6.jpeg",
  "2.jpeg",
  "3.jpeg",
  "4.jpeg",
  "5.jpeg",
  "1.jpeg",
  "8.jpeg",
  "7.jpeg",
  "9.jpeg",
  "10.jpeg",
  "11.jpeg",
  "12.jpeg",
]

export default function Home() {
  
  const gallery = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [dimension, setDimension] = useState({width:0, height:0});

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
    if(videoRef.current) {
      videoRef.current.playbackRate = 2.0;
    }
  }, []);

  useEffect( () => {
    const lenis = new Lenis()

    const raf = (time: number) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    const resize = () => {
      setDimension({width: window.innerWidth, height: window.innerHeight})
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
       <div className={styles.videoContainer}>
       <h1 className={styles.heading}>Balarin</h1> 
       <h3 className="text-l font-bold text-white">Contemporary Dance</h3>
       <div className={styles.videoBackground}>
       <video
         ref={videoRef} 
          src="/videos/main.mp4" 
          className={styles.video}
          autoPlay
          muted
          loop = {true}
          playsInline 
        />
       </div>
      </div>
      <div ref={gallery} className={styles.gallery}>
        <Column images={[images[0], images[1], images[2]]} y={y as unknown as number}/>
        <Column images={[images[3], images[4], images[5]]} y={y2 as unknown as number}/>
        <Column images={[images[6], images[7], images[8]]} y={y3 as unknown as number}/>
        <Column images={[images[9], images[10], images[11]]} y={y4 as unknown as number}/>
      </div>
      <div className={styles.spacer}>
      </div>
    </main>
  )

}const Column = ({ images, y }: { images: string[], y: number | string }) => {  return (
    <motion.div 
      className={styles.column}
      style={{ y }}
    >
      {
        images.map((src, i) => {
          return <div key={i} className={styles.imageContainer}>
            <Image 
              src={`/images/${src}`}
              alt='image'
              fill
            />
          </div>
        })
      }
    </motion.div>
  )
}