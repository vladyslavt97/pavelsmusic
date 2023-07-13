import Link from "next/link";
import Header from "./components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <main className='text-2xl flex flex-col justify-center items-center bg-black h-screen'>
      <Header/>

      <div className="relative top-28 flex justify-center flex-col items-center">
        <p className='text-white text-bold text-[50px] uppercase'>Pavels/Music</p>
      
        <h5 className="text-white font-serif text-[20px] mt-10">Listen on </h5>

        <div className="">
          <Link href="https://music.apple.com/us/artist/pavels-music/1608194615"><Image src="/apple1.png" width={100} height={100} alt="apple" className="py-1"/></Link>
          <Link href=""><Image src="/spotifyy.png" width={100} height={100} alt="apple" className="py-1"/></Link>
          <Link href=""><Image src="/amazon1.png" width={100} height={100} alt="apple" className="py-1"/></Link>
          <Link href=""><Image src="/deezer.png" width={100} height={100} alt="apple" className="py-1"/></Link>
        </div>
      </div>
      
    </main>
  )
}
