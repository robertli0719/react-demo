import * as React from "react";
import * as ReactDOM from "react-dom";
import { Button, ButtonToolbar } from "react-bootstrap";

interface IndexStateModel {
    num: number
    name: string
}

export class Index extends React.Component<{}, IndexStateModel>{

    constructor() {
        super();
        this.state = { name: "hello", num: 0 };
    }

    render() {
        this.state;
        console.log("render");
        return (
            <div className="container">
                <h1>Index</h1>

            </div>
        );
    }
}
