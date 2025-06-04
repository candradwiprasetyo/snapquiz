"use client";

import Image from "next/image";

export default function ModalLoading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30">
      <div className="bg-[#FBCA6F] rounded-3xl shadow-lg px-6 py-10 text-center w-[90%] max-w-sm text-white">
        <div className="flex flex-col items-center">
          <Image
            src={"/assets/images/loading-icon.png"}
            width={100}
            height={100}
            alt="Loading Icon"
            className="animate-bounce"
          />
          <p className="text-2xl font-medium">
            One moment please… <br></br>
            <span className="text-xl">Preparing quiz just for you</span>
          </p>
        </div>
      </div>
    </div>
  );
}
