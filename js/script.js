var wikiURL = 'https://en.wikipedia.org/w/api.php';

var wikiList = document.getElementById("wikiArtList");

$.ajax({
    url: wikiURL,
    dataType: 'jsonp',
    data: {action: 'opensearch', search: 'butterfly', format: 'json', limit: 2 },
    success: function(response){
        //console.log(response);
        // If results are found
        if(response[1].length > 0) {
            var title = response[1]; // Titles of Results
            var description = response[2];  // Descriptions of Results
            var link = response[3]; // Links to Results
        }
                      
        for (var i = 0; i < title.length; i++){
                        
            var node = document.createElement("LI");                 // Create a <li> node
            var textnode = document.createTextNode(title[i]);
            var wikiLink = document.createElement("a");
            wikiLink.innerHTML = href="" + link[i]
            node.appendChild(textnode);
            node.appendChild(wikiLink);
                // Append the text to <li>
            wikiList.appendChild(node);
        }
    }
                
});