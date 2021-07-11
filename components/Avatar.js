export default function Avatar({url, className}) {
    return (
        <img className={`h-10 rounded-full transition duration-150 transform hover:scale-110 cursor-pointer ${className}`} loading="lazy" src={url} alt="profile pic"/>
    )
}
