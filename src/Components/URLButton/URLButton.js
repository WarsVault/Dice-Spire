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

    function GetUrl(urlPrefix, urlName, urlDice, processedMod) {
        return urlPrefix + (urlName === "" ? "" : urlName + ":") + urlDice + ProcessMod(processedMod);
    }

    function GetAdvUrl(urlPrefix, urlName, urlDice, processedMod) {
        return urlPrefix + (urlName === "" ? "" : urlName + ":") + urlDice + ProcessMod(processedMod) + "/" + (urlName === "" ? "" : urlName + ":") + urlDice + ProcessMod(processedMod);
    }

    function RollDice(adv) {
        if (!adv) {
            window.open(GetUrl(props.urlPrefix, props.urlName.replace(" ", "%20"), props.urlDice, props.processedMod), "_self");
        } else {
            window.open(GetAdvUrl(props.urlPrefix, props.urlName.replace(" ", "%20"), props.urlDice, props.processedMod), "_self");
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