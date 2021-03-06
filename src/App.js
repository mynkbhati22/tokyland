import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/pages/About";
// import Contact from "./components/pages/Contact";
import Faq from "./components/pages/Faq";
import Home from "./components/pages/Home";
import Roadmap from "./components/pages/Roadmap";
// import Services from "./components/pages/Services";
import Tokenomics from "./components/pages/Tokenomics";
import Whitepaper from "./components/Whitepaper";

function App() {
  return (
    <div className="App">
      <div className="golbalContainer">
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/about-us" component={About}></Route>
            {/* <Route path='/services' component={Services}></Route> */}
            <Route path="/about-us" component={Tokenomics}></Route>
            <Route path="/whitepaper" component={Whitepaper}></Route>
            <Route path="/roadmap" component={Roadmap}></Route>
            <Route path="/faq" component={Faq}></Route>
            {/* <Route path='/contact' component={Contact}></Route> */}
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
