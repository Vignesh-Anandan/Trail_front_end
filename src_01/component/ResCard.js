import { RES_URL } from "../utilities/constants";

const ResCard = (props) => {
    const{resData} = props;
  
    const{name, cuisines, avgRating, areaName, costForTwo,cloudinaryImageId} = resData?.info;
  
    console.log(props);
    return(
      <div className="rescard-main">
        <img className="resimage" alt="error" src={RES_URL+cloudinaryImageId} />
        <h3>{name}</h3>
        <h4>{cuisines.join(",")}</h4>
        <h4>{avgRating}</h4>
        <h4>{areaName}</h4>
        <h4>{costForTwo}</h4> 
      </div>
    );
  };

  export default ResCard;