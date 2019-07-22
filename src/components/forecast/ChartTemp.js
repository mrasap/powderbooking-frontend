import React from 'react';
import {Line} from 'react-chartjs-2';
import chartOptions from './chartOptions';


export default class extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tempMax: props.tempMax,
            tempMin: props.tempMin,
            labels: props.labels
        };
    }

    render() {
        // source: https://github.com/jerairrest/react-chartjs-2#getting-context-for-data-generation
        const data = (canvas) => {
            const ctx = canvas.getContext("2d");
            let gradientMax = ctx.createLinearGradient(0, 200, 0, 0);
            gradientMax.addColorStop(0, 'rgba(255,38,26,1)');
            gradientMax.addColorStop(0.1, 'rgba(255,38,26,0.5)');
            gradientMax.addColorStop(1, 'rgba(255,38,26,0)');

            let gradientMin = ctx.createLinearGradient(0, 0, 0, 300);
            gradientMin.addColorStop(0, 'rgba(0,123,255,1)');
            gradientMin.addColorStop(0.1, 'rgba(0,123,255,0.5)');
            gradientMin.addColorStop(1, 'rgba(0,123,255,0)');

            return {
                labels: this.state.labels,
                datasets: [
                    {
                        label: 'Freezing point',
                        data: [0, 0, 0, 0, 0, 0, 0],
                        borderColor: '#eeeeee',
                        borderWidth: 2,
                        borderDash: [5, 5],
                        pointRadius: 0
                    },
                    {
                        label: 'Maximum temperature (C)',
                        data: this.state.tempMax,
                        fill: 'end',
                        backgroundColor: gradientMax,
                        borderColor: ['#ff261a'],
                        borderWidth: 4,
                        pointRadius: 0,
                        pointHitRadius: 10
                    },
                    {
                        label: 'Minimum temperature (C)',
                        data: this.state.tempMin,
                        fill: 'start',
                        backgroundColor: gradientMin,
                        borderColor: ['#007BFF'],
                        borderWidth: 4,
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