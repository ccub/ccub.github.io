$(document).ready(function() {
    var url = "http://es.dbpedia.org/sparql";
    var query = "\
    PREFIX esdbp: <http://es.dbpedia.org/property/> \
    PREFIX esdbr: <http://es.dbpedia.org/resource/Parque_nacional_de_Cabañeros> \
    SELECT ?nombre WHERE { \
    esdbr:   esdbp:nombre    ?nombre .\
    }";
 
    var queryUrl = encodeURI( url+"?query="+query+"&format=json" );
    $.ajax({
        dataType: "jsonp",  
        url: queryUrl,
        success: function( _data ) {
            var results = _data.results.bindings;
            for ( var i in results ) {
                var src = results[i].nombre.value;
                alert(src);
                $( 'body' ).append( '<img src="'+src+'"/>' );
            }
        }
    });
});