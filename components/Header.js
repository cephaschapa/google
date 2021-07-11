import Image from 'next/image'
import {useRouter} from 'next/router'
import {useRef} from 'react'
import {MicrophoneIcon,SearchIcon, XIcon} from '@heroicons/react/outline'
import Avatar from './Avatar'
import HeaderOptions from './headeroptions'


function Header() {
    const router = useRouter()
    const s = useRef(null)

    if(!s) return;
    const t = e =>{
        e.preventDefault()
        const term = s.current.value
        router.push(`/search?term=${term}`)
    }
    return (
        <header className="sticky top-0 bg-white">
          <div className="flex w-full p-6 items-center">
            <Image onClick={()=> router.push('./')} src='https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png' height={40} width={120}/>  
            <form className="flex flex-grow border-gray-200 rounded-full shadow-lg px-6 py-3 ml-10 mr-5 items-center max-w-3xl">
                <input className="flex-grow w-full focus:outline-none" type="text" ref={s}/>
                <XIcon className="h-7 sm:mr-3 cursor-pointer transition duration-100 transform hover:scale-125 text-gray-500" onClick={()=>s.current.value =""}/>
                <MicrophoneIcon className="h-6  text-blue-500 mr-3 hidden sm:inline-flex border-l-2 pl-4 border-gray-300"/>
                <SearchIcon className="h-6 hidden sm:inline-flex text-blue-500" />
                <button hidden className="" onClick={t}>Search</button>
            </form>
            <Avatar className="ml-auto" url='https://coaching.papareact.com/ai9' />
          </div>
          {/* Header Options */}
          <HeaderOptions className="" />
        </header>
    )
}

export default Header
