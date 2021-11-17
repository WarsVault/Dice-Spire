import "./RollButton.scss";

function RollButton(props) {
    const HandleClick = e => {
        e.stopPropagation();
        props.onClickRemoveRoll();
    }

    return (
        <div className="rollbutton-container" onClick={props.onClickRollButton}>
            <div className="rollbutton-name">{props.rollName}</div>
            <div className="rollbutton-props">{props.rollDice + props.rollMod}</div>
            <div className="rollbutton-remove" onClick={HandleClick}>X</div>
        </div>
    )
}

export default RollButton;