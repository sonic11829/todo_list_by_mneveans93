export default function NewEntryField(props) {
    return (
        <form onSubmit={(event) => {
            event.preventDefault()
            props.handleSubmit()
        }}>
            <h2>New Item</h2>
            <input type="text" name="title" value={props.newToDo.title} onChange={props.handleChange}></input>
        </form>
    )
}