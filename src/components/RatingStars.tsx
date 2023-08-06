import {ReactComponent as HalfRatingStar}  from "../assets/ratingStar.svg";
import {ReactComponent as RatingStar}  from "../assets/star.svg";

interface props{
  rating:number;
  ratedUsers:number;
}

const RatingStars = ({rating,ratedUsers}:props) => {
  const isHalfRating:boolean =  Math.ceil(rating)==Math.floor(rating);
  const mainRating = Math.floor(rating);;
  const ratingsArray = [];
  for (let i = 0; i <mainRating;i++){
    ratingsArray.push(i);
  }
  return (
    <div className="flex items-center">
    <div className="flex gap-1 w-20">
      {ratingsArray.map((e)=>{
        return(
          <div key={e}>
          <RatingStar/>
          </div>
        )
      })}
      {!isHalfRating&&<HalfRatingStar/>}
    </div>
    <p className="text-xs">({`${ratedUsers}`})</p>
    </div>
  )
}

export default RatingStars