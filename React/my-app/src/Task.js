function Task(props){
    return(
        <div>
            <input type="checkbox" defaultcompelted={props.compelted}></input>
            <span>{props.text}</span>
        </div>
    )
}; export default Task;