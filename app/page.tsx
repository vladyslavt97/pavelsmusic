import Image from 'next/image'

export default function Home() {
  return (
    <main className='text-2xl flex flex-col justify-center items-center h-screen'>
      <p className='bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 text-bold md:text-4xl'>Pavel Music Website!</p>
      <p className='text-sm animate-pulse md:text-lg'>under construction...</p>
    </main>
  )
}
