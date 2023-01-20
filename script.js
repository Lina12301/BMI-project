const results = new Wyniki()
const btn = document.querySelector('button');
const list = document.querySelector('.result ul');


const chooseResult = (event) => {
    const id = Number(event.target.dataset.id);
    document.getElementById("weight-data").innerHTML = results.getResult(id).waga;
    document.getElementById("height-data").innerHTML = results.getResult(id).wzrost;
    document.getElementById("bmi-data").innerHTML = results.getResult(id).bmi;
    document.getElementById("alert").innerHTML = "";

};
const makeList = () => {
    list.innerText = '';
    for (const res of results.show()) {
        const {id, text} = res;
        const newList = document.createElement('li');
        newList.innerHTML = res.text;
        newList.addEventListener('click', chooseResult);
        newList.dataset.id = res.id;
        list.appendChild(newList);
    }
    document.getElementById("avg").innerText = "Średnia wyników: " + results.avg().toFixed(2);

};
const info = () => {
    const inf = results.compare();
    if (inf === 1) {
        document.getElementById("alert").innerHTML = "Twoje Bmi wzrosło!";
    } else if (inf === 0) {
        document.getElementById("alert").innerHTML = "Twoje BMI spadło!";
    }
};

const bmi = () => {
    const waga = Number(document.getElementById("weight").value);
    const wzrost = Number(document.getElementById("height").value);
    if (isNaN(waga) || isNaN(wzrost)) {
        console.log(waga, wzrost);
    } else if (waga < 40 || waga > 200) {
        document.getElementById("alert").innerHTML = "Niepoprawna waga";
        console.log(waga);
    } else if (wzrost < 120 || wzrost > 240) {
        document.getElementById("alert").innerHTML = "Niepoprawny wzrost";
        console.log(wzrost);
    } else {
        const bmi = (waga / ((wzrost * wzrost) / 10000)).toFixed(2);
        const result = new Wynik(waga, wzrost, Number(bmi));

        document.getElementById("weight-data").innerHTML = result.waga;
        document.getElementById("height-data").innerHTML = result.wzrost;
        document.getElementById("bmi-data").innerHTML = result.bmi;
        results.add(result);
    }

    makeList();
    info();

};

btn.addEventListener('click', bmi);
// function wypisz(bmi,waga,wzrost){
//      if (isNaN(waga)|| isNaN(wzrost)){
//          console.log("kutas");
//      }
//      else if(waga <40 || waga >200 ){
//          document.getElementById("alert").innerHTML = "Niepoprawna waga";
//      }
//          else if (wzrost <120 || wzrost > 240){
//          document.getElementById("alert").innerHTML = "Niepoprawny wzrost";
//      }
//      else {
//     document.getElementById("bmi-data").innerHTML = bmi.toFixed(2);
//     document.getElementById("weight-data").innerHTML = waga;
//     document.getElementById("height-data").innerHTML = wzrost;
//
// }}
// function obliczbmi() {
//     var waga = Number(document.getElementById("weight").value);
//     var wzrost = Number(document.getElementById("height").value);
//     var bmi = waga / ((wzrost * wzrost) / 10000);
//    wypisz(bmi,waga,wzrost);
//     var wynikk = new Wynik(waga,wzrost,bmi);
//
//
// }






