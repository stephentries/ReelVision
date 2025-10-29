// Predefined searchable keywords (titles, genres, actors, etc.)
const searchableContent = [
    "pacific rim", "blade runner 2049", "alita", "alita: battle angel",
    "mission impossible", "the final reckoning", "top gun maverick", 
    "mission impossible fallout", "salt", "inception", "the social network",
    "john wick","avengers","deadpool & wolverine",
    "sci-fi", "action", "thriller", "epic", "spy", "drama", "adventure", "crime",
    "cyberpunk", "docudrama", "political thriller","superhero","angelina jolie", 
    "tom cruise", "harrison ford", "ana de armas", "leonardo dicaprio","keanu reeves","michael nyqvist","alfie allen",
    "idris elba","charlie hunnam", "rinko kikuchi","ryan gosling","rosa salazar", "christoph waltz", "jennifer connelly",
    "hannah waddingham", "tramell tillman","miles teller","henry cavill", "ving rhames","liev schreiber", "chiwetel ejiofor",
    "joseph gordon-levitt","ellen Page","jesse eisenberg", "andrew garfield","justin timberlake",
    "robert downey jr","chris evans","scarlett johansson","ryan reynolds","rhett reese","hugh jackman","emma corrin",
    "2010", "2013", "2017", "2018", "2022", "2025","2014","2022","2012","2024","2019"
];

function showloader(){
 // Show circular loading animation
    const loader = document.getElementById("loader");
    loader.style.display = "block";
     }

// Homepage navigation search
document.getElementById('search-button').addEventListener("click", () => {
    const query = document.getElementById("search-bar").value.toLowerCase().trim();

    if (query) {
        const match = searchableContent.some(item => item.includes(query));

        showloader(); //Show the spinner before the delay starts
        
     setTimeout(() => {
        if (match) {
            // Match found, go to movielist.html and pass query
            window.location.href = `movielist.html?search=${encodeURIComponent(query)}`;
           
        } else {
            // No match, go directly to NotFound.html
            window.location.href = "NotFound.html";
        }
      }, 1000); // simulate loading delay
    } else {
        alert("Please input a query");
        document.getElementById("loader").style.display = "none"; // hide loader if no query
    }
});

// Filter movies based on search query in movielist.html
window.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const query = params.get("search");
    if (query) {

        //hiding h1, hr elements
        hideElements();

        // creating dynamic div to line up items and styling it
        const result=document.createElement("div");
        result.style.display = "flex";
        result.style.flexWrap = "wrap";
        result.style.justifyContent = "center";
        result.style.gap = "20px";
        document.body.appendChild(result);

        // ensuring that div is above footer
        const footer = document.querySelector("footer");
        document.body.insertBefore(result, footer);

        // if a match is found
        if (query) {
            const movies = document.querySelectorAll('.movie');
            movies.forEach(movie => {
                const text = movie.innerText.toLowerCase();
                movie.style.display = text.includes(query) ? "flex" : "none";

                // add movie to result div and styling it
                result.appendChild(movie);
                movie.style.flexDirection = "column";
                movie.style.justifyContent = "space-evenly";
                movie.style.alignItems = "center";
               
            });
        }

    }
});

function hideElements() {
    // get all h1 and horizontal lines
    const hrElements = document.querySelectorAll('hr');
    const h1section = document.querySelectorAll('h1');

    // Loop through each <hr> element and hide it
   hrElements.forEach(hr => {
        hr.style.display = 'none';
    });

    // Loop through each <h1> element and hide it
    h1section.forEach(h1 => {
        h1.style.display = 'none';
    });
}



