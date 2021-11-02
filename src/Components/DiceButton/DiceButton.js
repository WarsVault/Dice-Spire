import './DiceButton.sass';

function DiceButton(props) {
    return (
        <div onClick={props.onClick}>Add <b>D{props.diceNumber}</b></div>
    )
}

export default DiceButton;