import { useEffect,useState,useRef } from "react";
import newsHeadlineService from "../Services/NewsHeadlineService";
import Pagination from './Pagination'
import Headline from "./Headline";


export default function CountryNews({country})
{


    const[pageNumber,setPageNumber]=useState(1)
    const [headlines,setHeadlines]=useState(null)
    const maxPages=useRef(null)


    useEffect(()=>{
      (async ()=>{
        const headlines=await newsHeadlineService(country)
        maxPages.current=Math.floor(headlines.length/3)+Math.floor(headlines.length%3)
        setHeadlines(headlines)
        
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
        {
       (headlines!==null&&headlines.length>0)&&<Pagination maxPages={maxPages.current} pageNumber={pageNumber} onNextClick={onNextClick} onPrevClick={onPrevClick}/>
       }
       </div>

      <div class="countryHeadlines">
      {
      
         (headlines!==null&&headlines.length>0)? headlines.slice(3*(pageNumber-1),((3*pageNumber)<headlines.length)?3*pageNumber:headlines.length)
         .map((headline,index)=><Headline  key={country+"-"+pageNumber+"-"+index} headline={headline}/>):<div>Loading</div>
      }
      </div>
    </>
    )

  


} 


