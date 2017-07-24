var wikiURL = 'https://en.wikipedia.org/w/api.php';

var wikiList = document.getElementById("wikiArtList");

document.getElementById("search").addEventListener("search", getData);

var keyword = 'fluff';

function getData(){
    keyword = document.getElementById("search").value;
    console.log(keyword);
    $.ajax({
    url: wikiURL,
    dataType: 'jsonp',
    data: { action: 'opensearch', search: keyword, format: 'json', limit: 2 },
    success: function (response) {
        console.log(response);


        if (response[1].length > 0) {
            // Titles of Results
            var title = response[1];
            // Descriptions of Results
            var description = response[2];
            // Links to Results
            var link = response[3];

            parseResult(title, description, link);

        } else {
            showError(keyword)
        }


    },
    error: function () {
        alert("Error retrieving search results, please refresh the page.");
    }

});
}

function parseResult(title, description, link) {
    for (var i = 0; i < title.length; i++) {

        var node = document.createElement("li");   // Create a <li> node
        var textnode = document.createElement("p"); // Create <p> element
        textnode.innerHTML = description[i]; // Add description text 
        var linknode = document.createElement("a"); // Create link element
        linknode.setAttribute('href', link[i]); // Add hyperlink
        linknode.innerHTML = title[i]; // Add title 
        node.appendChild(linknode); // Append the link to <li>
        node.appendChild(textnode); // Append the description to the <li>
        wikiList.appendChild(node);  // Append the li to the list
    }
}

function showError(keyword) {
    alert("Error retrieving results for " + keyword + ", please refresh the page.");
}