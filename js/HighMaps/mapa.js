$(function () {
    // Preparamos los datos a mostrar en el mapa
    // 'hc-key' es el 'id' de cada provincia en el fichero geojson
    
    //en textoPopup para poner un intro: </b><br><b>
    
    //15 parques
    //10 regiones
    var data = [
        {
            'hc-key': 'es-m',
            value: 10,
            idtogo:'#desplegableModalMadrid',
            textoPopup:'Parque de Guadarrama </b><br><b> Parque de tatata'
        },
        {
            'hc-key': 'es-cr',
            value: 20,
            idtogo:'#desplegableModalCiudadReal',
            textoPopup:'Cabañeros</b><br><b>Tablas de Daimiel'
        },
            //Cataluna
            {
                'hc-key': 'es-l',
                value: 30,
                idtogo:'#desplegableModalCataluna',
                textoPopup:'Aigüestortes i Estany de Sant Maurici'
            },
            {
                'hc-key': 'es-t',
                value: 30,
                idtogo:'#desplegableModalCataluna',
                textoPopup:'Aigüestortes i Estany de Sant Maurici'
            },
            {
                'hc-key': 'es-gi',
                value: 30,
                idtogo:'#desplegableModalCataluna',
                textoPopup:'Aigüestortes i Estany de Sant Maurici'
            },
            {
                'hc-key': 'es-b',
                value: 30,
                idtogo:'#desplegableModalCataluna',
                textoPopup:'Aigüestortes i Estany de Sant Maurici'
            },
        {
            'hc-key': 'es-gc',
            value: 40,
            idtogo:'#desplegableModalLasPalmas',
            textoPopup:'Caldera de Taburiente</b><br><b>Timanfaya'
        },
                //Andalucía
                {
                    'hc-key': 'es-se',
                    value: 50,
                    idtogo:'#desplegableModalAndalucia',
                    textoPopup:'Doñana</b><br><b>Sierra Nevada'
                },
                {
                    'hc-key': 'es-co',
                    value: 50,
                    idtogo:'#desplegableModalAndalucia',
                    textoPopup:'Doñana</b><br><b>Sierra Nevada'
                },
                {
                    'hc-key': 'es-ma',
                    value: 50,
                    idtogo:'#desplegableModalAndalucia',
                    textoPopup:'Doñana</b><br><b>Sierra Nevada'
                },
                {
                    'hc-key': 'es-h',
                    value: 50,
                    idtogo:'#desplegableModalAndalucia',
                    textoPopup:'Doñana</b><br><b>Sierra Nevada'
                },
                {
                    'hc-key': 'es-al',
                    value: 50,
                    idtogo:'#desplegableModalAndalucia',
                    textoPopup:'Doñana</b><br><b>Sierra Nevada'
                },
                {
                    'hc-key': 'es-ca',
                    value: 50,
                    idtogo:'#desplegableModalAndalucia',
                    textoPopup:'Doñana</b><br><b>Sierra Nevada'
                },
                {
                    'hc-key': 'es-j',
                    value: 50,
                    idtogo:'#desplegableModalAndalucia',
                    textoPopup:'Doñana</b><br><b>Sierra Nevada'
                },
                {
                    'hc-key': 'es-gr',
                    value: 50,
                    idtogo:'#desplegableModalAndalucia',
                    textoPopup:'Doñana</b><br><b>Sierra Nevada'
                },
        {
            'hc-key': 'es-tf',
            value: 60,
            idtogo:'#desplegableModalTenerife',
            textoPopup:'Garajonay</b><br><b>Teide'
        },
                //Galicia
                {
                    'hc-key': 'es-or',
                    value: 70,
                    idtogo:'#desplegableModalGalicia',
                    textoPopup:'Islas Atlánticas de Galicia'
                },
                {
                    'hc-key': 'es-c',
                    value: 70,
                    idtogo:'#desplegableModalGalicia',
                    textoPopup:'Islas Atlánticas de Galicia'
                },
                {
                    'hc-key': 'es-po',
                    value: 70,
                    idtogo:'#desplegableModalGalicia',
                    textoPopup:'Islas Atlánticas de Galicia'
                },
                {
                    'hc-key': 'es-lu',
                    value: 70,
                    idtogo:'#desplegableModalGalicia',
                    textoPopup:'Islas Atlánticas de Galicia'
                },
        //Extremadura
        {
            'hc-key': 'es-cc',
            value: 80,
            idtogo:'#desplegableModalExtremadura',
            textoPopup:'Monfragüe'
        },
        {
            'hc-key': 'es-ba',
            value: 80,
            idtogo:'#desplegableModalExtremadura',
            textoPopup:'Monfragüe'
        },
                //Aragon
                {
                    'hc-key': 'es-hu',
                    value: 90,
                    idtogo:'#desplegableModalAragon',
                    textoPopup:'Ordesa y Monte Perdido'
                },
                {
                    'hc-key': 'es-te',
                    value: 90,
                    idtogo:'#desplegableModalAragon',
                    textoPopup:'Ordesa y Monte Perdido'
                },
                {
                    'hc-key': 'es-z',
                    value: 90,
                    idtogo:'#desplegableModalAragon',
                    textoPopup:'Ordesa y Monte Perdido'
                },
        //Cantabria y Asturias
        {
            'hc-key': 'es-s',
            value: 100,
            idtogo:'#desplegableModalCantabriaYAsturias',
            textoPopup:'Picos de Europa'
        },
        {
            'hc-key': 'es-o',
            value: 100,
            idtogo:'#desplegableModalCantabriaYAsturias',
            textoPopup:'Picos de Europa'
        },
        {
            'hc-key': 'es-pm',
            value: 100,
            idtogo:'#desplegableModalBaleares',
            textoPopup:'Archipiélago de Cabrera'
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
                minColor: '#679373',
                maxColor: '#007b17'
        },
        
        //deshabilita el popup
        tooltip: {
            enabled: true,
            formatter: function() {
                return '<b>' + this.point.textoPopup + '</b>';
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
            }
        });
    });
});