import {defaults} from 'react-chartjs-2';

defaults.global.defaultFontColor = '#eeeeee';

export default {
    legend: {display: false},
    scales: {
        yAxes: [{
            ticks: {
                maxTicksLimit: 5
            },
            gridLines: {
                color: '#5f5f61'
            }
        }],
        xAxes: [{
            ticks: {},
            gridLines: {
                display: false,
                drawTicks: true
            }
        }]
    }
}