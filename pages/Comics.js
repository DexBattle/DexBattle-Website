import Navbar from '../components/NavAbout'
export default function Comics(){
    return(
        <div className='overflow-hidden'>
            <Navbar/>
            <div  className='flex flex-col items-center md:px-16 px-4 overflow-hidden'>
            <h1 className='font-Kanit text-2xl md:text-4xl text-blue-400  mt-[100px]'>Comics</h1>

            <div className='w-full h-auto md:my-6 my-2 flex flex-col items-center justify-start'>
                <img src='/comicCover.png' className='w-full h-full filter blur-sm object-cover absolute'/>
                <h1 className='text-white font-Kanit text-4xl text-center relative'></h1>
            </div>
            </div>
        </div>
    )
}