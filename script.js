const quien = ['El perro ', 'Mi abuela ', 'Su tortuga ', 'Mi loro '];
const accion = ['se comió ', 'orinó en ', 'aplastó ', 'rompió '];
const que = [' mi tarea ', ' las llaves ', ' el coche '];
const cuando = ['antes de la clase ', 'justo a tiempo ', 'cuando terminé ', 'durante mi almuerzo ', 'mientras rezaba '];

function generarExcusa() {
    const quienRamdom = quien[Math.floor(Math.random() * quien.length)];
    const accionRamdom = accion[Math.floor(Math.random() * accion.length)];
    const queRamdom = que[Math.floor(Math.random() * que.length)];
    const cuandoRamdom = cuando[Math.floor(Math.random() * cuando.length)];
    const excusa = quienRamdom+ accionRamdom+queRamdom+cuandoRamdom;
    document.getElementById('excuse').textContent = excusa;
}

generarExcusa();







