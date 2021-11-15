import RollButton from "../RollButton/RollButton";
import "./SavedRolls.scss";

function SavedRolls(props) {
    function RenderSaveRolls(savedRollList) {
        var savedRollsArray = [];

        for (let i = 0; i < savedRollList.length; i++) {
            const currentRoll = savedRollList[i];

            savedRollsArray.push(
                <RollButton key={currentRoll.rollId} rollName={currentRoll.rollName} rollDice={currentRoll.rollDice} rollMod={currentRoll.rollMod} />
            );
        }

        var rowsArray = [];

        for (let i = 0; i < 4; i++) {
            var currentRow = [];
            for (let j = 0; j < 5; j++) {
                const currentRollButton = savedRollsArray[(i * 5) + j];

                currentRow.push(
                    currentRollButton ? currentRollButton : <div key={(i * 5) + j} className="hiddenrollbutton" />
                );
            }
            rowsArray.push(
                <div key={i} className="rolllist-row">{currentRow}</div>
            );
        }

        return rowsArray;
    }

    return (
        <div className="savedrolls-container">
            <div className={"saverolls-subcontainer " + (props.isActive ? "" : "saverolls-subcontainer-retracted")}>
                <div className="rolllist">
                    {RenderSaveRolls(props.savedRollList)}
                </div>
                <div className="rollbuttons">
                    <div className={"saverollbutton " + (props.canSave ? "" : "saverollbutton-disabled")} onClick={props.onSaveRoll}>
                        Save Current Roll
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SavedRolls;