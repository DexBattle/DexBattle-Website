import React from 'react'

function Reps () {
    return (
    <div className='flex flex-col items-center mx-16'>
     <h1 className="font-Kanit md:text-[64px] text-[40px] text-center text-blue-400 mt-[100px]"> Our representatives</h1>

{/*content*/}


<ul className="text-blue-400 font-Kanit text-50px max-h-screen justify-evenly flex flex-col md:mx-16">
    <li>
        
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 my-8'>
    
            <div className="flex flex-col items-center bg-[#eee3d3] border rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img className="object-cover border border-gray-900 w-full rounded-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg m-3" src="/placeholder.png" alt=""/>
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-[40px] font-bold tracking-tight text-gray-900 dark:text-white">UAE</h5>
                        <h5 className="mb-2 text-[25px] font-bold tracking-tight text-gray-700 dark:text-white">Mohammed Fahmy</h5>
                        <div className="flex justify-between">
                            <img src="/whatsapp.png" className='h-[50px] w-[50px] rounded-xl'/>
                            <hl className='font-Kanit text-[30px]'>+971554740803</hl>
                        </div>
                    </div>
            </div>

            <div className="flex flex-col items-center bg-[#eee3d3] border rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img className="object-cover border border-gray-900 w-full rounded-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg m-3" src="/placeholder.png" alt=""/>
                    <div class="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-[40px] font-bold tracking-tight text-gray-900 dark:text-white">Morocco</h5>
                        <h5 className="mb-2 text-[25px] font-bold tracking-tight text-gray-700 dark:text-white">Abdeladim Nait Brahim</h5>
                        <div className="flex justify-between">
                            <img src="/whatsapp.png" className='h-[50px] w-[50px] rounded-xl'/>
                            <hl className='font-Kanit text-[30px]'>+21263688602</hl>
                        </div>
                    </div>
            </div>

            <div className="flex flex-col items-center bg-[#eee3d3] border rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img className="object-cover border border-gray-900 w-full rounded-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg m-3" src="/placeholder.png" alt=""/>
                    <div className="flex flex-col items-start">
                        <h5 className="mb-2 text-[40px] font-bold tracking-tight text-gray-900 dark:text-white">Turkey</h5>
                        <h5 className="mb-2 text-[25px] font-bold tracking-tight text-gray-700 dark:text-white">Nadir Emre Yenigün</h5>
                        <div className="flex justify-between">
                            <img src="/whatsapp.png" className='h-[50px] w-[50px] rounded-xl'/>
                            <hl className='font-Kanit text-[30px]'>+905354199983</hl>
                        </div>
                    </div>
            </div>

            <div className="flex flex-col items-center bg-[#eee3d3] border rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img className="object-cover border border-gray-900 w-full rounded-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg m-3" src="/placeholder.png" alt=""/>
                    <div className="flex flex-col items-start">
                        <h5 className="mb-2 text-[40px] font-bold tracking-tight text-gray-900 dark:text-white">Egypt</h5>
                        <h5 className="mb-2 text-[25px] font-bold tracking-tight text-gray-700 dark:text-white">Magdy Ahmed El Zanaty</h5>
                        <div className="flex justify-between">
                            <img src="/whatsapp.png" className='h-[50px] w-[50px] rounded-xl'/>
                            <hl className='font-Kanit text-[30px]'>+20100633105</hl>
                        </div>
                    </div>
            </div>


        </div>
    </li>
    {/* <li></li>
    <li>Egypt</li>
    <li>Turkey</li>
    <li>Sri Lanka</li>
    <li>Pakistan</li> */}
</ul>
     </div>
    )}
export default Reps