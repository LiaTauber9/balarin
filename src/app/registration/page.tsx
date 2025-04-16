'use client';
import { useRouter } from 'next/navigation';

export default function FormPage() {
  const router = useRouter();
  
  const goBackHome = () => {
    router.push('/');
  };
  
  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-full flex justify-start p-4">
        <button
          onClick={goBackHome}
          className="flex items-center text-indigo-600 hover:text-indigo-800 font-medium"
        >
          <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          Back to Home
        </button>
      </div>
      
      {/* JotForm iframe */}
      <div className="w-full h-screen max-w-4xl relative">
        <iframe 
          id="JotFormIFrame"
          title="Registration Form"
          className="w-full h-full border-0 z-[1]"
          src="https://form.jotform.com/251012664192046"
        />
        <div
          className="absolute bottom-0 left-0 w-full h-[70px]"
          style={{
            backgroundColor: 'rgba(194,112,142,1)',
            zIndex: 2, // Higher z-index to appear on top
          }}
        />
      </div>
    </div>
  );
}