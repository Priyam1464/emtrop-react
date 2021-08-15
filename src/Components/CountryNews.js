import { useEffect,useState,useRef } from "react";
import newsHeadlineService from "../Services/NewsHeadlineService";
import Pagination from './Pagination'
import Headline from "./Headline";
import SearchItem from "./SearchBar"
import { CircularProgress } from '@material-ui/core';


export default function CountryNews({country})
{
    
    const[pageNumber,setPageNumber]=useState(1)
    const [headlines,setHeadlines]=useState(null)
    const maxPages=useRef(null)
    const [searchItem,setSearchItem]=useState(null)


    useEffect(()=>{
      (async ()=>{
        const headlines=await newsHeadlineService(country)
         console.log(headlines)
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

   const getHeadlines=(searchQuery)=>{
     let filteredHeadlines=headlines.slice(3*(pageNumber-1),((3*pageNumber)<headlines.length)?3*pageNumber:headlines.length)
     if(searchQuery!==null&&searchQuery.length>0)
     return filteredHeadlines.filter(headline=>headline.title.toLowerCase().includes(searchQuery.toLowerCase()))
  
      return filteredHeadlines
    }


    return(
      <>
      <SearchItem searchItem={setSearchItem}/>
      <div class="pagination">
        {
       (headlines!==null&&headlines.length>0)&&<Pagination maxPages={maxPages.current} pageNumber={pageNumber} onNextClick={onNextClick} onPrevClick={onPrevClick}/>
       }
       </div>

      <div class="countryHeadlines">
      {
          
         (headlines!==null&&headlines.length>0)? 
          getHeadlines(searchItem)
         .map((headline,index)=><Headline id={country+"-"+pageNumber+"-"+index} key={country+"-"+pageNumber+"-"+index} headline={headline}/>):<CircularProgress />
      }
      </div>
    </>
    )

  


} 


