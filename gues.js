let ran = Math.floor(Math.random() * 100);
//console.log(ran);
let a;
let i = 0;
while (a != ran) {
    a = prompt("guess the number");
    a = Number.parseInt(a);
    i++;
    if (ran == a) {
        alert("number is correct");
    }
    else if (ran > a) {
        alert(a + "greater than");
    }
    else if (ran < a) {
        alert(a + "less than");
    }
    else{
        alert("string is not allow")
    }
}

