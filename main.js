var surnamesDbase = ['Rossi', 'Mattei', 'Paolucci', 'Campagna', 'Giambattista', 'Simone', 'Esposito'];

var inputSurname = prompt('Digita qui il tuo cognome ( iniziale maiuscola ) : ');

surnamesDbase.push(inputSurname);

surnamesDbase.sort();

console.log(surnamesDbase);

var indexPosition;

indexPosition = surnamesDbase.indexOf(inputSurname);

var position = indexPosition + 1;

console.log(' il cognome inserito si trova nella posizione   ' + position );
