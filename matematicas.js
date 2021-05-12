const matematicas = {

    suma: (x1, x2) => {
        return x1 + x2;
    },
    resta: (x1, x2)=> {
        return x1 - x2;
    },
    multiplicacion: (x1, x2) => {
        return x1 * x2;
    },
    division: (x1, x2) => {
        if (x2 === 0) {
            console.log('No se puede dividir por cero');
            return false;
        } else {
            return x1 / x2;
        }
    }
}

module.exports = matematicas;