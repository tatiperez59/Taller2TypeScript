import { series } from './data.js';
function displaySeries(series) {
    const bodyTabla = document.getElementById('series-body');
    const titulo = document.getElementById('avg-seasons');
    clearTable(bodyTabla);
    console.log('Displaying series:', series.length);
    for (let i = 0; i < series.length; i++) {
        let s = series[i];
        if (!s)
            continue;
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${s.id}</td>
                             <td><a href="#" class="series-link" data-id="${s.id}">${s.nombre}</a></td>
                             <td>${s.canal}</td>
                             <td>${s.numSeasons}</td>`;
        bodyTabla.appendChild(trElement);
    }
    titulo.textContent = `${calcAverageSeasons(series).toFixed(2)}`;
    const seriesLinks = document.querySelectorAll('.series-link');
    seriesLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const id = parseInt(event.target.getAttribute('data-id'));
            displaySeriesDetail(series.find(s => s.id === id));
        });
    });
}
function clearTable(bodyTabla) {
    if (bodyTabla) {
        while (bodyTabla.firstChild) {
            bodyTabla.removeChild(bodyTabla.firstChild);
        }
    }
}
function calcAverageSeasons(series) {
    let total = 0;
    for (let i = 0; i < series.length; i++) {
        let s = series[i];
        if (s)
            total = total + s.numSeasons;
    }
    return total / series.length;
}
function displaySeriesDetail(serie) {
    const detailDiv = document.getElementById('series-detail');
    const image = document.getElementById('series-image');
    const name = document.getElementById('series-name');
    const description = document.getElementById('series-description');
    const link = document.getElementById('series-link');
    image.src = serie.imagenURL;
    name.textContent = serie.nombre;
    description.textContent = serie.descripcion;
    link.href = serie.linkURL;
    link.textContent = serie.linkURL;
    detailDiv.style.display = 'block';
}
document.addEventListener('DOMContentLoaded', () => {
    displaySeries(series);
});
