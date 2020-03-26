// Napisz skrypt, który wykonana następujące zadania na stronie _business.html_: 

// *Zadanie 1:* zwróci informacje o typie węzła nagłówka, własnościach obiektu o id
// "contact" i zawartości elementu HTML o id "about".

console.log (document.querySelector('h3').nodeType +"  "+ document.querySelector('h3').nodeName);
console.log(document.querySelector("#contact"));
console.log(document.getElementById("about").textContent);

// *Zadanie 2:* doda nowy paragraf do "About" tuż za pierwszym paragrafem.

var new_paragraph = document.createElement("p");
var new_node = document.createTextNode("nowy paragraf");
new_paragraph.appendChild(new_node);

var kid = document.querySelector("p");

kid.insertBefore(new_paragraph, kid.secondChild);

// *Zadanie 3:* doda nową pozycję na liście pomiędzy Facebook a Twitter: link do strony UMK.
var umk_p = document.createElement("li");
var umk_a = document.createElement("a");
umk_a.href="https://www.umk.pl/";
var umk_n = document.createTextNode("UMK page");
umk_a.appendChild(umk_n);
umk_p.appendChild(umk_a);

var list = document.querySelector('#contact > ul'); // bierze pierwszy element ul z contactow
var localization = list.children[2]; //okreslenie pozycji przed ktora wrzucam 
list.insertBefore(umk_p, localization);
// *Zadanie 4:* usunie obiekt o id "banner".
var ban = document.getElementById("banner");
ban.remove();
// *Zadanie 5:* odwróci tekst na całej stronie, aby czytało się go od prawej do lewej.
document.querySelector('html').dir="rtl";
