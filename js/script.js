const iconsData = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];


// selettore dove inserire le icone 
const listCont = document.querySelector('.icons-list');


// ciclo che inserisce le icone in pagina, utilizzo i dati delle chiavi per creare le classi delle icone
iconsData.forEach((element) => {
        
        // varibile per poter poi mettere il nome dell'icona in maiuscolo
        let {name} = element;

        listCont.innerHTML += `
        <div class="icon-cont ${element.type}">
        <div class="icon ${element.color}">
            <i class="${element.family} ${element.prefix}${element.name}"></i>
        </div>
        ${name.toUpperCase()}
        </div>
        `
    }
);

// seleziono il menù di selezione per il filtro 
const iconSelector = document.getElementById('icons-selector');
// imposto il valore default su all 
let userSelect = 'all';
// seleziono tutti i contenitori di icone 
const contList = document.querySelectorAll('.icon-cont');

// al cambio di valore del menù a tendina 
iconSelector.addEventListener('change', 
    function() {
        userSelect = iconSelector.value;
        if (userSelect == 'all') {
            contList.forEach((element) => {
                // se il selettore è su 'all' tutte le icone sono visibili
                    element.classList.remove('hidden')                
            });
        } else if (userSelect == 'animal') {
            // se il valore è 'animal' tutti i contenitori che non hanno classe 'animal' spariscono 
            contList.forEach((element) => {
                if (element.classList.contains('animal')) {
                    element.classList.remove('hidden')
                } else {
                    element.classList.add('hidden')
                }
            });
        } else if (userSelect == 'vegetable') {
            // se il valore è 'vegetable' tutti i contenitori che non hanno classe 'vegetable' spariscono 
            contList.forEach((element) => {
                if (element.classList.contains('vegetable')) {
                    element.classList.remove('hidden')
                } else {
                    element.classList.add('hidden')
                }
            });
        } else if (userSelect == 'user') {
            contList.forEach((element) => {
            // se il valore è 'user' tutti i contenitori che non hanno classe 'user' spariscono 
                if (element.classList.contains('user')) {
                    element.classList.remove('hidden')
                } else {
                    element.classList.add('hidden')
                }
            });
        }
    }
);



