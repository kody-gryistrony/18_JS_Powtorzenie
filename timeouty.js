setTimeout(wyrazenie, czas);

<--  wyrazenie (np. funkcja javascript) zostanie wywołana po upływie czasu (liczonego w milisekundach) od wywołania funkcji setTimeout()

funkcję setTimeout() można przypisać do zmiennej, np:
var timer = setTimeout

wówczas można wykorzystać funkcję clearTimeout(timer) to zablokowania wykonywania się timeoutu

setTimeout wykonuje się RAZ
_____________________________________

setInterval(wyrazenie, przedziałCzasu);

<-- wyrazenie będzie się wykonywać cyklicznie po upływie przedziałCzasu (również w milisekundach)

setInterval czyści się tak samo jak setTimeout, tylko przy pomocy clearInterval(timer);

_____________________________________

requestAnimationFrame

function repeatOften() {
  // Do whatever
  requestAnimationFrame(repeatOften);
}
requestAnimationFrame(repeatOften);
