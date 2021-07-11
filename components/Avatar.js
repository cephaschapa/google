import Image from "next/image"
export default function Avatar({url, className}) {
    return (
        <div className=""></div>
        // <Image alt="logo" height={40} width={40} className={`h-10 rounded-full transition duration-150 transform hover:scale-110 cursor-pointer ${className}`} loading="lazy" src={url}/>
    )
}
