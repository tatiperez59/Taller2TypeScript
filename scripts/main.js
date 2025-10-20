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
                             <td><a href="${s.linkURL}" target="_blank">${s.nombre}</a></td>
                             <td>${s.canal}</td>
                             <td>${s.numSeasons}</td>`;
        bodyTabla.appendChild(trElement);
    }
    titulo.textContent = `${calcAverageSeasons(series).toFixed(2)}`;
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
document.addEventListener('DOMContentLoaded', () => {
    displaySeries(series);
});
//# sourceMappingURL=main.js.map