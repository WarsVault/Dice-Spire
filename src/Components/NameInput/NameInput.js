import "./NameInput.sass";

function NameInput(props) {
    return (
        <input type="text" onChange={props.onChange}/>
    )
}

export default NameInput;