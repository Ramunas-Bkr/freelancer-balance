function renderMy_Table( data ) {
    let HTML = '';
    for ( let i=0; i<months.length; i++ ) {
        const obj = data[i];

        HTML += `<div class="table-row">
        <div class="cell">${i}</div>
        <div class="cell">${obj.months}</div>
        <div class="cell">150.00 Eur</div>
        <div class="cell">-</div>
        <div class="cell">150.00 Eur</div>
    </div>`
}
}
    return document.getElementById('table-content').innerHTML = HTML;
