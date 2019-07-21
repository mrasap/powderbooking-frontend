import React from "react";
import './style.css';
import ski1 from '../../assets/images/ski1.jpg';
import lodge1 from '../../assets/images/lodge1.jpg';
import mountain2 from '../../assets/images/mountain2.jpg';

export default class Explanation extends React.Component {
    constructor(props) {
        super(props);

        // set initial state
        this.state = {isToggleOn: true};
    }

    render() {
        return (
            <div id="explanation" className="container-fluid bg-secondary text-center">
                <h1>It's simple, in three easy steps!</h1>

                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="thumbnail">
                                <h3><b>Step one</b></h3>
                                <img src={ski1} alt='fancy skier' style={{width: '100%'}}/>
                                <div className="caption">
                                    <h3>Locate fresh powder</h3>
                                    <p>Select the best resort and weather forecast</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="thumbnail">
                                <h3><b>Step two</b></h3>
                                <img src={lodge1} alt='cheesy lodge' style={{width: '100%'}}/>
                                <div className="caption">
                                    <h3>Get the best offers</h3>
                                    <p>Book the cheapest last-minutes at your resort</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="thumbnail">
                                <h3><b>Step three</b></h3>
                                <img src={mountain2} alt='snowy mountain' style={{width: '100%'}}/>
                                <div className="caption">
                                    <h3>Enjoy!</h3>
                                    <p>Be well prepared - know the risk of avalanches</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}