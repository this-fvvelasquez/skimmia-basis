"use strict";

var countList = [],	mOf_3 = [], mOf_5 = [];
// Llenamos'countList' con números del 1 al 100.
for (var i = 1; i <= 100; i++) {
	countList.push(i);
}
// Insertamos "Music" en lugar de cada multiplo de 3.
for (var m = 3, i = 1; m <= 100; m = 3 * ++i) {
	countList[m - 1] = "Music";
	mOf_3.push(m); // Guardamos todos los multiplos de 3.
}
// Insertamos "TI" en lugar de cada multiplo de 5.
for (var m = 5, i = 1; m <= 100; m = 5 * ++i) {
	countList[m - 1] = "TI";
	mOf_5.push(m); // Guardamos todos los multiplos de 5.
}
// Insertamos "Musical" en lugar de los multiplos de 3 AND 5:
for (var i = 0; i < mOf_3.length; i++) {
	for (var j = 0; j < mOf_5.length; j++) {
		// If Intersection occurs:
		if (mOf_3[i] === mOf_5[j]) {
			countList[mOf_3[i] - 1] = "Musical";
		}
	}
}
// Mostramos el resultado:
for (var i = 0; i < countList.length; i++) {
	console.log(countList[i]);
}