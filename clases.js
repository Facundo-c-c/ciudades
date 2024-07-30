class Ciudad { //defino clase
    constructor(id, p, pr, c, can_h_c, act_eco, cinco_g, fibra, uni, can_h_p, agua) {
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

function agregar_ciudad() {

    //tomo valores

    let pais = document.getElementById("pais").value;
    document.getElementById("pais").value = null; 

    let provincia = document.getElementById("provincia").value;
    document.getElementById("provincia").value = null;

    let ciudad = document.getElementById("ciudad").value;
    document.getElementById("ciudad").value = null;

    let h_ciudad = document.getElementById("h_ciudad").value;
    document.getElementById("h_ciudad").value = null;

    let act_economica = document.getElementById("act_economica").value;
    document.getElementById("act_economica").value = null;

    let cinco_g = document.getElementById("cinco_g").value;
    document.getElementById("cinco_g").value = null;

    let fibra = document.getElementById("fibra").value;
    document.getElementById("fibra").value = null;

    let uni = document.getElementById("uni").value;
    document.getElementById("uni").value = null;

    let h_pais = document.getElementById("h_pais").value;
    document.getElementById("h_pais").value = null;

    let agua = document.getElementById("agua").value;
    document.getElementById("agua").value = null;

    //creo objeto

    let una_ciudad = new Ciudad(acumulador, pais, ciudad, provincia, h_ciudad, act_economica, cinco_g, fibra, uni, h_pais, agua);

    //guardo el objeto

    lista_ciudades.push(una_ciudad);

    acumulador++

    //lo creo en la tabla

    let fila = document.createElement("tr");
    fila.innerHTML = `
        <td>${pais}</td>
        <td>${provincia}</td>
        <td>${h_ciudad}</td>
        <td>${act_economica}</td>
        <td>${cinco_g}</td>
        <td>${fibra}</td>
        <td>${uni}</td>
        <td>${h_pais}</td>
        <td>${ciudad}</td>
    `;

    document.getElementById("t_body").appendChild(fila);

    lista_ciudades.forEach(element => {console.log(element)});

}