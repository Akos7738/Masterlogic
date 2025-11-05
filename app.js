function getRndNum(start, end) {
    return Math.floor(Math.random() * end + start);
}

function controlls(rowNumber) {
    const pegs = document.querySelectorAll(`.row${rowNumber} .peg`);
    pegs.forEach(peg => {
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
}

function check(rowNumber) {
    document.querySelector(`.row${rowNumber} .checkbtn`).addEventListener("click", () => {
        let tempSum = 0;
        let checkList = [];
        let tempList = [...rndlist];
        let blacks = 0;
        let whites = 0;
        const pegs = document.querySelectorAll(`.row${rowNumber} .peg`);
        pegs.forEach(peg => {
            tempSum += peg.classList.length;
            checkList.push(peg.classList.toString());
        });
        if (tempSum === 8) {
            for (let i = 0; i < checkList.length; i++) {
                checkList[i] = checkList[i].split(" ")[1];
            }
            for (let i = 0; i < rndlist.length; i++) {
                if(tempList[i] === checkList[i]) {
                    blacks++;
                    tempList[i] = null;
                    checkList[i] = null;
                    console.log(checkList);
                }
            }
            for (let i = 0; i < checkList.length; i++) {
                if(!(tempList[i] === checkList[i]) && tempList.includes(checkList[i])) {
                    whites++;
                }
            }
            const dots = document.querySelectorAll(`.row${rowNumber} .dot`);
            for (let i = 0; i < blacks; i++) {
                dots[i].className = "dot black";
            }
            for (let i = 0; i < whites; i++) {
                dots[i + blacks].className = "dot white";
            }
            if(blacks === 4) {
                const top = document.querySelectorAll(".row0 .peg");
                for (let i = 0; i < rndlist.length; i++) {
                    top[i].innerText = "";
                    top[i].classList.add(rndlist[i]);
                }
                document.querySelector(".container").classList.add("disabled");
                alert("Gratulálok, Nyertél!");
            }
            document.querySelector(`.row${rowNumber}`).classList.add("disabled");
        }
        else{
            alert("Mind a 4 helyre válasszon színt!");
        }
    });
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

controlls(1);
check(1);