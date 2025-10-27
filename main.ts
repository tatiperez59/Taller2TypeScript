import { Serie } from './serie.js';
import { series } from './data.js';

function displaySeries(series: Serie[]): void {
    const bodyTabla = document.getElementById('series-body') as HTMLElement;
    const titulo = document.getElementById('avg-seasons') as HTMLElement;
    clearTable(bodyTabla);
    console.log('Displaying series:', series.length);
    for (let i = 0; i < series.length; i++) {
        let s = series[i];
        if (!s) continue;
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
            const id = parseInt((event.target as HTMLElement).getAttribute('data-id')!);
            displaySeriesDetail(series.find(s => s.id === id)!);
        });
    });
}

function clearTable(bodyTabla: HTMLElement): void {
    if (bodyTabla) {
        while (bodyTabla.firstChild) {
            bodyTabla.removeChild(bodyTabla.firstChild);
        }
    }
}

function calcAverageSeasons(series: Serie[]): number {
    let total: number = 0;
    for (let i = 0; i < series.length; i++) {
        let s = series[i];
        if (s) total = total + s.numSeasons;
    }
    return total / series.length;
}

function displaySeriesDetail(serie: Serie): void {
    const detailDiv = document.getElementById('series-detail') as HTMLElement;
    const image = document.getElementById('series-image') as HTMLImageElement;
    const name = document.getElementById('series-name') as HTMLElement;
    const description = document.getElementById('series-description') as HTMLElement;
    const link = document.getElementById('series-link') as HTMLAnchorElement;

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
