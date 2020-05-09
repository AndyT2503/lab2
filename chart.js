var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['20/4', '21/4', '22/4', '23/4', '25/4', '26/4', '27/4'],
        datasets: [{
            label: 'USD',
            fill: false,
            data: [12, 19, 3, 5, 2, 3, 10],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
        }, {
            label: 'GBP',
            fill: false,
            data: [17, 15, 18, 6, 10, 8, 9],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor:'rgba(54, 162, 235, 1)',
            borderWidth: 1,
        }, {
            label: 'EUR',
            fill: false,
            data: [18, 16, 10, 11, 12, 8, 11],
            backgroundColor: 'rgba(255, 206, 86, 0.2)',
            borderColor: 'rgba(255, 206, 86, 1)',
            borderWidth: 1,
        }
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});