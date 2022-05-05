const Item = (props) => (
    <li 
    className={props.active ? "active" : "inactive"}
    onClick={()=> props.changeStatus(props.id)}
    >
        {props.name}
        </li>
)