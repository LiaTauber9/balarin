import MenuIcon from '@/assets/icons/icon-menu.svg';
import { logo } from '@/assets/images';
import Image from 'next/image';



export const Header = () => {
  return (
    <header className="py-4 border-b border-[#FC1EB5]/15" style={{position: 'fixed', width: '100%', height: '70px'}}>
        <div className="container">
        <div className="flex justify-between items-center">
        <div className='flex items-center gap-4'>
        <MenuIcon  className="h-8 w-8" />
              <button className="relative py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190d2e] to-[#FC1EB5] shadow-[0px_0px_12px_#8c44ff]">
                <div className='absolute inset-0'>
                  <div className='rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]' />
                  <div className='rounded-lg border border-white/40 absolute inset-0 [mask-image:linear-gradient(to_top,black,transparent)]' />
                  <div className='absolute inset-0 shadow-[0_0_10px_rgb(140,69,255,.7)_inset] rounded-lg'></div>
                </div>
                <span>
                הרשמה לבלרין
                </span>
                </button>
              </div> 
            {/* <div>
              <nav className='flex items-center gap-6'>
                <a href=''>בי"ס למחול מודרני-עכשווי</a>
                <a href="">הופעות</a>
                <a href="">תחרויות ריקוד</a>
                <a href="">ריקוד לבת-מצווה</a>
              </nav>
            </div> */}
            <div className='border h-10 w-16 rounded-lg inline-flex justify-center items-center border-[#FC1EB5]/20'><Image src={logo.src} alt='Balarin' width={52} height={56} /></div>  
        </div>
    </div>
    </header>    
  )
}