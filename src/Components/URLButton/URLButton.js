import './URLButton.sass';

function URLButton(props) {
    function GetUrl(urlPrefix, urlName, urlDice, urlMod) {
        return urlPrefix + (urlName === "" ? "" : urlName + ":") + urlDice + urlMod;
    }

    return (
        <div>
            <div onClick={() => window.open(GetUrl(props.urlPrefix, props.urlName, props.urlDice, props.urlMod), "_self")}>Roll!</div>
            <div>{props.urlName === "" ? "Nothing" : props.urlName}</div>
            <div>{props.urlDice + props.urlMod}</div>
        </div>
    )
}

export default URLButton;