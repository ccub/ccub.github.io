$(document).ready(function() {
			
			var optionsMaster = {
				chart: {
					renderTo: '',
					type: ''
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
				series: []
			};
    
            var dataFiles = ["Segovia","Madrid"];

            $.each(dataFiles, function(dataFilesItemNo, dataFilesItem) {
                
                var options = jQuery.extend(true, {}, optionsMaster);
                
                options.chart.renderTo="container"+dataFilesItem;
                options.chart.type="column";
    
                $.get('data/'+dataFilesItem+'.csv', function(data) {
                    // Split the lines
                    var lines = data.split('\n');
                    $.each(lines, function(lineNo, line) {
                        var items = line.split(';');

                        if (items[0].valueOf() == "titulo grafico") {
                            options.title.text=items[1];
                        }

                        else if (items[0].valueOf() == "titulo eje x") {
                            options.xAxis.title.text=items[1];
                        }

                        else if (items[0].valueOf() == "titulo eje y") {
                            options.yAxis.title.text=items[1];
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
                                    series.data.push(parseFloat(item));
                                }
                            });

                            options.series.push(series);
                        }

                    });

                    new Highcharts.Chart(options);
                });      
            });			
		});