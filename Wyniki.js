"use strict"

class Wyniki {

    constructor() {
        this.wyniki = [];
    }

    add(wynik) {
        this.wyniki.push(wynik);
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
                    text: `${i + 1}) Waga: ${wynik.waga} Wzrost: ${wynik.wzrost}  BMI: ${wynik.bmi.toFixed(2)}`
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
}


class Wynik {
    constructor(waga, wzrost, bmi) {
        this.waga = waga;
        this.wzrost = wzrost;
        this.bmi = bmi;

    }
}