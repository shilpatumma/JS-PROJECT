const array = [[1, 2, 3],
[4, 5, 6],
[7, 8, 9],
[1, 4, 7],
[2, 5, 8],
[3, 6, 9],
[1, 5, 9],
[3, 5, 7]]

function winningCondition() {
    let isWon = false;
    for (let i = 0; i < array.length; i++) {
        const condition = array[i];

        let a = document.getElementById("b" + condition[0]).value;
        let b = document.getElementById("b" + condition[1]).value;
        let c = document.getElementById("b" + condition[2]).value;

        if (a != '' && b != '' && c != '') {
            if (a == b && b == c) {
                isWon = true;

                let x = document.getElementById("b" + condition[0]).style.color = "red";
                let y = document.getElementById("b" + condition[1]).style.color = "red";
                let z = document.getElementById("b" + condition[2]).style.color = "red";
                for (let j = 1; j < 9; j++) {

                    id = "b" + j;
                    document.getElementById(id).disabled = true;
                }
            }
            if (isWon) {
                document.getElementById('statement').innerHTML = "Congratulations!";
            }
        }
    }
}

flag = 1;
function printXorO(id) {
    if (flag == 1) {
        document.getElementById(id).value = "X";
        document.getElementById(id).disabled = true;
        document.getElementById('statement').innerHTML = "Player X Turn";
        flag = 0;
    }
    else {
        document.getElementById(id).value = "0";
        document.getElementById(id).disabled = true;
        document.getElementById('statement').innerHTML = "Player 0 Turn";
        flag = 1;
    }
}