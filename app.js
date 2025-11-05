function getRndNum(start, end) {
    return Math.floor(Math.random() * end + start);
}

document.querySelector(".controllsbtn").addEventListener("click", () => {
    alert("Az egér bal és jobb gombjával a nagy pöttyök színe változtatható.\nAz \"Ellenőrzés\" gombra kattintva láthatóvá válik az adott sor eredménye.")
})

let rndlist = [];

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

const pegs1 = document.querySelectorAll(".row1 .peg");

pegs1.forEach(peg => {
    let temp = 0;
    peg.addEventListener("click", () => {
        if (temp === 8) {
            temp = 1;
        }
        else {
            temp++;
        }
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
    });
    peg.addEventListener("contextmenu", event => {
        event.preventDefault();
        if (temp <= 1) {
            temp = 8;
        }
        else {
            temp--;
        }
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
    });
});

document.querySelector(".row1 .checkbtn").addEventListener("click", () => {
    let tempSum = 0;
    let checkList1 = [];
    let tempList = [...rndlist];
    let blacks = 0;
    let whites = 0;
    pegs1.forEach(peg => {
        tempSum += peg.classList.length;
        checkList1.push(peg.classList.toString());
    });
    if (tempSum === 8) {
        for (let i = 0; i < checkList1.length; i++) {
            checkList1[i] = checkList1[i].split(" ")[1];
        }
        for (let i = 0; i < rndlist.length; i++) {
            if(tempList[i] === checkList1[i]) {
                blacks++;
                tempList[i] = null;
                checkList1[i] = null;
            }
            else if(tempList.includes(checkList1[i])) {
                whites++;
            }
        }
        const dots = document.querySelectorAll(".row1 .dot");
        for (let i = 0; i < blacks; i++) {
            dots[i].className = "dot black";
        }
        for (let i = 0; i < whites; i++) {
            dots[i + blacks].className = "dot white";
        }
    }
});