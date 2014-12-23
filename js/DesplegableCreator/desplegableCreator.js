function addDesplegable(CCAA) {    
    
    var tablas = [];
    var graficosHighcharts = [];
    var html = '\
    <!-- '+CCAA+' --> \
    <div class="desplegable-modal modal fade" id="desplegableCCAA'+CCAA+'" tabindex="-1" role="dialog" aria-hidden="true"> \
        <div class="modal-content"> \
            <div class="close-modal" data-dismiss="modal"> \
                <div class="lr"> \
                    <div class="rl"> \
                    </div> \
                </div> \
            </div>';

    $.get('data/CCAA/'+CCAA+'.tsv', function(data) {
        var separators = ['\n'];
        var lines = data.split(new RegExp(separators.join('|'), 'g'));

        $.each(lines, function(lineNo, line) {
            var items = line.split('\t');

            if (items[0].valueOf() == "titulo") {
                html = html +'\
                <div class="container"> \
                    <div class="row"> \
                        <div class="col-lg-8 col-lg-offset-2"> \
                            <div class="modal-body"> \
                                <h2>'+items[1]+'</h2> \
                            </div> \
                        </div> \
                    </div> \
                </div>';
            }

            else if (items[0].valueOf() == "subtitulo") {
                html = html +'\
                <div class="container"> \
                    <div class="row"> \
                        <div class="col-lg-8 col-lg-offset-2"> \
                            <div class="modal-body"> \
                                <p class="item-intro text-muted">'+items[1]+'</p> \
                            </div> \
                        </div> \
                    </div> \
                </div>';
            }

            else if (items[0].valueOf() == "texto") {
                html = html +'\
                <div class="container"> \
                    <div class="row"> \
                        <div class="col-lg-8 col-lg-offset-2"> \
                            <div class="modal-body"> \
                                <p class="text-justified">'+items[1]+'</p> \
                            </div> \
                        </div> \
                    </div> \
                </div>';
            }

            else if (items[0].valueOf() == "edicion") {
                html = html +'\
                <ul class="list-inline">';
                
                $.each(items, function(itemNo, item) {
                    if (itemNo > 0){
                        html = html +'\
                        <li>'+item+'</li>';
                    }
                });
                
                html = html +'\
                </ul>';
            }
            
            else if (items[0].valueOf() == "tabla") {
                html = html +'\
                <div class="container"> \
                    <table id="tabla'+items[1]+'"> \
                    </table> \
                </div>';
                tablas.push(['tabla'+items[1],items[2]]);
            }
            
            else if (items[0].valueOf() == "grafico highcharts") {
                html = html +'\
                <div id="highchartsContainer'+items[1]+'" class="common-charts"> \
                </div>';
                graficosHighcharts.push(items[1]);
            }

            else {

            }
        });
    //Add button
    html = html +'\
        <button type="button" class="btn btn-primary" data-dismiss="modal"><i class="fa fa-times"></i>Volver al mapa</button> \
                        </div> \
                    </div> \
                </div> \
            </div> \
        </div> \
    </div>';

    $('body').append(html);
    
    $.each(tablas, function(tablaNo, tabla) {
        addTable(tabla[0], tabla[1]);
    });
        
    $.each(graficosHighcharts, function(graficoNo, grafico) {
        addHighchartsGraphics(grafico);
    });
    
    });  
}

