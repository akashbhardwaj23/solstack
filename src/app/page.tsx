import NotifyComponents from "@/components/notify";
import Image from "next/image";

export default function Home() {
  return (
    <div className='h-screen bg-gradient-to-b from-sky-400 via-sky-500 to-sky-600'>

      <div className="flex flex-col justify-center items-center gap-10 h-full w-full">
        <h1 className="flex justify-center items-center text-4xl bg-clip-text text-transparent bg-gradient-to-r from-[#faf0ca] to-[#f4d35e] font-bold backdrop-blur-3xl">SolStack</h1>
        <NotifyComponents />
      </div>
     
    </div>
  );
}
