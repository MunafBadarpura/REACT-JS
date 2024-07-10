import { useState } from "react";

function Comment(){
    let [commentData, setCommentData] = useState({
        username: "",
        comment: "",
        rating: '5'
    })

    function handleChanges(event){
        setCommentData((currData) => {
            return {...currData, [event.target.name]: event.target.value};
        })
    }

    function handleSubmit(event){
        console.log(commentData);
        event.preventDefault();
        setCommentData({
            username: "",
            comment: "",
            rating: '5'
        })
    }

    return (
        <>
            <h2>Give Your Comment!!</h2>
            <form onSubmit={handleSubmit}>
                <input value={commentData.username} onChange={handleChanges} type="text" name="username" placeholder="Username"/>  <br/><br/>
                <textarea value={commentData.comment} onChange={handleChanges} name="comment" placeholder="Comment" ></textarea> <br/><br/>
                <input value={commentData.rating} onChange={handleChanges} type="number" name="rating" placeholder="Rating" min={1} max={5}/>  <br/><br/>
                <button>Submit</button>
            </form>
        </>
    )
}


export default Comment;