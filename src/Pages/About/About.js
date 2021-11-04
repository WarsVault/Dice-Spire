import "./About.scss";
import Header from "../../Components/Header/Header";
import AboutData from "../../Data/about.json";

function About() {
    function GenerateElements() {
        var aboutArray = [];
        AboutData.about.forEach(line => {
            aboutArray.push(
                <div dangerouslySetInnerHTML={{__html: line}}/>
            );
            aboutArray.push(
                <br/>
            )
        })

        return aboutArray;
    }

    return (
        <div className="aboutpage-container">
            <Header generator={false} />
            <div className="aboutcontent">{GenerateElements()}</div>
        </div>
    )
}

export default About;