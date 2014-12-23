function addHighchartsGraphics(graphicName) { 
    var options;
    $.get('data/graficos/'+graphicName+'.tsv', function(data) {
        var separators = ['\n'];
        var lines = data.split(new RegExp(separators.join('|'), 'g'));

        var tipo = lines[0].split('\t');
        if (tipo[0].valueOf() == "tipo de grafico") {
            if (tipo[1].valueOf() == "columnas") {
                options={
                                    chart: {
                                        renderTo: '',
                                        type: 'column'
                                    },
                                    title: {
                                        text: ''
                                    },
                                    xAxis: {
                                        categories: [],
                                                    title: {
                                            text: ''
                                        }
                                    },
                                    yAxis: {
                                        title: {
                                            text: ''
                                        }
                                    },
                                    credits: {
                                        enabled: false
                                    },
                                    series: []
                                };
            }
            else if (tipo[1].valueOf() == "columnas apiladas") {
                options={
                                    chart: {
                                        renderTo: '',
                                        type: 'column'
                                    },
                                    title: {
                                        text: ''
                                    },
                                    xAxis: {
                                        categories: [],
                                                    title: {
                                            text: ''
                                        }
                                    },
                                    yAxis: {
                                        title: {
                                            text: ''
                                        }
                                    },
                                    credits: {
                                        enabled: false
                                    },
                                    plotOptions: {
                                        column: {
                                            stacking: 'normal',
                                            dataLabels: {
                                                enabled: true,
                                                color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                                                style: {
                                                    textShadow: '0 0 3px black, 0 0 3px black'
                                                }
                                            }
                                        }
                                    },
                                    series: []
                                };
            }
        }

        lines.splice(0, 1);

        options.chart.renderTo="highchartsContainer"+graphicName;

        $.each(lines, function(lineNo, line) {
            var items = line.split('\t');

            if (items[0].valueOf() == "titulo grafico") {
                options.title.text=items[1];
            }

            else if (items[0].valueOf() == "titulo eje x") {
                options.xAxis.title.text=items[1];
            }

            else if (items[0].valueOf() == "titulo eje y") {
                options.yAxis.title.text=items[1];
            }

            else if (items[0].valueOf() == "extras") {
                options.push(JSON.parse(items[1]));
            }

            // header line containes categories
            else if (items[0].valueOf() == "categorias") {
                $.each(items, function(itemNo, item) {
                    if (itemNo > 0) options.xAxis.categories.push(item);
                });
            }

            // the rest of the lines contain data with their name in the first position
            else {
                var series = { 
                    data: []
                };
                $.each(items, function(itemNo, item) {
                    if (itemNo == 0) {
                        series.name = item;
                    } else {
                        series.data.push(JSON.parse(item));

                    }
                });

                options.series.push(series);
            }

        });

        new Highcharts.Chart(options);
    });      		
}