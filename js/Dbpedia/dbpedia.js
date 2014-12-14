$(document).ready(function() {
    var url = "http://dbpedia.org/sparql";
    var query = "\
    PREFIX dbpedia2: <http://dbpedia.org/resource/>\
    select * {\
    OPTIONAL{dbpedia2:Mahatma_Gandhi dbpedia-owl:birthName ?nombre}\
    OPTIONAL{dbpedia2:Mahatma_Gandhi dbpedia-owl:birthDate ?nacimiento}\
    OPTIONAL{dbpedia2:Mahatma_Gandhi dbpedia-owl:restingPlace ?LugardeMuerte}\
    OPTIONAL{dbpedia2:Mahatma_Gandhi dbpedia-owl:deathDate ?FechaDeMuerte}\
    }";
 
    var queryUrl = encodeURI( url+"?query="+query+"&format=json" );
    $.ajax({
        dataType: "jsonp",  
        url: queryUrl,
        success: function( data ) {
            var results = data.results.bindings;
            
            alert(JSON.stringify(results));
            
            var tabla = '<table>';
            for ( var i in results ) {
                for ( var e in results[i] ) {
                    if (results[i].hasOwnProperty(e)) {
                        tabla = tabla + '<tr><td>' + e + '</td>';
                        tabla = tabla + '<td>' + results[i][e].value + '</td></tr>';
                    }
                }
            }
            tabla = tabla + '</table>';
            $( 'body' ).append(tabla);
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