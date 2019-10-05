function renderTable(data) {
    let HTML = '';
    
    for (let i = 0; i < data.length; i++){
        let item = data[i];

        if (typeof item.income == 'undefined') item.income = 0;
        if (typeof item.expense == 'undefined') item.expense = 0;

    for (let i = 0; i < data.length; i++) {
        if ( i+1 !== item.month ) continue;
        
        else {
            for (let x = 1; x <data.length; x++){
                if ( x === i+1)
                
                HTML += `<div class="table-row">
                <div class="cell">${i+1}</div>
                <div class="cell">${item.month}</div>
                <div class="cell">${item.income}.00 Eur</div>
                <div class="cell">${item.expense}.00 Eur</div>
                <div class="cell">${item.income - item.expense}.00 Eur</div>
                </div>`;
                // x = x + 1;
                
                // else { continue;
                   
       }}
    }}

    return document.querySelector('.table-content').innerHTML = HTML;
}

