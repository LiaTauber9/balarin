import MenuIcon from '@/assets/icons/icon-menu.svg';
import { logo } from '@/assets/images';
import Image from 'next/image';
// import { ItemTicker } from './ItemTicker';
// import SocialMediaIcons from '@/app/components/SocialMediaIcons';
import { useRouter } from 'next/navigation';



export const Header = ({ id }: { id?: string }) => {
  const router = useRouter();
  const goToFormPage = () => {
    router.push('/registration');
  };
  const currColor = id === 'header' ? 'white' : '[#FC1EB5]';

  return (
    <header className="py-4 border-b border-[#FC1EB5]/15 md:border-none">
      {/* <div className="container"> */}
        <div className={`flex justify-between items-center text-${currColor} md:border border-${currColor}/15 md:p-2.5 rounded-xl w-[90vw] mx-auto backdrop-blur`}>
          <div className='flex items-center gap-4'>
            <MenuIcon  />
            <button 
              onClick={goToFormPage}
              className="relative py-2 px-3 rounded-lg font-medium text-sm text-white bg-gradient-to-b from-[#190d2e] to-[#FC1EB5] shadow-[0px_0px_12px_#8c44ff]"
            >
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
          {/* <SocialMediaIcons /> */}
          {/* <div className='hidden md:block w-70% over-flow-hidden w-[50vw]'>
            <ItemTicker /> */}
            
            {/* <nav className='flex items-center gap-6 justify-around'>
              <a href='' className="text-white/70 hover:text-white transition">ביס למחול מודרני-עכשווי</a>
              <a href="" className='text-white/70 hover:text-white transition'>הופעות</a>
              <a href="" className='text-white/70 hover:text-white transition'>תחרויות ריקוד</a>
              <a href="" className='text-white/70 hover:text-white transition'>ריקוד לבת-מצווה</a>
            </nav> */}
          {/* </div> */}
          <div className='border h-10 w-16 rounded-lg inline-flex justify-center items-center border-[#FC1EB5]/20'><Image src={logo.src} alt='Balarin' width={52} height={56} /></div>
        </div>
      {/* </div> */}
    </header>
  )
}