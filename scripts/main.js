var play = document.body.querySelector(".bouton");

console.log(play);

play.addEventListener("click",

function ()
{
  var x = Math.floor(Math.random() * 10);
  alert(x);

  var msg = "Hi! take Ur guess btw 0 & 10."
  do
  {
    var n = x;
    n = prompt(msg + "Enter your guess: ");

    if (n > x)
      msg = "too height...";

    else if (n < x)
      msg="too low...";
  }
  while (x!= n);

  alert("Bravo!");
}

);
