import './ModButton.sass';

function ModButton(props) {
    return (
        <div onClick={props.onClick}>Add <b>{props.modNumber}</b></div>
    )
}

export default ModButton;