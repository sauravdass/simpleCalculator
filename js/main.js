const display = document.getElementById("display");

document.getElementById("one").onclick = () => (display.value += 1);
document.getElementById("two").onclick = () => (display.value += 2);
document.getElementById("three").onclick = () => (display.value += 3);
document.getElementById("four").onclick = () => (display.value += 4);
document.getElementById("five").onclick = () => (display.value += 5);
document.getElementById("six").onclick = () => (display.value += 6);
document.getElementById("seven").onclick = () => (display.value += 7);
document.getElementById("eight").onclick = () => (display.value += 8);
document.getElementById("nine").onclick = () => (display.value += 9);
document.getElementById("add").onclick = () => (display.value += "+");
document.getElementById("subs").onclick = () => (display.value += "-");
document.getElementById("multi").onclick = () => (display.value += "*");
document.getElementById("divide").onclick = () => (display.value += "/");
document.getElementById("dot").onclick = () => (display.value += ".");
document.getElementById("clear").onclick = () => (display.value = "");

document.getElementById("equal").onclick = () => {
  if (display.value == "") {
    alert("Please enter any numbers to calculate");
  } else {
    display.value = eval(display.value);
  }
};
