import './ModButton.scss';

function ModButton(props) {
    return (
        <div className="mod-container">
            <div className="modbutton" onClick={props.onClickSub}>Add <b>-{props.modNumber}</b></div>
            <div className="modbutton" onClick={props.onClickAdd}>Add <b>+{props.modNumber}</b></div>
        </div>
    )
}

export default ModButton;