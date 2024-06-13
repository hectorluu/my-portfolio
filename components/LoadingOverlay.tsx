import React from 'react';
import Image from 'next/image';

const LoadingOverlay = () => (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
        <div className="flex flex-col items-center">
            <div className="h-80 w-80 relative mb-0 mt-[-4rem]">
                <Image src="/running.gif" alt="Loading" layout="fill" objectFit="cover" />
            </div>
            <div className="mt-[-25px] text-3xl font-bold z-10 italic">
                NOW LOADING
            </div>
        </div>
    </div>
);

export default LoadingOverlay;