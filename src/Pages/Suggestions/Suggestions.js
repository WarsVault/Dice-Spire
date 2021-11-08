import "./Suggestions.scss";
import Header from "../../Components/Header/Header";

function Suggestions() {
    return (
        <div className="suggestions-container">
            <Header generator={false} />
            <form name="Suggestions" method="post">
                <input type="hidden" name="form-name" value="Suggestions" />

                <p>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="user-name" id="name" required placeholder="Your name goes here" />
                </p>
                <br />

                <p>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="user-email" id="email" required placeholder="Your email goes here" />
                </p>
                <br />

                <p>
                    <label htmlFor="topic">Topic</label>
                    <select name="user-topic" id="topic">
                        <option value="general-suggestion">General suggestion</option>
                        <option value="namelist-suggestion">Name list suggestion</option>
                        <option value="other">Other</option>
                    </select>
                </p>
                <br />

                <p>
                    <label htmlFor="message">Suggestion</label>
                    <textarea name="user-message" id="message" required></textarea>
                </p>
                <br />

                <p>
                    <button type="submit">Submit</button>
                </p>
            </form>
        </div>
    )
}

export default Suggestions;