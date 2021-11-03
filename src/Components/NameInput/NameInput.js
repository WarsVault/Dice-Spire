import "./NameInput.scss";

function NameInput(props) {
    return (
        <div className="nameinput-container">
            <input className="nameinput" type="text" placeholder="Roll name goes here!" onChange={props.onChange} value={props.value} />
        </div>
    )
}

export default NameInput;