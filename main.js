let Ex = [];
let SchA = [];

function newinput() {
    let mark = document.getElementById("UsersInput").value;
    let worth = document.getElementById("worth").value;
    if (worth == "Ex") {
        Ex.push(mark);
    } else if (worth == "SchA") {
        SchA.push(mark);
    }
    let completeMark = 0;
    let sumEx = 0;
    let sumSchA = 0;
    for (let i = 0; i < Ex.length; i++) {
        sumEx += parseInt(Ex[i]);
    }
    for (let i = 0; i < SchA.length; i++) {
        sumSchA += parseInt(SchA[i]);
    }
    completeMark = (2 * (sumSchA / SchA.length) + sumEx / Ex.length) / 3
    document.getElementById("mark").innerHTML = completeMark;
}