const quotes = [{
    Name:'Abdoul wahab Mahamadou',
    quote:'There is no success in the Island of someday. someday i will do this. someday i will do that. Time to do is today Now'
},
{
    Name:'Souphiane Seydou',
    quote:'i\'m A succes Today because i had a friend who believe in me and i didn\'t have the heart to let him down'
},
{
    Name:'Abode Rsbiou',
    quote:'Get busy living or get busy dying'
},
{
    Name:'Abil Houssein',
    quote:'je n\'ai pas la programmation dans le sang et je ne jamais pense etre bon dans ce domaine' 
},
{
    Name:'Issaka Lourwana',
    quote:'Mon temperament est tujour aller de l\'avant de faire face au probleme sans les ignorer'
},
{
    Name:'Lamine Ibrahim',
    quote:'Le Mouvement est ma nature et l\'infini caracterise mon potentiel'
},
{
    Name:'Madji Inikly',
    quote:'Faire des grands etudes est un atout qu\il ne faut pas negliger. cependant, il faut savoir que ce ne sont pas les grands diplomes qui definissent notre niveau d\'intelligence ou notre ingeniosite et que meme sans mes sans les diplomes on peut bien reussir dans la vie'
},
{
    Name:'A.karim Ibrahim',
    quote:'Quand quelau\'un remporte un grand succes c\'est rarement une histoire de chance c\'est grace a sont talent sont intelligence et a plein d\'autre chose ' 
}
]


const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');

quoteBtn.addEventListener('click', displayQuote);

function displayQuote(){
    let number = Math.floor(Math.random()*quotes.length);
    quoteAuthor.innerHTML =quotes[number].Name;
    quote.innerHTML = quotes[number].quote;
}


