function getRndNum(start, end) {
    return Math.floor(Math.random() * end + start);
}

document.querySelector(".controllsbtn").addEventListener("click", () => {
    alert("Az egér bal és jobb gombjával a nagy pöttyök színe változtatható.\nAz \"Ellenőrzés\" gombra kattintva láthatóvá válik az adott sor eredménye.")
})

const rndlist = [];

for (let i = 0; i < 4; i++) {
    let temp = getRndNum(1, 8);
    if (temp === 1) {
        rndlist.push("red");
    }
    else if (temp === 2) {
        rndlist.push("yellow");
    }
    else if (temp === 3) {
        rndlist.push("green");
    }
    else if (temp === 4) {
        rndlist.push("blue");
    }
    else if (temp === 5) {
        rndlist.push("purple");
    }
    else if (temp === 6) {
        rndlist.push("pink");
    }
    else if (temp === 7) {
        rndlist.push("orange");
    }
    else {
        rndlist.push("cyan");
    }
}

console.log(rndlist);

const pegs = document.querySelectorAll(".peg");

pegs.forEach(peg => {
    let temp = 0;
    peg.addEventListener("click", () => {
        if (temp === 8) {
            temp = 1;
        }
        else {
            temp++;
        }
        console.log(temp);
        switch(temp) {
            case 1:
                peg.className = "peg red";
                break;
            case 2:
                peg.className = "peg yellow";
                break;
            case 3:
                peg.className = "peg green";
                break;
            case 4:
                peg.className = "peg blue";
                break;
            case 5:
                peg.className = "peg purple";
                break;
            case 6:
                peg.className = "peg pink";
                break;
            case 7:
                peg.className = "peg orange";
                break;
            case 8:
                peg.className = "peg cyan";
                break;
            default:
                peg.className = "peg";
        }
    })
    peg.addEventListener("contextmenu", event => {
        event.preventDefault();
        if (temp <= 1) {
            temp = 8;
        }
        else {
            temp--;
        }
        console.log(temp);
                switch(temp) {
            case 1:
                peg.className = "peg red";
                break;
            case 2:
                peg.className = "peg yellow";
                break;
            case 3:
                peg.className = "peg green";
                break;
            case 4:
                peg.className = "peg blue";
                break;
            case 5:
                peg.className = "peg purple";
                break;
            case 6:
                peg.className = "peg pink";
                break;
            case 7:
                peg.className = "peg orange";
                break;
            case 8:
                peg.className = "peg cyan";
                break;
            default:
                peg.className = "peg";
        }
    })
})