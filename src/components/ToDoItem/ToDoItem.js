export default function ToDoItem(props) {
    return (
        <li onClick={() => props.buttonFn(props.id)}>
            {props.title}&nbsp;<button onClick={() => props.buttonFn(props.id)}>{props.buttonText}</button>
        </li>
    )
}