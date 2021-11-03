import './DiceButton.scss';

function DiceButton(props) {
    return (
        <div className="dice-button" onClick={props.onClick}>Add <b>D{props.diceNumber}</b></div>
    )
}

export default DiceButton;