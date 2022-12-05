// Fetching the URL
fetch('https://api.chucknorris.io/jokes/random')
// Output received here
.then((response)=>{
    return response.json();
})
// Passed received output here
.then((data)=>{
    var joke = data.value;
    console.log(joke);
})
// If nothing found.
.catch("404");