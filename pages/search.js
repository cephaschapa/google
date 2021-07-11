import Head from 'next/head'
import Header from '../components/Header'
import {API_KEY, cx} from '../keys'
import Response from '../Response'
import {useRouter} from 'next/router'
import SearchResults from '../components/SearchResults'

function Search({results}) {
    const router = useRouter()
    console.log(results)
    return (
        <div>
            <Head>
                <title>{router.query.term} - Google Results</title>
            </Head>
            {/* Header */}
            <Header url={""}/>
            {/* Search Results */}
            <SearchResults results={results}/>
        </div>
    )
}

export default Search

export async function getServerSideProps(context){
    const useDummyData = true;
    const startIndex = context.query.start || '0';

    const data = await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${cx}&q=${context.query.term}&start=${startIndex}`).then(r => r.json())

    // After the SERVER has rendered ... Pas the result to the client...

    return {
        props: {
            results:data
        }
    }
}
