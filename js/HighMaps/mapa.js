$(function () {
    // Preparamos los datos a mostrar en el mapa
    // 'hc-key' es el 'id' de cada provincia en el fichero geojson
    
    //en textoPopup para poner un intro: </b><br><b>
    
    //15 parques
    //10 regiones
    var data = [
        //Castilla la Mancha
        {
            'hc-key': 'es-to',
            value: 0,
            textoPopup:'Cabañeros<br>Tablas de Daimiel'
        },
        {
            'hc-key': 'es-gu',
            value: 0,
            textoPopup:'Cabañeros<br>Tablas de Daimiel'
        },
        {
            'hc-key': 'es-ab',
            value: 0,
            textoPopup:'Cabañeros<br>Tablas de Daimiel'
        },
        {
            'hc-key': 'es-cu',
            value: 0,
            textoPopup:'Cabañeros<br>Tablas de Daimiel'
        },
        {
            'hc-key': 'es-cr',
            value: 0,
            textoPopup:'Cabañeros<br>Tablas de Daimiel'
        },
            //Cataluna
            {
                'hc-key': 'es-l',
                value: 30,
                textoPopup:'Aigüestortes i Estany de Sant Maurici'
            },
            {
                'hc-key': 'es-t',
                value: 30,
                textoPopup:'Aigüestortes i Estany de Sant Maurici'
            },
            {
                'hc-key': 'es-gi',
                value: 30,
                textoPopup:'Aigüestortes i Estany de Sant Maurici'
            },
            {
                'hc-key': 'es-b',
                value: 30,
                textoPopup:'Aigüestortes i Estany de Sant Maurici'
            },
        {
            'hc-key': 'es-gc',
            value: 40,
            textoPopup:'Caldera de Taburiente<br>Timanfaya'
        },
                //Andalucía
                {
                    'hc-key': 'es-se',
                    value: 50,
                    textoPopup:'Doñana<br>Sierra Nevada'
                },
                {
                    'hc-key': 'es-co',
                    value: 50,
                    textoPopup:'Doñana<br>Sierra Nevada'
                },
                {
                    'hc-key': 'es-ma',
                    value: 50,
                    textoPopup:'Doñana<br>Sierra Nevada'
                },
                {
                    'hc-key': 'es-h',
                    value: 50,
                    idtogo:'#desplegableCCAAAndalucia',
                    textoPopup:'Doñana<br>Sierra Nevada'
                },
                {
                    'hc-key': 'es-al',
                    value: 50,
                    textoPopup:'Doñana<br>Sierra Nevada'
                },
                {
                    'hc-key': 'es-ca',
                    value: 50,
                    textoPopup:'Doñana<br>Sierra Nevada'
                },
                {
                    'hc-key': 'es-j',
                    value: 50,
                    textoPopup:'Doñana<br>Sierra Nevada'
                },
                {
                    'hc-key': 'es-gr',
                    value: 50,
                    textoPopup:'Doñana<br>Sierra Nevada'
                },
        {
            'hc-key': 'es-tf',
            value: 60,
            textoPopup:'Garajonay<br>Teide'
        },
                //Galicia
                {
                    'hc-key': 'es-or',
                    value: 70,
                    textoPopup:'Islas Atlánticas de Galicia'
                },
                {
                    'hc-key': 'es-c',
                    value: 70,
                    textoPopup:'Islas Atlánticas de Galicia'
                },
                {
                    'hc-key': 'es-po',
                    value: 70,
                    textoPopup:'Islas Atlánticas de Galicia'
                },
                {
                    'hc-key': 'es-lu',
                    value: 70,
                    textoPopup:'Islas Atlánticas de Galicia'
                },
        //Extremadura
        {
            'hc-key': 'es-cc',
            value: 80,
            textoPopup:'Monfragüe'
        },
        {
            'hc-key': 'es-ba',
            value: 80,
            textoPopup:'Monfragüe'
        },
                //Aragon
                {
                    'hc-key': 'es-hu',
                    value: 90,
                    textoPopup:'Ordesa y Monte Perdido'
                },
                {
                    'hc-key': 'es-te',
                    value: 90,
                    textoPopup:'Ordesa y Monte Perdido'
                },
                {
                    'hc-key': 'es-z',
                    value: 90,
                    textoPopup:'Ordesa y Monte Perdido'
                },
        //Cantabria y Asturias
        {
            'hc-key': 'es-s',
            value: 100,
            textoPopup:'Picos de Europa'
        },
        {
            'hc-key': 'es-o',
            value: 100,
            textoPopup:'Picos de Europa'
        },
        {
            'hc-key': 'es-pm',
            value: 100,
            textoPopup:'Archipiélago de Cabrera'
        }
    ];

    // Creamos el mapa
    $('#containerMapa').highcharts('Map', {

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
                minColor: '#fed136',
                maxColor: '#fc0000'
        },
        
        //deshabilita el popup
        tooltip: {
            enabled: true,
            formatter: function() {
                return '<b>' + this.point.properties["woe-name"] + '</b><br>' + this.point.textoPopup;
            }
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
                point.options.idtogo = '#desplegableCCAA' + point.properties["woe-name"].replace(/ /g, '');
            }
        });
    });
});