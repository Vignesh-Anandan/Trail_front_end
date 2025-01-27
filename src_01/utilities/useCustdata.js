

const useCustdata = (resid) => {

    useEffect(()=>{
        fetchData()
    },[])

    const fetchData = async () => {
        const list = await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=69354&catalog_qa=undefined&submitAction=ENTER"
        ); 
            const json = await list.json();
            console.log(json); 

         
        
    }
    return(listdata);
};