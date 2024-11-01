'use client';
import { motion } from "framer-motion";

export const ItemTicker = () => {
    const items = [
        {
            href: '#',
            label: 'בי"ס למחול מודרני-עכשווי',
        },
        {
            href: '#',
            label: 'שיעורי טכניקה',
        },
        {
            href: '#',
            label: 'סדנאות היפ-הופ',
        },
        {
            href: '#',
            label: 'הופעות',
        },
        {
            href: '#',
            label: 'תחרויות ריקוד',
        },
        {
            href: '#',
            label: 'ריקוד לבת-מצווה',
        },
    ];

    const allItems = [...items, ...items]; // Duplicated items for smooth scrolling

    return (

         <section className="relative w-full">
            <div className="flex w-full overflow-hidden mask-gradient">
                <motion.div 
                    initial={{ translateX: '50%' }} 
                    animate={{ translateX: '0' }} 
                    transition={{ duration: 30, ease: 'linear', repeat: Infinity }} 
                    className="flex flex-none gap-14 pr-14 -translate-x-1/2" 
                    >
                    {allItems.map((item, index) => (
                        <div key={index} className="h-8 w-auto flex items-center">
                            <a href={item.href} className="block whitespace-nowrap">
                                <span className="text-base text-white/70 hover:text-white transition">{item.label}</span>
                            </a>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* The mask-image div */}
            {/* <div className="absolute top-0 left-0 right-0 bottom-0 z-30 bg-gradient-to-r from-black via-transparent to-black opacity-90 [background-size:100%_100%] [background-position:0_0] "></div> */}

            {/* <div className="absolute top-0 left-0 right-0 bottom-0 z-30 [background:linear-gradient(to right, black 10%, transparent 90%, black 100%)] [mask-image:linear-gradient(to right, transparent, black 20%, black 80%, transparent)]"></div>            <div className="absolute top-0 left-0 right-0 bottom-0 z-30 bg-gradient-to-r from-black via-transparent to-black opacity-100 [background-size:100%_100%] [background-position:0_0] [mask-image:linear-gradient()]"></div> */}

            {/* <div className="absolute top-0 left-0 right-0 bottom-0 z-30 [mask-image:linear-gradient(to right, transparent, black 20%, black 80%, transparent)]"></div> */}
        </section>

        
    );
}
