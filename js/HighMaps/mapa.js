$(function () {
    // Preparamos los datos a mostrar en el mapa
    // 'hc-key' es el 'id' de cada provincia en el fichero geojson
    var data = [
        {
            'hc-key': 'es-m',
            value: 70,
            idtogo:'#portfolioModalMadrid'
        },
        {
            'hc-key': 'es-sg',
            value: 35,
            idtogo:'#portfolioModalSegovia'
        },
        {
            'hc-key': 'es-pm',
            value: 0,
            idtogo:null
        }
    ];


    // Creamos el mapa
    $('#container').highcharts('Map', {

        title: {
            text: null
        },

        subtitle: {
            text: null
        },

        // Zoom para el mapa
        mapNavigation: {
            enabled: false,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },
        
        // Eliminamos los créditos de highmaps
        credits: {
            enabled: false
        },

        // Colores aplicados en el mapa
        colorAxis: {
                // Rango mínimo y máximo
                min: 0,
                max: 100,         
                // Colores aplicados al rango de valores anterior
                minColor: '#707070',
                maxColor: '#0058ff'
        },
        
        //deshabilita el popup
        tooltip: {
            enabled: false
        },
        
        plotOptions: {
            series: {
                point: {
                    events: {
                        click: function () {
                            $(this.options.idtogo).modal('show');
                        }
                    }
                },
                states: {
                    hover: {
                        color: '#fed136'
                    }
                },
                //Color de las provincias sin datos
                nullColor: '#777',
                //ancho del borde entre provincias
                borderWidth: 1, 
                //color del borde entre provincias
                borderColor: 'white',
                //color de la serie
                color: '#fed136',
            }
        },

        series: [
            {
                // Datos a mostrar en el mapa
                data: data,
                // Cargamos el fichero geojson que se encarga de pintar el mapa
                mapData: Highcharts.maps['countries/es/es-all'],
                joinBy: 'hc-key',
                name: 'Porcentaje',
                dataLabels: {
                    enabled: false, //poner el nombre de las provincias o no
                    format: '{point.name}'
                }
            }, 
            {
                // Separador para las Islas Canarias
                name: 'Separators',
                type: 'mapline',
                data: Highcharts.geojson(Highcharts.maps['countries/es/es-all'], 'mapline'),
                color: '#FDBB30',
                showInLegend: false,
                enableMouseTracking: false
        }]
    },
    function(chart){
        $.each(chart.series[0].data,function(i,point){
            if(point.options.value>0){ 
                point.graphic.attr({
                    cursor: 'pointer'
                });
            }
        });
    });
});