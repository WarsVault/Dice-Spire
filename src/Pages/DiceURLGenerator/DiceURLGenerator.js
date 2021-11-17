import { useEffect, useRef, useState } from "react";
import DiceButton from "../../Components/DiceButton/DiceButton.js";
import Header from "../../Components/Header/Header.js";
import ModButton from "../../Components/ModButton/ModButton.js";
import NameInput from "../../Components/NameInput/NameInput.js";
import NameList from "../../Components/NameList/NameList.js";
import SavedRolls from "../../Components/SavedRolls/SavedRolls.js";
import Title from "../../Components/Title/Title.js";
import URLButton from "../../Components/URLButton/URLButton.js";
import "./DiceURLGenerator.scss";

// Dice example: talespire://dice/Fireball:8d6+5-2
// DiceURL layout: "talespire://dice/" + "{name}:" + "{dice}" + "{modifier}"

function DiceURLGenerator() {
    const urlPrefix = "talespire://dice/";
    const [urlName, setUrlName] = useState("");
    const [urlDice, setUrlDice] = useState("");
    const [urlMod, setUrlMod] = useState("");
    const [processedMod, setProcessedMod] = useState(0);

    const [savedRollsWindow, setSavedRollsWindow] = useState(false);
    const [savedRolls, setSavedRolls] = useState(localStorage.getItem("savedRolls") ? JSON.parse(localStorage.getItem("savedRolls")) : []);
    const [rollingSaved, setRollingSaved] = useState(null);

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

    function CheckRoll() {
        return urlName !== "" && urlDice !== "" && savedRolls.length < 20;
    }

    function SaveRoll() {
        const newRoll = {
            "rollId": savedRolls.length,
            "rollName": urlName,
            "rollDice": urlDice,
            "rollMod": urlMod,
            "processedMod": processedMod
        }

        setSavedRolls(oldSavedRolls => [...oldSavedRolls, newRoll]);

        ResetRoll();
    }

    useEffect(() => {
        localStorage.setItem("savedRolls", JSON.stringify(savedRolls));
    }, [savedRolls]);

    const URLButtonRef = useRef();

    function RollSavedRoll(index, adv) {
        ResetRoll();
        setUrlName(savedRolls[index].rollName);
        setUrlDice(savedRolls[index].rollDice);
        setUrlMod(savedRolls[index].rollMod);
        setProcessedMod(savedRolls[index].processedMod);

        setRollingSaved(adv);
    }

    useEffect(() => {
        if (rollingSaved !== null) {
            URLButtonRef.current.RollDiceRef(rollingSaved);
            setRollingSaved(null);
        }
    }, [rollingSaved])

    function RemoveSavedRoll(index) {
        var newSavedRolls = [...savedRolls];
        newSavedRolls.splice(index, 1);
        newSavedRolls.forEach(currentRollButton => {
            if (currentRollButton.rollId > index) {
                currentRollButton.rollId -= 1;
            }
        });

        setSavedRolls(newSavedRolls);
    }

    return (
        <div className="main-container">
            <SavedRolls isActive={savedRollsWindow} canSave={CheckRoll()} onSaveRoll={SaveRoll} savedRollList={savedRolls} onClickRollButton={RollSavedRoll} onClickRemoveRoll={RemoveSavedRoll} />
            <div className="generator-container">
                <div className="generator-sub-container">
                    <Title title="Dice" />
                    <div className="dicebutton-container">
                        <DiceButton diceNumber="4" onClick={() => AddDice("4")} />
                        <DiceButton diceNumber="6" onClick={() => AddDice("6")} />
                        <DiceButton diceNumber="8" onClick={() => AddDice("8")} />
                        <DiceButton diceNumber="10" onClick={() => AddDice("10")} />
                        <DiceButton diceNumber="12" onClick={() => AddDice("12")} />
                        <DiceButton diceNumber="20" onClick={() => AddDice("20")} />
                        <DiceButton diceNumber="100" onClick={() => AddDice("100")} />
                    </div>
                </div>
                <div className="generator-sub-container">
                    <Header generator={true} />
                    <Title title="Roll Name" />
                    <div className="namelist-container">
                        <NameList onClick={name => AddName(name)} />
                        <NameInput onChange={event => AddName(event.target.value)} value={urlName} />
                    </div>
                </div>
                <div className="generator-sub-container">
                    <Title title="Modifiers" />
                    <div className="modbutton-container">
                        <ModButton modNumber="1" active={urlDice !== ""} onClickAdd={() => AddMod(true, 1)} onClickSub={() => AddMod(false, 1)} />
                        <ModButton modNumber="2" active={urlDice !== ""} onClickAdd={() => AddMod(true, 2)} onClickSub={() => AddMod(false, 2)} />
                        <ModButton modNumber="3" active={urlDice !== ""} onClickAdd={() => AddMod(true, 3)} onClickSub={() => AddMod(false, 3)} />
                        <ModButton modNumber="4" active={urlDice !== ""} onClickAdd={() => AddMod(true, 4)} onClickSub={() => AddMod(false, 4)} />
                        <ModButton modNumber="5" active={urlDice !== ""} onClickAdd={() => AddMod(true, 5)} onClickSub={() => AddMod(false, 5)} />
                        <ModButton modNumber="6" active={urlDice !== ""} onClickAdd={() => AddMod(true, 6)} onClickSub={() => AddMod(false, 6)} />
                        <ModButton modNumber="7" active={urlDice !== ""} onClickAdd={() => AddMod(true, 7)} onClickSub={() => AddMod(false, 7)} />
                        <ModButton modNumber="8" active={urlDice !== ""} onClickAdd={() => AddMod(true, 8)} onClickSub={() => AddMod(false, 8)} />
                        <ModButton modNumber="9" active={urlDice !== ""} onClickAdd={() => AddMod(true, 9)} onClickSub={() => AddMod(false, 9)} />
                        <ModButton modNumber="10" active={urlDice !== ""} onClickAdd={() => AddMod(true, 10)} onClickSub={() => AddMod(false, 10)} />
                    </div>
                </div>
            </div>
            <div className="url-container">
                <URLButton ref={URLButtonRef} onReset={ResetRoll} savedOnClick={() => setSavedRollsWindow(!savedRollsWindow)} urlPrefix={urlPrefix} urlName={urlName} urlDice={urlDice} urlMod={urlMod} processedMod={processedMod !== 0 ? processedMod : ""} />
            </div>
        </div>
    )
}

export default DiceURLGenerator;