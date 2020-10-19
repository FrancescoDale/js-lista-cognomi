var surnamesDbase = ['Rossi', 'Mattei', 'Paolucci', 'Campagna', 'Giambattista', 'Simone', 'Esposito'];

var inputSurname = prompt('Digita qui il tuo cognome : ');

surnamesDbase.push(inputSurname);

surnamesDbase.sort();

console.log(surnamesDbase);

var indexPosition;

indexPosition = surnamesDbase.indexOf(inputSurname);

console.log(' il cognome inserito si trova nella posizione' + indexPosition );
