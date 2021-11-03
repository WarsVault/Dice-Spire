import "./NameList.scss";
import SampleNames from "../../Data/sample-names.json";

function NameList(props) {
    function RenderSampleNames() {
        var sampleNamesArray = [];
        for (let i = 0; i < SampleNames.length; i++) {
            const value = SampleNames[i];
            var tempSampleNamesArray = [];
            for (let j = 0; j < value.length; j++) {
                const subValue = value[j];
                if (j === 0) {
                    tempSampleNamesArray.push(
                        <div className="title" key={`SampleTitle${j}`}>
                            {subValue}
                        </div>
                    )
                } else {
                    tempSampleNamesArray.push(
                        <div className="name" onClick={() => props.onClick(subValue)} key={`SampleName${j}`}>
                            {subValue}
                        </div>
                    )
                }
            }
            sampleNamesArray.push(
                <div className="list" key={`SampleNameList${i}`}>
                    {tempSampleNamesArray}
                </div>
            );
        }
        return sampleNamesArray;
    }

    return (
        <div className="list-container">
            {RenderSampleNames()}
        </div>
    )
}

export default NameList;