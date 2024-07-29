class Ciudad {
    constructor(id,p,pr,c,can_h_c,act_eco,cinco_g,fibra,uni,can_h_p,agua) {
        this.id = id
        this.pais = p;
        this.provincia = pr;
        this.cuidad = c;
        this.cant_habitantes = can_h_c;
        this.act_eco = act_eco;
        this.cinco_g = cinco_g;
        this.fibra = fibra;
        this.universidad = uni;
        this.can_h_p = can_h_p;
        this.agua = agua;
    }
}

let lista_ciudades = [];
let acumulador = 0

function agregar_ciudad(){

    let pais = document.getElementById("pais").value;
    //document.getElementById("pais").reset();

    let provincia = document.getElementById("provincia").value;
    //document.getElementById("provincia").reset();

    let ciudad = document.getElementById("ciudad").value;
    //document.getElementById("ciudad").reset();

    let h_ciudad = document.getElementById("h_ciudad").value;
    //document.getElementById("h_ciudad").reset();

    let act_economica = document.getElementById("act_economica").value;
    let cingo_g = document.getElementById("cinco_g").value;
    let fibra = document.getElementById("fibra").value;
    let uni = document.getElementById("uni").value;
    let h_pais = document.getElementById("h_pais").value;
    let agua = document.getElementById("agua").value;

    let una_ciudad = new Ciudad(acumulador,pais,ciudad,provincia,h_ciudad,act_economica,cingo_g,fibra,uni,h_pais,agua);

    lista_ciudades.push(una_ciudad);

    acumulador ++;

    lista_ciudades.forEach(element => {console.log(element)});
}