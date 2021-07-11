import {useRouter} from 'next/router'
import Link from 'next/link'
import {ChevronLeftIcon, ChevronRightIcon} from '@heroicons/react/outline'


function PaginationButtons() {
    const router = useRouter()
    const startIndex = Number(router.query.start) || 0
    return (
        <div className="flex items-center justify-between">
            {startIndex >= 10 && (
                <Link href={`/search?item=${router.query.term}&start=${startIndex-10}`}>
                    <div className="flex flex-col items-center">
                        <ChevronLeftIcon className="h-6 text-blue-500 cursor-pointer"/>
                        <p>Previous</p>
                    </div>
                </Link>
            )}
                <Link href={`/search?item=${router.query.term}&start=${startIndex+10}`}>
                    <div className="flex flex-col items-center">
                        <ChevronRightIcon className="h-6 text-blue-500 cursor-pointer"/>
                        <p>Previous</p>
                    </div>
                </Link>
        </div>
    )
}

export default PaginationButtons
