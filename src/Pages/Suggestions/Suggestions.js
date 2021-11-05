import "./Suggestions.scss";
import Header from "../../Components/Header/Header";

function Suggestions() {
    return (
        <div className="suggestions-container">
            <Header generator={false} />
            <form name="Suggestions" netlify>
                <p>
                    <label>Name</label>
                    <input type="text" name="name" required placeholder="Your name goes here" />
                </p>
                <br/>

                <p>
                    <label>Email</label>
                    <input type="email" name="email" required placeholder="Your email goes here" />
                </p>
                <br/>

                <p>
                    <label>Topic</label>
                    <select name="topic">
                        <option value="general-suggestion">General suggestion</option>
                        <option value="namelist-suggestion">Name list suggestion</option>
                        <option value="other">Other</option>
                    </select>
                </p>
                <br/>

                <p>
                    <label>Suggestion</label>
                    <textarea name="message" required></textarea>
                </p>
                <br/>

                <p>
                    <button type="submit">Submit</button>
                </p>
            </form>
        </div>
    )
}

export default Suggestions;