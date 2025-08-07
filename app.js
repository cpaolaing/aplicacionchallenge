// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const nombreInput = document.getElementById('amigo');
const agregarBtn = document.querySelector('.button-add');
const listaAmigos = document.getElementById('listaAmigos');
const sortearBtn = document.querySelector('.button-draw');
const resultado = document.getElementById('resultado');

const amigos = [];

agregarBtn.addEventListener('click', () => {
  const nombre = nombreInput.value.trim();
  if (!nombre) {
    alert('Por favor, ingrese un nombre válido');
    return;
  }
  amigos.push(nombre);
  actualizarLista();
  nombreInput.value = '';
});

sortearBtn.addEventListener('click', () => {
  if (amigos.length === 0) {
    alert('No hay amigos para sortear');
    return;
  }
  const indice = Math.floor(Math.random() * amigos.length);
  resultado.textContent = `Amigo secreto: ${amigos[indice]}`;
});

function actualizarLista() {
  listaAmigos.innerHTML = '';
  amigos.forEach((amigo, i) => {
    const li = document.createElement('li');
    li.textContent = amigo;
    listaAmigos.appendChild(li);
  });

}
