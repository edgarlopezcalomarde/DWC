
Date.prototype.fecha = function () {
    let dia  = this.getDate()<10?"0"+this.getDate():this.getDate()
    let mes = this.getMonth()<10?"0"+this.getMonth():this.getMonth()

    return dia+"/"+mes+"/"+this.getFullYear()
}


Date.prototype.edad = function (año, mes, dia) {
    const hoy = Date.now()
    const cuandoNaci = new Date(año, mes , dia)

    return hoy-cuandoNaci.getMilliseconds()
}

const fecha = new Date()

console.log( fecha.fecha())
console.log( fecha.edad(2001,9,15))