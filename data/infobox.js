var searchTerm = "Parque_nacional_de_Cabañeros";
var url = "http://es.wikipedia.org/w/api.php?action=parse&format=json&page=" + searchTerm + "&redirects&prop=text&callback=?";
$.getJSON(url, function (data) {
    var wikiHTML = data.parse.text["*"];
    
    var regex = new RegExp('//', "g");
    wikiHTML = wikiHTML.replace(regex, 'http://');
    
    regex = new RegExp('file://', "g");
    wikiHTML = wikiHTML.replace(regex, 'http://');
    
    regex = new RegExp('http:http:', "g");
    wikiHTML = wikiHTML.replace(regex, 'http:');
    
    regex = new RegExp('"/wiki', "g");
    wikiHTML = wikiHTML.replace(regex, '"http://es.wikipedia.org/wiki');
    
    $wikiDOM = $("<document>" + wikiHTML + "</document>");
    var infoBoxHTML = $wikiDOM.find('.infobox_v2').html();

    $("#containerCiudadRealInfobox").append(infoBoxHTML);
});

//http://es.wikipedia.org/w/api.php?action=parse&format=json&page=Parque_nacional_de_Cabañeros&redirects&prop=text&callback=?

//http://es.wikipedia.org/w/api.php?action=query&prop=revisions&rvprop=content&format=json&titles=Parque_nacional_de_Cabañeros&rvsection=0

