import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { AppNavbar, NavbarItem } from "./components/zero/AppNavbar"
import { Index } from "./pages/Index"
import { About } from "./pages/About"
import * as jQuery from "jquery";

let navBarItemList = [
    { name: "Index", url: "/index" },
    { name: "About", url: "/about" },
    { name: "Test", url: "/test" }
];

let rightNavBarItemList = [
    // { name: "Link", url: "/" },
    // { name: "Link", url: "/" }
] as NavbarItem[];

class App extends React.Component<{}, {}>{

    constructor() {
        super();
        console.log("hello,world App");
    }

    render() {
        return (
            <div>
                <AppNavbar name="React-Bootstrap" itemList={navBarItemList} rightItemList={rightNavBarItemList} />
                {this.props.children}
            </div>
        )
    }
}

let template = (

    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Index} />
            <Route path="/index" component={Index} />
            <Route path="/about" component={About} />
        </Route>
    </Router>
);

ReactDOM.render(template, document.getElementById("context"));