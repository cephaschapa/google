import {SearchIcon,PhotographIcon, FilmIcon, MapIcon, DotsVerticalIcon, NewspaperIcon} from '@heroicons/react/outline'
import Options from './Options'
function headeroptions() {
    return (
        <div className="flex p-6 w-full justify-evenly border-b">
            {/* Left */}
            <div className="flex space-x-6 mb-3">
                <Options title="All" Icon={SearchIcon} selected/>
                <Options title="Images" Icon={PhotographIcon}/>
                <Options title="Video" Icon={FilmIcon}/>
                <Options title="News" Icon={NewspaperIcon}/>
                <Options title="More" Icon={DotsVerticalIcon}/>
            </div>
            {/* Right */}
            <div className="flex space-x-4 ml-auto text-gray-500">
                <p className="link">Settings</p>
                <p className="link">Tools</p>
            </div>
            
        </div>
    )
}

export default headeroptions
