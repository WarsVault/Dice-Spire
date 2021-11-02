import { useState } from "react";
import DiceButton from "../../Components/DiceButton/DiceButton.js";
import ModButton from "../../Components/ModButton/ModButton.js";
import NameInput from "../../Components/NameInput/NameInput.js";
import URLButton from "../../Components/URLButton/URLButton.js";
import "./DiceURL-Maker.sass";

// Dice example: talespire://dice/Fireball:8d6+5-2
// DiceURL layout: "talespire://dice/" + "{name}:" + "{dice}" + "{modifier}"

function DiceURLMaker() {
    const urlPrefix = "talespire://dice/";
    const [urlName, setUrlName] = useState("");
    const [urlDice, setUrlDice] = useState("");
    const [urlMod, setUrlMod] = useState("");

    function AddDice(diceNumber) {
        var newUrlDice = urlDice;
        const urlDiceSpaced = urlDice.split("+").join(" +") + " ";
        if (urlDice === "") {
            newUrlDice = urlDiceSpaced + `1D${diceNumber} `;
        } else if (!urlDiceSpaced.includes(`D${diceNumber} `)) {
            newUrlDice = urlDiceSpaced + `+1D${diceNumber} `;
        } else {
            const slicedurlDiceSpaced = urlDiceSpaced.slice(urlDiceSpaced.search(`D${diceNumber} `) - 1, urlDiceSpaced.search(`D${diceNumber} `) + `D${diceNumber} `.length);
            const spliturlDiceSpaced = urlDiceSpaced.split(slicedurlDiceSpaced);
            const addedNumberDice = Number(slicedurlDiceSpaced.slice(0, 1)) + 1;
            newUrlDice = spliturlDiceSpaced[0] + addedNumberDice + slicedurlDiceSpaced.slice(1, slicedurlDiceSpaced.length) + spliturlDiceSpaced[1];
        }
        setUrlDice(newUrlDice.split(" ").join(""));
    }

    function AddName(diceName) {
        setUrlName(diceName);
    }

    function AddMod(diceMod) {
        setUrlMod(urlMod + diceMod);
    }

    return (
        <div>
            <NameInput onChange={event => AddName(event.target.value)} />

            <DiceButton diceNumber="4" onClick={() => AddDice("4")} />
            <DiceButton diceNumber="6" onClick={() => AddDice("6")} />
            <DiceButton diceNumber="8" onClick={() => AddDice("8")} />
            <DiceButton diceNumber="10" onClick={() => AddDice("10")} />
            <DiceButton diceNumber="12" onClick={() => AddDice("12")} />
            <DiceButton diceNumber="20" onClick={() => AddDice("20")} />
            <DiceButton diceNumber="100" onClick={() => AddDice("100")} />

            <ModButton modNumber="+1" onClick={() => AddMod("+1")} />
            <ModButton modNumber="+2" onClick={() => AddMod("+2")} />
            <ModButton modNumber="+3" onClick={() => AddMod("+3")} />
            <ModButton modNumber="+4" onClick={() => AddMod("+4")} />
            <ModButton modNumber="+5" onClick={() => AddMod("+5")} />
            <ModButton modNumber="+6" onClick={() => AddMod("+6")} />
            <ModButton modNumber="+7" onClick={() => AddMod("+7")} />
            <ModButton modNumber="+8" onClick={() => AddMod("+8")} />
            <ModButton modNumber="+9" onClick={() => AddMod("+9")} />
            <ModButton modNumber="+10" onClick={() => AddMod("+10")} />

            <URLButton urlPrefix={urlPrefix} urlName={urlName} urlDice={urlDice} urlMod={urlMod} />
            <a href={urlPrefix + (urlName === "" ? "" : urlName + ":") + urlDice + urlMod}>Test</a>
        </div>
    )
}

export default DiceURLMaker;