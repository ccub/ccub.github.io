$(function () {
    //http://blog.garciaechegaray.com/2014/07/02/probando-highcharts-4-highmaps.html
    
    // Preparamos los datos a mostrar en el mapa
    // 'hc-key' es el 'id' de cada provincia en el fichero geojson
    var data = [{
        'hc-key': 'es-pm',
        value: 0
    }, {
        'hc-key': 'es-7253',
        value: 1
    }, {
        'hc-key': 'es-ce',
        value: 2
    }, {
        'hc-key': 'es-7254',
        value: 3
    }, {
        'hc-key': 'es-cb',
        value: 4
    }, {
        'hc-key': 'es-na',
        value: 5
    }, {
        'hc-key': 'es-1306',
        value: 6
    }, {
        'hc-key': 'es-393',
        value: 15
    }, {
        'hc-key': 'es-ex',
        value: 25
    }, {
        'hc-key': 'es-7267',
        value: 50
    }, {
        'hc-key': 'es-m',
        value: 60
    }];


    // Creamos el mapa
    $('#container').highcharts('Map', {

        title: {
            text: 'Visitas por provincia'
        },

        subtitle: {
            text: 'Ejemplo de implementación'
        },

        // Zoom para el mapa
        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },

        // Colores aplicados en el mapa
        colorAxis: {
                // Rango mínimo y máximo de visitas
                min: 0,
                max: 100,         
                // Colores aplicados al rango de valores anterior
                minColor: '#eeeeee',
                maxColor: '#FDBB30'
        },

        series: [
            {
                // Datos a mostrar en el mapa
                data: data,
                // Cargamos el fichero geojson que se encarga de pintar el mapa
                mapData: Highcharts.maps['countries/es/es-all'],
                joinBy: 'hc-key',
                name: 'Visitas',
                states: {
                    hover: {
                        color: '#ccc'
                    }
                },
                dataLabels: {
                    enabled: true,
                    format: '{point.name}'
                }
            }, 
            {
                // Separador para las Islas Canarias
                name: 'Separators',
                type: 'mapline',
                data: Highcharts.geojson(Highcharts.maps['countries/es/es-all'], 'mapline'),
                color: '#FDBB30',
                showInLegend: true,
                enableMouseTracking: false
        }]
    });
});