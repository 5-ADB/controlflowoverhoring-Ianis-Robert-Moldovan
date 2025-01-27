/**
 * Je bouwt verder op de opgave 4.
 * 
 *  * commande     -   console output
 * - open deur  =>  deur gaat open
 * - muziek     =>  muziek start met spelen
 * - stilte     =>  Muziek gaat uit
 * - licht aan  =>  Licht gaat aan
 * - licht uit  =>  licht gaat uit
 * 
 * stilte geeft echter enkel een output als de radio aan staat
 * licht uit geeft enkel otuput als het licht al aan was
 */

let openDeur = 'deur gaat open'
let muziek = 'muziek start met spelen'
let stilte
let lichtAan = true
let lichtUit
let radio = false

if (radio == true) {
    console.log('Muziek gaat uit');
} else {
    console.log('Radio staat niet aan');
}

if (lichtAan == true) {
    console.log('Licht gaat uit');
} else {
    console.log('licht staat al uit');
}



// console.log(lichtUit); // hier de commande intypen