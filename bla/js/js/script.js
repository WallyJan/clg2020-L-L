function ahoj(parametr) {
    alert('Programování ahoj' + parametr);
}

function ukazCas(){
    let aktualniCas = new Date();
    let hodin = "hodin: " + aktualniCas.getHours();
    let minut = "Minut: " + aktualniCas.getMinutes();
    let vterin = "Vteřin: " + aktualniCas.getSeconds();

    let spolecnyCas = hodin + "<br />" + minut + "<br />" + vterin;

    document.getElementById("hodiny").innerHTML = spolecnyCas;

    document.getElementById("hodiny").classList.toggle('barevne');
}

function uloz (coulozit )