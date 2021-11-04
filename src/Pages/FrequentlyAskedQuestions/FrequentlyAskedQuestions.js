import "./FrequentlyAskedQuestions.scss";
import Header from "../../Components/Header/Header";
import FaqData from "../../Data//questions.json";

function FrequentlyAskedQuestions() {
    function GenerateElements() {
        var questionArray = [];

        FaqData.questionsAndAnswers.forEach(item => {
            questionArray.push(
                <div className="faq-item">
                    <div className="faq-question">
                        Q. {item.question}
                    </div>
                    <div className="faq-answer">
                        A. {item.answer}
                    </div>
                </div>
            );
        })

        return questionArray;
    }

    return (
        <div className="faqpage-container">
            <Header generator={false} />
            <div className="faqpagecontent">{GenerateElements()}</div>
        </div>
    )
}

export default FrequentlyAskedQuestions;