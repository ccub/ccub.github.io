$(function () { 
    $('#containerMadrid').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Fruit Consumption'
        },
        xAxis: {
            categories: ['Apples', 'Bananas', 'Oranges']
        },
        yAxis: {
            title: {
                text: 'Fruit eaten'
            }
        },
        series: [{
            name: 'Jane',
            color: '#fed136',
            data:[1, 0, 4]
        }, {
            name: 'John',
            color: '#777',
            data: [5, 7, 3]
        }]
    });
});