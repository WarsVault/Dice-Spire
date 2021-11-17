import { forwardRef, useImperativeHandle } from 'react';
import './URLButton.scss';

const URLButton = forwardRef((props, ref) => {
    function ProcessMod(processedMod) {
        if (processedMod === "") {
            return "";
        } else if (processedMod > 0) {
            return `+${processedMod}`;
        } else {
            return processedMod;
        }
    }

    function GetUrl(adv, urlPrefix, urlName, urlDice, processedMod) {
        const diceUrl = (urlName === "" ? "" : urlName.replace(" ", "%20") + ":") + (urlDice.includes("D100") ? urlDice.replace("D100", "D100+1D10") : urlDice) + ProcessMod(processedMod);
        return urlPrefix + diceUrl + (adv ? `/${diceUrl}` : "");
    }

    useImperativeHandle(ref, () => ({
        RollDiceRef(adv){
            RollDice(adv);
        }
    }))

    function RollDice(adv) {
        if (!adv) {
            window.open(GetUrl(false, props.urlPrefix, props.urlName, props.urlDice, props.processedMod), "_self");
        } else {
            window.open(GetUrl(true, props.urlPrefix, props.urlName, props.urlDice, props.processedMod), "_self");
        }
        props.onReset();
    }

    return (
        <div className="urlbutton-container">
            <div className="dicebuttons-container">
                <div className={"hiddenbutton"} />
                <div className={props.urlDice !== "" || props.urlName !== "" ? "resetbutton-active" : "resetbutton-inactive"} onClick={() => (props.urlDice !== "" || props.urlName !== "" ? props.onReset() : null)}>Reset Roll</div>
                <div className={props.urlDice !== "" ? "urlbutton-active" : "urlbutton-inactive"} onClick={() => (props.urlDice !== "" ? RollDice(false) : null)}>Roll on TaleSpire!</div>
                <div className={props.urlDice !== "" ? "advbutton-active" : "advbutton-inactive"} onClick={() => (props.urlDice !== "" ? RollDice(true) : null)}>Roll with Adv/Dis</div>
                <div className={"savedrollsbutton"} onClick={props.savedOnClick}>Saved Rolls</div>
            </div>
            <div className="roll-container">
                <div className="name">{props.urlName === "" ? "Unamed Roll:" : `${props.urlName}:`}</div>
                <div className="dice">{props.urlDice === "" ? <i>Your dice will appear here</i> : props.urlDice + props.urlMod}</div>
            </div>
        </div>
    )
})

export default URLButton;