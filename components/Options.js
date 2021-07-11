function Options({title, Icon, selected}) {
    return (
        <div className={`flex  items-center space-x-2 border-b-4 border-transparent text-gray-500 cursor-pointer transition duration-100 transform hover:text-blue-700 hover:border-blue-500 pb-3 ${selected && 'text-blue-500 border-blue-500'}`}>
            <Icon className="h-4"/>
            <p className="hidden sm:inline-flex">{title}</p>
        </div>
    )
}

export default Options
