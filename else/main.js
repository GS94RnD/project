function pageLoaded(){
	let btnSet = document.querySelector('.btnSet');
	let btnAdd = document.querySelector('.btnAdd');
    let divuu = document.querySelector('.uu');
    let divvv = document.querySelector('.vv');
	let colors = [];
    let i = 0;

	btnSet.addEventListener('click', function(){
        if (colors.length === 0){
        divuu.style.display = 'flex'
        } else {
            let ind = rand(colors.length);
		    let color = colors[ind];
            btnSet.style.color = color;
            divuu.style.display = 'none';
            divvv.style.display = 'flex';
            divvv.innerHTML = 'Дудли следующих цветов:'+ colors;
        }
	});

	btnAdd.addEventListener('click', function(){
        i+=1
        if(i => 1) {
        divuu.style.display = 'none';
		colors.push(`rgb(${rand(256)},${rand(256)},${rand(256)})`);
        }
	});
}

window.addEventListener('load', pageLoaded);

function rand(max){
	return Math.floor(Math.random() * max);
}



// let her = document.querySelector('button')
// let his = document.querySelector('.his')
// his.style.display = 'none'

// let i = 1

// her.onclick = function () {
//     his.style.display = 'block'
//     i++
//     i = i%2
//     if (i === 0) {
//         his.style.display = 'none'
//     } else {his.style.display = 'block'}
// }
 
// let picun = document.querySelector('.himik')
// let heruk = document.querySelector('.heruk')
// document.body.addEventListener('keyup', function(h) {
//     if (h.key === 'и') {heruk.innerHTML += (picun.value+'<br>')}
// })
