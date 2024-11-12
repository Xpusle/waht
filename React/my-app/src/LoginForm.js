import React,{useState} from "react";
function LoginForm(){
    const [Username,setUsername]=useState('')
    const [Password,setPassword]=useState('')
    const [Error,setError]=useState('')

    const handelsubmit=(e)=>{
        e.preventDefault();

        if(!Username || !Password){
            setError("both the fields must be filled")
        }else{
            setUsername('')
            setPassword('')
            setError('')
        }
    }

    return (
        <div>
            <form onSubmit={handelsubmit}>
                {Error && <p>{Error}</p>}
                <input
                    type="text"
                    placeholder="Username"
                    value={Username}
                    onChange={(e)=>setUsername(e.target.value)}
                ></input>
                <input
                    type="text"
                    placeholder="Password"
                    value={Password}
                    onChange={(e)=>setPassword(e.target.value)}                
                >
                </input>
                <button type="submit">submit</button>
            </form>
        </div>
    )
}; export default LoginForm;
