import React from "react";
import track from '../../assets/images/track.jpg';
import track_me from '../../assets/images/track_me.jpg';

export default class extends React.Component {
    constructor(props) {
        super(props);

        // set initial state
        this.state = {isToggleOn: true};
    }

    render() {
        return (
            <div id="about" className="container-fluid text-center">
                <h1>About me</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <img src={track} alt='ski tracks' style={{width: '100%'}}/>
                        </div>
                        <div className="col-md-4 d-flex flex-column justify-content-between">
                            <p>My friends and I have the habit to keep a weekend off during the season. A week before
                                the
                                weekend, we would start searching the internet to find the best powder and book a
                                last-minute.</p>
                            <p>Finding the best combination of fresh powder and accommodation wasn't easy. This lead me
                                to
                                create this website.</p>
                            <p>I am certain that there are other powder hunters like me. Therefore, I made this
                                available to
                                everyone. If the best arrangements are snatched before our eyes, I might have to limit
                                it
                                though!</p>
                            <h5 className="p-5">This is me on the right!</h5>
                        </div>
                        <div className="col-md-4">
                            <img src={track_me} alt='me next to ski tracks' style={{width: '100%'}}/>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}