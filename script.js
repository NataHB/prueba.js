let listaAlumnos = 'Lista de alumnos: '

let cantidadPersonas = prompt('Ingrese la cantidad de personas en la clase:')
while(!cantidadPersonas || isNaN(cantidadPersonas) || cantidadPersonas < 0){
    alert('Error: No ingresó un valor numérico válido')
    cantidadPersonas = prompt('Ingrese la cantidad de personas en la clase:')
}

for(let i = 1; i <= cantidadPersonas; i++){
    let nombreAlumno = prompt('Ingrese el nombre n°' + i)
    while(!nombreAlumno || !isNaN(nombreAlumno)){
        alert('Error: No ingresó un nombre válido')
        nombreAlumno = prompt('Ingrese el nombre n°' + i)
    }

listaAlumnos = listaAlumnos + '\n-' + nombreAlumno
}

alert(listaAlumnos)