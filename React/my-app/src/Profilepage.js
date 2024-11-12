import { useState,useEffect } from "react";
function Profilepage(){
    const [username,setUsername]=useState('jhon')

    useEffect(()=>{
        document.title=`welcome ${username}`

        return ()=>{
            document.title="to my website "
        }
    },[username])

    return(
        <div>
            <h1>{username}</h1>
            <button onClick={()=>setUsername('Alice')}>Change name</button>
        </div>
    )
}; export default Profilepage;