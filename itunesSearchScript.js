let input = document.getElementById("searchBar");
//main pull method
function getData(lookup){
    $.ajax({
    type:"GET",
    url: 'https://itunes.apple.com/search?term=' + lookup + "&entity=song&limit=100",
    dataType: 'jsonp',
    success: function pullData  ( resp) {
        let a = resp.results
        let para = document.getElementById("songList");
        $(para).empty();
        for( let x in a){
            para.innerHTML += "<img src="+a[x].artworkUrl30+"> " +  "Artist: " + a[x].artistName + "    Album: "+a[x].collectionCensoredName+ "<br>  Track Preview:  " + "<a href="+ a[x].previewUrl+" target=\"_blank\">" + a[x].trackName + "</a><br><hr><br>";
            
       }
    }
    });
}

function search(){
    let text = document.getElementById("searchBar").value;
    getData(text);
}


function enterSearch(event){
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("searchBar").click();
    }
}

document.getElementById("submitButton").addEventListener("click", search());

input.addEventListener("keyup", function(event){
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("submitButton").click();
    }
});


