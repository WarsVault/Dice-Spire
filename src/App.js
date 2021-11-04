import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DiceURLGenerator from "./Pages/DiceURLGenerator/DiceURLGenerator";
import About from "./Pages/About/About";
import FrequentlyAskedQuestions from "./Pages/FrequentlyAskedQuestions/FrequentlyAskedQuestions";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <DiceURLGenerator />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/faq">
                    <FrequentlyAskedQuestions />
                </Route>
            </Switch>
        </Router>
    )
}

export default App;