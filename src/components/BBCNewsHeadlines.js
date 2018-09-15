import React, { Component } from 'react';
import axios from "axios";

class BBCNewsHeadlines extends Component {

    constructor() {
        super();
        this.state = {
            headlines: [],
        };
    }
    
    componentDidMount() {

        fetch('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=1f3116ebf3e042fbae0d5247c48cd4a5')
        .then(results => {
            return results.json();
        }).then(data => {
            let returnedHeadlines = data.results.map((pic) => {
                return (
                    <div key={pic.results}>
                        {pic}
                    </div>
                )
        })
        this.setState({headlines: returnedHeadlines});
        console.log("state", this.state.headlines);
    })
    }

    render() {
        return (
            <div className="container2">
                <div className="container1">
                    {this.state.headlines}
                </div>
            </div>
        );
    }
}

export default BBCNewsHeadlines