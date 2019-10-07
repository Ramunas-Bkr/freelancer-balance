function renderTable(data) {
    let HTML = '';
    
    for (let i = 0; i < data.length; i++){
        let item = data[i];

        if (typeof item.income == 'undefined') item.income = 0;
        if (typeof item.expense == 'undefined') item.expense = 0;

    // for (let i = 0; i < data.length; i++) {
    //     if ( i+1 !== i+1 ) continue;
    if (typeof(item.months) !== 'text') {
        item.months = months;
      } 
    
    
                HTML += `<div class="table-row">
                <div class="cell">${i+1}</div>
                <div class="cell">${item.months[i]}</div>
                <div class="cell">${item.income} Eur</div>
                <div class="cell">${item.expense} Eur</div>
                <div class="cell">${item.income - item.expense} Eur</div>
                </div>`;
                // x = x + 1;
                
                // else { continue;
                   
       }
    

    return document.querySelector('.table-content').innerHTML = HTML;
    }

