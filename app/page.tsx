import Link from "next/link";
import Header from "./components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <main className='text-2xl flex flex-col justify-center items-center bg-black min-h-screen'>
      <Header/>

      <div className="flex justify-center flex-col items-center">
        <p className='text-white text-bold text-[40px] sm:text-[50px] uppercase'>Pavels/Music</p>
      
        <h5 className="text-white font-serif text-[20px] mt-10">Listen on </h5>

        <div className="flex flex-col items-center">
          <Link href="https://music.apple.com/us/artist/pavels-music/1608194615"><Image src="/apple1.png" width={100} height={100} alt="apple" className="py-1"/></Link>
          <Link href="https://open.spotify.com/artist/10yXiUlSrROMsEUN2tn4vo?si=sRymkUglTWK_9CEi2XVL1A"><Image src="/spotifyy.png" width={100} height={100} alt="spotify" className="py-1"/></Link>
          <Link href="https://music.amazon.de/artists/B09RQ38ZBN?ref=dm_sh_JlWevsn20wYn3FnxvgSkTna2g"><Image src="/amazon1.png" width={100} height={100} alt="anazon" className="py-1"/></Link>
          <Link href="https://deezer.page.link/WGMjU9M1xkFXY36K7"><Image src="/deezer.png" width={100} height={100} alt="deezer" className="py-1"/></Link>
          <Link href="https://music.youtube.com/channel/UCrVMHk4yP7q_hcRgwGJyVtA?feature=share"><Image src="/youtube-music1.png" width={150} height={100} alt="youtube" className="py-1"/></Link>
        </div>
      </div>
      
    </main>
  )
}
