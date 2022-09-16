import axios from "axios";
import {useState} from "react";

const UpdateScore = () => {
    const [state, updateState] = useState({
        hole:1,
        score:0
    })
    return <form onSubmit={(event)=>{
        event.preventDefault();
        axios.post("/api/update-score",state).then(()=>{
            alert("Score Updated")
        }).catch((e)=>{
            alert("Error")
            console.log(e)
        })
    }
    }>
        <input type={"number"} placeholder={"hole"} onInput={(event)=>{updateState({...state, hole:parseInt(event.currentTarget.value) })}}/>
        <input type={"number"} placeholder={"score"} onInput={(event)=>{updateState({...state, score:parseInt(event.currentTarget.value)  })}}/>
        <button type={"submit"}>Enter</button>
    </form>
}

export default UpdateScore