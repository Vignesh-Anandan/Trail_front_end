import ResCard from "./ResCard";
import resList from "../utilities/mockdata";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const[listOfRes, setlistOfRes] = useState([]);

  const[searchText, setsearchText] = useState("");
  
  useEffect(()=>{
    fetchData();
  }, []);

  const fetchData = async ()=>{
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      
    );

    const json = await data.json();
    console.log(json);
    listdata=json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    setlistOfRes(listdata);

  };
//conditional operator

    return listOfRes.length === 0 ? <Shimmer /> :(
      <div className="body">
        <div className="option">
        <div className="search">
          <input type="text" className="search-box" value={searchText} onChange={(e)=>{
            setsearchText(e.target.value)
          }}/>
          <button onClick={()=>{
          const filtersearch =  listOfRes.filter((resData)=>resData.info.name.toLowerCase().includes(searchText.toLowerCase()));

            console.log(filtersearch)
            setlistOfRes(filtersearch);
          }
                          }>
            Search restaurant
          </button>
          
        </div>
        <div className="filter">
          <button className="fillter-btn"
          onClick={()=>{
            const filteredList = listOfRes.filter(
              (res)=>res.info.avgRating>4.4
            );
            setlistOfRes(filteredList);
          }}
          >
          TOP RESTAURANTS
          </button>
        </div>
        <div className="clear">
            <button className="clear-btn"
            onClick={()=>{
              const reload = listdata;
              setlistOfRes(reload); 
              setsearchText("")
            }}
            >
              CLEAR FILTER
            </button>
        </div>
        </div>
        <div className="res-container">
         {
          listOfRes.map(restaurant=> <ResCard key={restaurant.info.id} resData={restaurant}/>)
         }
        </div>
      </div>
  
    )
  };

  export default Body;