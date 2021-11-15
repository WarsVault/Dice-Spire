import "./RollButton.scss";

function RollButton(props) {
    return (
        <div className="rollbutton-container">
            <div className="rollbutton-name">{props.rollName}</div>
            <div className="rollbutton-props">{props.rollDice + props.rollMod}</div>
        </div>
    )
}

export default RollButton;