function renderTable(data) {
    let HTML = '';

    for (let i = 0; i < data.length; i++){
        let item = data[i];

        if (typeof item.income == 'undefined') item.income = 0;
        if (typeof item.expense == 'undefined') item.expense = 0;
       
        HTML += `<div class="table-row">
                    <div class="cell">${i+1}</div>
                    <div class="cell">${item.month}</div>
                    <div class="cell">${item.income}.00 Eur</div>
                    <div class="cell">${item.expense}.00 Eur</div>
                    <div class="cell">${item.income - item.expense}.00 Eur</div>
                </div>`;
    }

    return document.querySelector('.table-content').innerHTML = HTML;
}



// function renderSkills( data ) {
//     let HTML = '';

//     data.forEach( skill => {
//         if ( !skill.title ||
//              typeof(skill.title) !== 'string' ||
//              skill.title === 0 ||
//              skill.title > 50 ||
//              !skill.value ||
//              typeof(skill.value) !== 'number' ||
//              skill.value > 100 ||
//              skill.value < 0 ) {
//             return;
//         }
//         
//         HTML += `<div class="progress-bar">
//                     <div class="texts">
//                         <div class="title">${skill.title}</div>
//                         <div class="value">${value}%</div>
//                     </div>
//                     <div class="bar">
//                         <div class="value" style="width: ${value}%;">
//                             <div class="loading"></div>
//                         </div>
//                     </div>
//                 </div>`;
//     });
    
//     return HTML;
// }