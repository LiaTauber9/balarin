'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './page.module.scss'
import Image from 'next/image';
import Lenis from '@studio-freight/lenis'
import { useTransform, useScroll, motion } from 'framer-motion';
import { Header } from '@/sections/Header';
import { images, logo } from '@/assets/images';

export default function Home() {

  const gallery = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);

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

  // useEffect(() => {
  //   if (videoRef.current) {
  //     videoRef.current.playbackRate = 1.0;
  //   }
  // }, []);

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

  useEffect(() => {
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
      <div className={styles.videoContainer}>
        <Header />
        <video
          ref={videoRef}
          src={isMobile ? '/videos/mobile_main1.mp4' : '/videos/main1.mp4'}
          className={styles.video}
          autoPlay
          muted
          loop={true}
          // playsInline
        />
        <div className={styles.logo_quot_layer}>
          <Image className={styles.logoLayer} src={logo} alt="" width={600} height={800}/>
          <div className={styles.quote}>
            <div lang='en' className="text-my-pink text-left text-xl sm:text-2xl lg:text-6xl mt-10">Dance is the hidden language of the soul</div>
            <h1 lang='en' className="text-my-pink text-right mt-2 pr-4 text-lg sm:text-xl ">Martha Graham</h1>
          </div>
        </div>       
      </div>
      <div ref={gallery} className={styles.gallery}>
      {!isMobile ? (
          <>
             <Column images={[images[0], images[1], images[2]]} y={y as unknown as number} />
             <Column images={[images[3], images[8], images[4]]} y={y2 as unknown as number} />
          </>
        ) : (
          <> </>
        )}
          <>
            <Column images={[images[5], images[6], images[7]]} y={y3 as unknown as number} />
            <Column images={[images[9], images[10], images[11]]} y={y4 as unknown as number} />
          </>
      </div>
      <div className={styles.spacer}></div>
    </main>
  )

} const Column = ({ images, y }: { images: string[], y: number | string }) => {
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