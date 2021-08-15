import { useEffect,useState } from "react";
import newsHeadlineService from "../Services/NewsHeadlineService";
import Pagination from './Pagination'
import Headline from "./Headline";


export default function CountryNews({country})
{


    const[pageNumber,setPageNumber]=useState(1)
    const [headlines,setHeadlines]=useState(null)


    useEffect(()=>{
      (async ()=>{
        setHeadlines(await newsHeadlineService(country))
      })()
     
    },[])

    const onNextClick=()=>{
      setPageNumber(pageNumber=>pageNumber+1)
    }

    const onPrevClick=()=>{
      setPageNumber(pageNumber=>pageNumber-1)
    }

    return(
      <>
      <div class="pagination">
        <Pagination head pageNumber={pageNumber} onNextClick={onNextClick} onPrevClick={onPrevClick}/>
      </div>

      <div class="countryHeadlines">
      {
      
         (headlines!==null&&headlines.length>0)? headlines.slice(3*(pageNumber-1),((3*pageNumber)<headlines.length)?3*pageNumber:headlines.length)
         .map((headline,index)=><Headline key={country+"-"+pageNumber+"-"+index} headline={headline}/>):<div>Loading</div>
      }
      </div>
    </>
    )

  


} 


