import './URLButton.scss';

function URLButton(props) {
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
                <div className="resetbutton" onClick={() => props.onReset()}>Reset Roll</div>
                <div className="urlbutton" onClick={() => RollDice(false)}>Roll on TaleSpire!</div>
                <div className="advbutton" onClick={() => RollDice(true)}>Roll with Adv/Dis</div>
            </div>
            <div className="roll-container">
                <div className="name">{props.urlName === "" ? "Unamed Roll:" : `${props.urlName}:`}</div>
                <div className="dice">{props.urlDice === "" ? <i>Your dice will appear here</i> : props.urlDice + props.urlMod}</div>
            </div>
        </div>
    )
}

export default URLButton;