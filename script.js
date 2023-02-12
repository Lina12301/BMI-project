const results = new Wyniki()
const btn = document.querySelector('button');
const list = document.querySelector('.result ul');

const date = () =>{
    const now = new Date();
    return`${String(now.getDate())}.${String(now.getMonth() + 1)}.${String(now.getFullYear())}r.
     o godzinie: ${String(now.getHours())}:${String(now.getMinutes())}:${String(now.getSeconds())}`;
}
const clean = () => {
    const input_H = document.getElementById("height");
    const input_W = document.getElementById("weight");
    input_H.value = '';
    input_W.value = '';
}
const cleanResult = () => {
    document.getElementById("weight-data").innerHTML = '';
    document.getElementById("height-data").innerHTML = '';
    document.getElementById("bmi-data").innerHTML = '';

}
const chooseResult = (event) => {
    const id = Number(event.target.dataset.id);
    document.getElementById("weight-data").innerHTML = results.getResult(id).waga;
    document.getElementById("height-data").innerHTML = results.getResult(id).wzrost;
    document.getElementById("bmi-data").innerHTML = results.getResult(id).bmi;
    document.getElementById("alert").innerHTML = "";

};
const showAvg=()=>{
    if (isNaN(results.avg())){
        document.getElementById("avg").innerText ='';
    }else {
        document.getElementById("avg").innerText = "Średnia wyników: " + results.avg().toFixed(2);
    }
}
const makeList = () => {
    list.innerText = '';
    for (const res of results.show()) {
       // const {id, text} = res;
        const newList = document.createElement('li');
        //const date = document.createElement('li');
        newList.innerHTML = res.text;
        newList.addEventListener('click', chooseResult);
        newList.dataset.id = res.id;
        list.appendChild(newList);
    }
    //document.getElementById("avg").innerText = "Średnia wyników: " + results.avg().toFixed(2);
showAvg();
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
    if (isNaN(waga) || isNaN(wzrost) || waga === 0 || wzrost ===0) {
       cleanResult();
        document.getElementById("alert").innerHTML = "";
    } else if (waga < 40 || waga > 200) {
        document.getElementById("alert").innerHTML = "Niepoprawna waga.";
cleanResult();
    } else if (wzrost < 120 || wzrost > 240) {
        document.getElementById("alert").innerHTML = "Niepoprawny wzrost.";
        cleanResult();
    } else {
        const bmi = (waga / ((wzrost * wzrost) / 10000)).toFixed(2);

        const result = new Wynik(waga, wzrost, Number(bmi),date());

        document.getElementById("weight-data").innerHTML = result.waga;
        document.getElementById("height-data").innerHTML = result.wzrost;
        document.getElementById("bmi-data").innerHTML = result.bmi;
        results.add(result);
    }
    makeList();
    info();
    clean();
};

btn.addEventListener('click', bmi);
makeList();
