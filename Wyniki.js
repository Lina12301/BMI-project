"use strict"

class Wyniki {

    constructor() {
        const load1 = this.load();
        if(load1){
          this.wyniki = load1;
        }else {
            this.wyniki = [];
        }


    }

    add(wynik) {
        this.wyniki.push(wynik);
        this.save();
    }

    avg() {
        let sum = 0;
        for (const wynik of this.wyniki) {
            sum += wynik.bmi;
        }
        return sum / this.wyniki.length;
    }

    show() {
        return this.wyniki
            .map((wynik, i) => {
                return {
                    id: i + 1,
                    text: `${i + 1}) Waga: ${wynik.waga} Wzrost: ${wynik.wzrost}  BMI: ${wynik.bmi.toFixed(2)}
                    Pomiar odnotowany dnia: ${wynik.data}`
                };
            });

    }

    compare() {
        let i = (this.wyniki.length) - 1;
        if (this.wyniki.length > 1) {
            let wyn = this.wyniki[i];
            let wyn2 = this.wyniki[i - 1];
            if (wyn.bmi > wyn2.bmi) {
                return 1;
            } else if (wyn.bmi < wyn2.bmi) {
                return 0;
            }
        }
    }

    getResult(i) {
        return this.wyniki[i - 1];
    }
    save (){
        localStorage.setItem('wynik', JSON.stringify(this.wyniki));
    }
    load(){
      return JSON.parse(localStorage.getItem('wynik'));
    }
}


class Wynik {
    constructor(waga, wzrost, bmi) {
        this.waga = waga;
        this.wzrost = wzrost;
        this.bmi = bmi;
        this.data = data;

    }
}
