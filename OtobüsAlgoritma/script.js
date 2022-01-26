//Dom Elementine Yazdırma:
const seatsConsole = ["*", "**", "**", "*", "**", "*","**","**"];

let text = "";
for (let i = 0; i < seatsConsole.length; i++) {
  text += seatsConsole[i] + "<br>";
}
document.getElementById("demo").innerHTML = text;

//Konsola Yazdırma:
const seat2 = ["*", "**", "**", "*", "**", "*","**","**"];

seat2.forEach((e)=> {
    console.log(e)
})


// for (let i=0; i<8; i++){
//     (i !== 6 && i !== 3 && i !== 10) ? console.log('*') : console.log('')
// }