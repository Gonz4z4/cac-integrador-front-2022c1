let cant; let categoria; let $total; let ticket; let total
function calcularPrecio(evt){
    cant= parseInt(document.getElementById("cantidad").value)
    categoria= document.getElementById("categoria").value
    ticket= 200
    $total=document.getElementById("total")
    if(categoria=="estudiante"){
        total = ticket * cant - (0.8*ticket*cant)
    } else if(categoria=="trainee"){
        total = (ticket * cant)/2
    } else if(categoria=="junior"){
        total = ticket * cant - (0.15*ticket*cant)
    } else {
        total =ticket *cant
    }
    console.log(cant +" "+categoria)
    $total.innerHTML="Total a pagar: $"+total
}
document.getElementById("resumen").onclick = calcularPrecio;
