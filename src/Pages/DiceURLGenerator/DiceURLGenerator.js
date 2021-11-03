import { useState } from "react";
import DiceButton from "../../Components/DiceButton/DiceButton.js";
import ModButton from "../../Components/ModButton/ModButton.js";
import NameInput from "../../Components/NameInput/NameInput.js";
import NameList from "../../Components/NameList/NameList.js";
import URLButton from "../../Components/URLButton/URLButton.js";
import "./DiceURLGenerator.scss";

// Dice example: talespire://dice/Fireball:8d6+5-2
// DiceURL layout: "talespire://dice/" + "{name}:" + "{dice}" + "{modifier}"

// Deactivate buttons when no roll set and add titles

function DiceURLGenerator() {
    const urlPrefix = "talespire://dice/";
    const [urlName, setUrlName] = useState("");
    const [urlDice, setUrlDice] = useState("");
    const [urlMod, setUrlMod] = useState("");
    const [processedMod, setProcessedMod] = useState(0);

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

    function AddMod(addition, diceMod) {
        setProcessedMod(processedMod + (addition ? +diceMod : -diceMod));
        setUrlMod(urlMod + (addition ? "+" : "-") + diceMod);
    }

    function ResetRoll() {
        setUrlName("");
        setUrlDice("");
        setUrlMod("");
        setProcessedMod(0);
    }

    return (
        <div className="main-container">
            <div className="generator-container">
                <div className="dicebutton-container">
                    <DiceButton diceNumber="4" onClick={() => AddDice("4")} />
                    <DiceButton diceNumber="6" onClick={() => AddDice("6")} />
                    <DiceButton diceNumber="8" onClick={() => AddDice("8")} />
                    <DiceButton diceNumber="10" onClick={() => AddDice("10")} />
                    <DiceButton diceNumber="12" onClick={() => AddDice("12")} />
                    <DiceButton diceNumber="20" onClick={() => AddDice("20")} />
                    <DiceButton diceNumber="100" onClick={() => AddDice("100")} />
                </div>
                <div className="namelist-container">
                    <NameList onClick={name => AddName(name)} />
                    <NameInput onChange={event => AddName(event.target.value)} value={urlName} />
                </div>
                <div className="modbutton-container">
                    <ModButton modNumber="1" onClickAdd={() => AddMod(true, 1)} onClickSub={() => AddMod(false, 1)} />
                    <ModButton modNumber="2" onClickAdd={() => AddMod(true, 2)} onClickSub={() => AddMod(false, 2)} />
                    <ModButton modNumber="3" onClickAdd={() => AddMod(true, 3)} onClickSub={() => AddMod(false, 3)} />
                    <ModButton modNumber="4" onClickAdd={() => AddMod(true, 4)} onClickSub={() => AddMod(false, 4)} />
                    <ModButton modNumber="5" onClickAdd={() => AddMod(true, 5)} onClickSub={() => AddMod(false, 5)} />
                    <ModButton modNumber="6" onClickAdd={() => AddMod(true, 6)} onClickSub={() => AddMod(false, 6)} />
                    <ModButton modNumber="7" onClickAdd={() => AddMod(true, 7)} onClickSub={() => AddMod(false, 7)} />
                    <ModButton modNumber="8" onClickAdd={() => AddMod(true, 8)} onClickSub={() => AddMod(false, 8)} />
                    <ModButton modNumber="9" onClickAdd={() => AddMod(true, 9)} onClickSub={() => AddMod(false, 9)} />
                </div>
            </div>
            <div className="url-container">
                <URLButton onReset={ResetRoll} urlPrefix={urlPrefix} urlName={urlName} urlDice={urlDice} urlMod={urlMod} processedMod={processedMod !== 0 ? processedMod : ""} />
            </div>
        </div>
    )
}

export default DiceURLGenerator;