const url = "https://rickandmortyapi.com/api/character";

const tbody = document.getElementById("characters");
const error = document.getElementById("error");

function mostrarPersonajes(personajes){

    tbody.innerHTML = "";

    personajes.forEach(personaje => {

        tbody.innerHTML += `
            <tr>
                <td><img src="${personaje.image}"></td>
                <td>${personaje.name}</td>
                <td>${personaje.status}</td>
                <td>${personaje.species}</td>
                <td>${personaje.gender}</td>
            </tr>
        `;
    });

}

async function obtenerTodos(){
    error.textContent="";
    try{
        const respuesta = await fetch(url);
        if(!respuesta.ok){
            throw new Error();
        }
        const datos = await respuesta.json();
        mostrarPersonajes(datos.results);

    }catch{
        error.textContent="Error al obtener los personajes.";
    }
}

async function buscar(){
    error.textContent="";
    const name = document.getElementById("name").value;
    const status = document.getElementById("status").value;
    const species = document.getElementById("species").value;
    const type = document.getElementById("type").value;
    const gender = document.getElementById("gender").value;

    let consulta = `${url}?`;

    if(name) consulta += `name=${name}&`;
    if(status) consulta += `status=${status}&`;
    if(species) consulta += `species=${species}&`;
    if(type) consulta += `type=${type}&`;
    if(gender) consulta += `gender=${gender}`;

    try{
        const respuesta = await fetch(consulta);
        if(!respuesta.ok){
            throw new Error();
        }
        const datos = await respuesta.json();
        mostrarPersonajes(datos.results);
    }catch{
        error.textContent="No se encontraron resultados.";
    }

}
document.getElementById("allCharacters").addEventListener("click", obtenerTodos);

document.getElementById("search").addEventListener("click", buscar);