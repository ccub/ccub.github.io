function addTable(idToAppend,urlName) {
    var url = "http://dbpedia.org/sparql";
    //PREFIX dbp-url: <http://dbpedia.org/resource/Caba%C3%B1eros_National_Park>
    //PREFIX dbp-url: <http://dbpedia.org/resource/Picos_de_Europa>
    var query = "\
        PREFIX dbp-url: <http://dbpedia.org/resource/" + urlName + ">\
        select * {\
        OPTIONAL{dbp-url: rdfs:label ?Nombre97Espa6ol8 . FILTER (LANG(?Nombre97Espa6ol8)='es')}\
        OPTIONAL{dbp-url: dbpprop:name ?Nombre}\
        OPTIONAL{dbp-url: dbpedia-owl:areaTotal ?Area97m2899}\
        OPTIONAL{dbp-url: dbpprop:area ?Area97Km289}\
        OPTIONAL{dbp-url: dbpprop:areaKm ?Area97Km28}\
        OPTIONAL{dbp-url: dbpprop:country ?Pais}\
        OPTIONAL{dbp-url: dbpprop:elevationM ?Altitud97m8}\
        OPTIONAL{dbp-url: dbpprop:highest ?Punto9mas9alto}\
        OPTIONAL{dbp-url: dbpprop:mapCaption ?Region}\
        OPTIONAL{dbp-url: dbpprop:established ?A6o9de9creacion}\
        OPTIONAL{dbp-url: dbpprop:iucnCategory ?Categoria9IUCN}\
        OPTIONAL{dbp-url: dbpprop:location ?Localizacion}\
        OPTIONAL{dbp-url: dbpprop:visitationNum ?Numero9de9visitantes}\
        OPTIONAL{dbp-url: dbpprop:visitationYear ?A6o9del9dato9de9visitantes}\
        OPTIONAL{dbp-url: geo:lat ?Coordenadas9latitud}\
        OPTIONAL{dbp-url: geo:long ?Coordenadas9longitud}\
        OPTIONAL{dbp-url: foaf:homepage ?Pagina9web}\
    }";
    
    /*PREFIX dbp-url: <http://dbpedia.org/resource/Mahatma_Gandhi>\
        PREFIX dbp-prop: <http://dbpedia.org/ontology/>\
        select * {\
        OPTIONAL{dbp-url: dbp-prop:name ?Nombre9Común}\
        OPTIONAL{dbp-url: dbp-prop:alt_name ?Nombre9Real}\
        OPTIONAL{dbp-url: dbp-prop:iucn_category ?Categoría9UICN}\
        OPTIONAL{dbp-url: dbp-prop:photo ?Imagen}\
        OPTIONAL{dbp-url: dbp-prop:photo_width ?Tamaño9de9la9imagen}\
        OPTIONAL{dbp-url: dbp-prop:map ?Mapa}\
        OPTIONAL{dbp-url: dbp-prop:map_width ?Tamaño9del9mapa}\
        OPTIONAL{dbp-url: dbp-prop:location ?Localización}\
        OPTIONAL{dbp-url: dbp-prop:nearest_city ?Localidad9cercana}\
        OPTIONAL{dbp-url: dbp-prop:coords ?Coordenadas}\
        OPTIONAL{dbp-url: dbp-prop:area ?Superficie}\
        OPTIONAL{dbp-url: dbp-prop:created ?Fecha9de9creación}\
        OPTIONAL{dbp-url: dbp-prop:established ?Fecha9de9inicio}\
        OPTIONAL{dbp-url: dbp-prop:visitation_num ?Número9de9visitantes}\
        OPTIONAL{dbp-url: dbp-prop:visitation_year ?Año9del9número9de9visitantes}\
        OPTIONAL{dbp-url: dbp-prop:governing_body ?Entidad9de9control}\
        OPTIONAL{dbp-url: dbp-prop:administrator ?Administración}\
        OPTIONAL{dbp-url: dbp-prop:operator ?Gestión}\
        OPTIONAL{dbp-url: dbp-prop:owner ?Propiedad9de}\
        OPTIONAL{dbp-url: dbp-prop:website ?Sitio9web}\
        OPTIONAL{dbp-url: dbp-prop:url ?url}\
    }*/
    
    
    
    /*PREFIX dbp-url: <http://dbpedia.org/resource/Mahatma_Gandhi>\
    PREFIX dbp-prop: <http://dbpedia.org/ontology/>\
    select * {\
        OPTIONAL{dbp-url: dbp-prop:nombre ?Nombre9Común}\
        OPTIONAL{dbp-url: dbp-prop:nombre_original ?Nombre9Real}\
        OPTIONAL{dbp-url: dbp-prop:categoría_iucn ?Categoría9UICN}\
        OPTIONAL{dbp-url: dbp-prop:foto ?Imagen}\
        OPTIONAL{dbp-url: dbp-prop:tamaño_foto ?Tamaño9de9la9imagen}\
        OPTIONAL{dbp-url: dbp-prop:pie_foto ?Pie9de9foto}\
        OPTIONAL{dbp-url: dbp-prop:mapa ?Mapa}\
        OPTIONAL{dbp-url: dbp-prop:tamaño_mapa ?Tamaño9del9mapa}\
        OPTIONAL{dbp-url: dbp-prop:pie_mapa ?Pie9de9mapa}\
        OPTIONAL{dbp-url: dbp-prop:país ?País}\
        OPTIONAL{dbp-url: dbp-prop:tipo_división_administrativa ?Tipo9de9división9administrativa}\
        OPTIONAL{dbp-url: dbp-prop:división_administrativa ?División9administrativa}\
        OPTIONAL{dbp-url: dbp-prop:tipo_subdivisión_administrativa ?Tipo9de9subdivisión9administrativa}\
        OPTIONAL{dbp-url: dbp-prop:subdivisión_administrativa ?Subdivisión9administrativa}\
        OPTIONAL{dbp-url: dbp-prop:ecorregión ?Ecorregión}\
        OPTIONAL{dbp-url: dbp-prop:temperatura ?Temperatura}\
        OPTIONAL{dbp-url: dbp-prop:ciudad_cercana ?Localidad9cercana}\
        OPTIONAL{dbp-url: dbp-prop:administración ?Administración}\
        OPTIONAL{dbp-url: dbp-prop:grado_protección ?Grado9de9protección}\
        OPTIONAL{dbp-url: dbp-prop:fecha_creación ?Fecha9de9creación}\
        OPTIONAL{dbp-url: dbp-prop:legislación ?Legislación}\
        OPTIONAL{dbp-url: dbp-prop:número_localidades  ?Número9de9localidades}\
        OPTIONAL{dbp-url: dbp-prop:número_visitantes ?Número9de9visitantes}\
        OPTIONAL{dbp-url: dbp-prop:año_número_visitantes ?Año9del9número9de9visitantes}\
        OPTIONAL{dbp-url: dbp-prop:superficie ?Superficie}\
        OPTIONAL{dbp-url: dbp-prop:longitud ?Longitud}\
        OPTIONAL{dbp-url: dbp-prop:altitud ?Altitud}\
        OPTIONAL{dbp-url: dbp-prop:sitio_web ?Sitio9web}\
    }*/
 
    var queryUrl = encodeURI( url+"?query="+query+"&format=json" );
    $.ajax({
        dataType: "jsonp",  
        url: queryUrl,
        success: function( data ) {
            var results = data.results.bindings;        
            var table = '';
            //for ( var i in results ) {
            var i = 0;
            for ( var e in results[i] ) {
                if (results[i].hasOwnProperty(e)) {
                    var temp = e;
                    temp = temp.replace(/9/g, ' ');
                    temp = temp.replace(/8/g, ')');
                    temp = temp.replace(/7/g, '(');
                    temp = temp.replace(/6/g, 'ñ');
                    table = table + '<tr><td><b>' + temp + '</b></td>';
                    table = table + '<td>' + results[i][e].value + '</td></tr>';
                }
            }
            $( '#' + idToAppend ).append(table);
        }
    });
}

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