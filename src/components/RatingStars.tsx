import {ReactComponent as HalfRatingStar}  from "../assets/ratingStar.svg";
import {ReactComponent as RatingStar}  from "../assets/star.svg";

interface props{
  rating:number;
}

const RatingStars = ({rating}:props) => {
  const isHalfRating:boolean =  Math.ceil(rating)==Math.floor(rating);
  const mainRating = Math.floor(rating);;
  const ratingsArray = [];
  for (let i = 1; i <mainRating;i++){
    ratingsArray.push(i);
  }
  return (
    <div className="flex gap-1">
      {ratingsArray.map(()=>{
        return(
          <RatingStar/>
        )
      })}
      {!isHalfRating&&<HalfRatingStar/>}
    </div>
  )
}

export default RatingStars