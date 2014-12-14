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
            $( 'body' ).append('<table><tbody>');
            for ( var i in results ) {
                $( 'body' ).append( '<tr><td>'+'nombre'+'</tr></td>' );
                $( 'body' ).append( '<tr><td>'+results[i].nombre.value+'</tr></td>' );
            }
            $( 'body' ).append('</tbody></table>');
        }
    });
});

/*
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX foaf: <http://xmlns.com/foaf/0.1/>
PREFIX pref: <http://dbpedia.org/resource/Cabrera_Archipelago_Maritime-Terrestrial_National_Park>
SELECT ?resumen ?area ?islas
WHERE {
{ 
pref: <http://dbpedia.org/ontology/abstract> ?resumen .
pref: <http://dbpedia.org/ontology/areaTotal> ?area .
pref: <http://dbpedia.org/ontology/numberOfIslands> ?islas .
FILTER langMatches( lang(?resumen), 'es') }
}
*/