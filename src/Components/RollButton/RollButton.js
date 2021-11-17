import "./RollButton.scss";

function RollButton(props) {
    const HandleClickRemove = e => {
        e.stopPropagation();
        props.onClickRemoveRoll();
    }

    const HandleClickRollAdv = e => {
        e.stopPropagation();
        props.onClickRollButtonAdv();
    }

    return (
        <div className="rollbutton-container" onClick={props.onClickRollButton}>
            <div className="rollbutton-name">{props.rollName}</div>
            <div className="rollbutton-props">{props.rollDice + props.rollMod}</div>
            <div className="rollbutton-remove" onClick={HandleClickRemove}>X</div>
            <div className="rollbutton-adv" onClick={HandleClickRollAdv}>Adv/Dis</div>
        </div>
    )
}

export default RollButton;