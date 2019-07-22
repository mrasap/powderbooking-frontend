import React from 'react';
import {Line} from 'react-chartjs-2';
import chartOptions from './chartOptions';


export default class extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            snow: props.snow,
            rain: props.rain,
            labels: props.labels
        };
    }

    render() {
        // source: https://github.com/jerairrest/react-chartjs-2#getting-context-for-data-generation
        const data = (canvas) => {
            const ctx = canvas.getContext("2d");
            let gradientSnow = ctx.createLinearGradient(0, 0, 0, 200);
            gradientSnow.addColorStop(0, 'rgba(238,238,238,1)');
            gradientSnow.addColorStop(0.25, 'rgba(238,238,238,0.5)');
            gradientSnow.addColorStop(1, 'rgba(238,238,238,0)');

            let gradientRain = ctx.createLinearGradient(0, 0, 0, 200);
            gradientRain.addColorStop(0, 'rgba(0,123,255,0.5)');
            gradientRain.addColorStop(0.1, 'rgba(0,123,255,0.33)');
            gradientRain.addColorStop(1, 'rgba(0,123,255,0)');

            return {
                labels: this.state.labels,
                datasets: [
                    {
                        label: 'Zero line',
                        data: [0, 0, 0, 0, 0, 0, 0],
                        borderColor: '#eeeeee',
                        borderWidth: 2,
                        borderDash: [5, 5],
                        pointRadius: 0
                    },
                    {
                        label: 'Expected snow fall (in mm)',
                        data: this.state.snow,
                        fill: 'origin',
                        backgroundColor: gradientSnow,
                        // backgroundColor: ['#ffffff'],
                        borderColor: ['#ffffff'],
                        borderWidth: 4,
                        pointRadius: 0,
                        pointHitRadius: 10
                    },
                    {
                        label: 'Expected rain fall (in mm)',
                        data: this.state.rain,
                        fill: 'origin',
                        backgroundColor: gradientRain,
                        borderColor: ['#007BFF'],
                        borderWidth: 2,
                        pointRadius: 0,
                        pointHitRadius: 10
                    }
                ]
            }
        };

        return (
            <Line data={data} width={400} height={100} options={chartOptions}/>
        );
    }
};