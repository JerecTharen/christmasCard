
console.log('merry christmas');

//feed carrots to reindeer, move santa down a chimney, put your face on a snowflake
//put in a name and return naughty or nice, has to be a sound
//imagery too

let theInput = document.getElementsByClassName("enterName")[0];
let niceList = document.getElementsByClassName("niceList")[0];
let naughtyList = document.getElementsByClassName("naughtyList")[0];
let container = document.getElementsByClassName("container")[0];
let pics = document.getElementsByClassName("pics")[0];

let allPics = [];

function naughtyNice(name){
    if (name.slice(0,2) === "C:\\"){
        return "nice";
    }
    else if(name.slice(0,2)=== "htt"){
        return "naughty";
    }
    else if(name.length === 4){
        return "naughty";
    }
    else{
        return "nice";
    }
}

function changeDOM(){
    let entered = theInput.value;
    theInput.value = "";
    let alignment = naughtyNice(entered);
    if (alignment === "nice"){
        if (entered.slice(0,2) === "C:\\"){
            niceList.innerHTML += `<img src="${entered}" alt="the users picture">`;
        }
        else{
            niceList.innerHTML += `<p>${entered}</p>`;
        }
    }
    else if(alignment === "naughty"){
        if (entered.slice(0,2)=== "htt"){
            naughtyList.innterHTML += `<img src="${entered}" alt="an image from the web">`;
        }
        else{
            naughtyList.innerHTML += `<p>${entered}</p>`;
        }
    }
    if (alignment === "nice"){
        console.log("work in progress");
    }
    else {
        console.log("work in progress");
    }
}
