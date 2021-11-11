import "./SavedRolls.scss";

// localStorage

function SavedRolls(props) {
    return (
        <div className="savedrolls-container">
            <div className={"saverolls-subcontainer " + (props.isActive ? "" : "saverolls-subcontainer-retracted")}>
                <div className="rolllist">

                </div>
                <div className="rollbuttons">
                    <div className={"saverollbutton " + (props.canSave ? "" : "saverollbutton-disabled")}>
                        Save Current Roll
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SavedRolls;