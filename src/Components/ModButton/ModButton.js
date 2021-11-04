import './ModButton.scss';

function ModButton(props) {
    return (
        <div className="mod-container">
            <div className={props.active ? "modbutton-active" : "modbutton-inactive"} onClick={props.active ? props.onClickSub : null}>Add <b>-{props.modNumber}</b></div>
            <div className={props.active ? "modbutton-active" : "modbutton-inactive"} onClick={props.active ? props.onClickAdd : null}>Add <b>+{props.modNumber}</b></div>
        </div>
    )
}

export default ModButton;