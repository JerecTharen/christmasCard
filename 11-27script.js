
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
let names = [];

function naughtyNice(name){
    if (name.slice(0,2) === "C:\\"){
        return "nice";
    }
    else if(name.slice(0,2)=== "htt"){
        return "naughty";
    }
    else if(name.length%2 !== 0){
        return "nice";
    }
    else if(name.length%2 === 0){
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
            allPics.push(`<img src="niceCert.jpg">`);
            names.push({value: entered,align: alignment});
        }
    }
    else if(alignment === "naughty"){
        if (entered.slice(0,2)=== "htt"){
            naughtyList.innerHTML += `<img src="${entered}" alt="an image from the web">`;
        }
        else{
            naughtyList.innerHTML += `<p>${entered}</p>`;
            allPics.push(`<img src="naughtyCert.png">`);
            names.push({value: entered,align: alignment});
        }
    }
    if (alignment === "nice"){
        allPics.push("<audio autoplay><source src='nice.wav' type='audio/wav'></audio>");
        pics.innerHTML = "";
        for (let i = 0; i < allPics.length; i++){
            pics.innerHTML += allPics[i];
        }
    }
    else {
        // console.log("work in progress");
        allPics.push("<audio autoplay><source src='naughty.mp3' type='audio/mp3'></audio>");
        pics.innerHTML = "";
        for (let x = 0; x < allPics.length; x++){
            pics.innerHTML += allPics[x];
        }
    }
}
