import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Example extends Component {
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md">
                        <div className="card">
                            <div className="card-header">
                                Hello Ankita
                            </div>

                            <div className="card-body">
                                Im an example component
                                So what's up guys
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const examples = document.querySelectorAll('.example');
if(examples.length > 0) {
    examples.forEach((example) => {
        ReactDOM.render(<Example />, example)
    });
}
