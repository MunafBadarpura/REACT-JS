import { useState } from "react"

let likeStyle = {
    color: "red",
    fontSize : "20px"
}

function LikeButton(){
    let [isLiked, setIsLiked] = useState(false);

    function toggleLike(){         
        setIsLiked((cuurentVal) => {
            return !cuurentVal;   // if false it makes true and if true it makes false
        })
    }

    return(
        <div>
            <p onClick={toggleLike}>
                {isLiked===false ? <i className="fa-regular fa-heart"></i> : <i style={likeStyle} className="fa-solid fa-heart"></i> }
            </p>
        </div>
    )
}


export default LikeButton