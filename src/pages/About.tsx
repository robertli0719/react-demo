import * as React from "react";
import * as ReactDOM from "react-dom";
import { hashHistory } from 'react-router';
import { connect } from "react-redux"

interface Prop {
    val: number
}

export class About extends React.Component<Prop, {}>{

    constructor() {
        super();
        console.log("hello, world~! About");
    }

    render() {
        let num = this.props.val;
        return (
            <div className="container">
                <h1>About us</h1>
                <p>{num}</p>
            </div>
        );
    }
}
