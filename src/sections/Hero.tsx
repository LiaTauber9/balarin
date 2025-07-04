import { Header } from '@/sections/Header';
import styles from '../app/page.module.scss';
import Image from 'next/image';
import { useRef } from 'react';
import { logo } from '@/assets/images';
import { ItemTicker } from '@/sections/ItemTicker';
import SocialMediaIcons from '@/app/components/SocialMediaIcons';


export const Hero = (isMobile : boolean) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    return (
        <div className="relative w-full h-screen">
            {/* Video Background */}
            <video
                ref={videoRef}
                src={isMobile ? '/videos/mobile_main1.mp4' : '/videos/main1.mp4'}
                className={`${styles.video} absolute top-0 left-0 w-full h-full object-cover z-0`}
                autoPlay
                muted
                loop={true}
            />

            {/* Overlay Content */}
            <div className="relative z-10 h-[100svh]" >
                {/* Header with sticky positioning */}
                <div className="sticky top-0 bottom-[10vh] z-20">
                    <Header id="header" />
                </div>

                {/* Logo and Quote */}
                <div className={styles.videoContainer}>
                    <div className="flex flex-col justify-center items-center">
                    <Image className={styles.logoLayer} src={logo} alt="" width={500} height={500} />
                    <div className={styles.quote}>
                        <div lang="en" className="text-white text-left text-xl sm:text-2xl lg:text-6xl">
                            Dance is the hidden language of the soul
                        </div>
                        <h1 lang="en" className="text-white text-right mt-2 pr-4 text-lg sm:text-xl">
                            Martha Graham
                        </h1>
                    </div>
                    </div>
                    <div className='over-flow-hidden w-full md:w-[55vw]'>
                    <ItemTicker />
                    </div>
                    
                </div>
                {/* Social Media Icons */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center md:top-1/2 md:-translate-y-1/2 md:right-auto md:left-0 md:pl-6 z-30">
          <SocialMediaIcons
            className="flex-row md:flex-col md:gap-y-6"
          />
        </div>

                {/* Mask Div Above Animation */}
                {/* <div className="absolute top-0 left-0 right-0 bottom-0 z-30 pointer-events-none [mask-image:linear-gradient(to right, transparent, black 20%, black 80%, transparent)]"></div> */}
            </div>
        </div>
    );
};
