const boxCards = document.getElementById('boxCards');
const divCards = document.createElement('div');
const divImg = document.createElement('div');
const paysH2 = document.createElement('h2');
const populationP = document.createElement('p');
const capitaleP = document.createElement('p');
const paysImg = document.createElement('img');

const italie = {
    pays: 'Italie',
    population: '59 M.',
    capitale: 'Rome',
    src: '/img/main/rom.avif'
}
const france = {
    pays: 'France',
    population: '67,5 M.',
    capitale: 'Paris',
    src: '/img/main/par.avif'
}
const allemagne = {
    pays: 'Allemagne',
    population: '83 M.',
    capitale: 'Berlin',
    src: '/img/main/berl.avif'
}
const espagne = {
    pays: 'Espagne',
    population: '47,3 M.',
    capitale: 'Madrid',
    src: '/img/main/mad.avif'
}
const angleterre = {
    pays: 'Angleterre',
    population: '56 M.',
    capitale: 'Londres',
    src: '/img/main/lond.avif'
}
const portugal = {
    pays: 'Portugal',
    population: '10,3 M.',
    capitale: 'Lisbonne',
    src: '/img/main/lisb.avif'
}
const suisse = {
    pays: 'Suisse',
    population: '8,6 M.',
    capitale: 'Berne',
    src: '/img/main/bern.avif'
}
const belgique = {
    pays: 'Belgique',
    population: '11,6 M.',
    capitale: 'Bruxelles',
    src: '/img/main/brux.avif'
}
const grece = {
    pays: 'Grèce',
    population: '10,6 M.',
    capitale: 'Athènes',
    src: '/img/main/ath.avif'
}
const autriche = {
    pays: 'Autriche',
    population: '8,9 M.',
    capitale: 'Vienne',
    src: '/img/main/vien.avif'
}
const hongrie = {
    pays: 'Hongrie',
    population: '9,7 M.',
    capitale: 'Budapest',
    src: '/img/main/bud.avif'
}
const paysBas = {
    pays: 'Pays-Bas',
    population: '17,5 M.',
    capitale: 'Amsterdam',
    src: '/img/main/ams.avif'
}
const russie = {
    pays: 'Russie',
    population: '143 M.',
    capitale: 'Moscou',
    src: '/img/main/mosc.avif'
}
const danemark = {
    pays: 'Danemark',
    population: '5,8 M.',
    capitale: 'Copenhague',
    src: '/img/main/cop.avif'
};

paysH2.innerText = france.pays;
populationP.innerText = 'Population : ' + france.population;
capitaleP.innerText = 'Capitale : ' + france.capitale;
paysImg.src = france.src;

document.querySelector('.ita').addEventListener('click', () => {
    paysH2.innerText = italie.pays;
    populationP.innerText = 'Population : ' + italie.population;
    capitaleP.innerText = 'Capitale : ' + italie.capitale;
    paysImg.src = italie.src;
});

document.querySelector('.fra').addEventListener('click', () => {
    paysH2.innerText = france.pays;
    populationP.innerText = 'Population : ' + france.population;
    capitaleP.innerText = 'Capitale : ' + france.capitale;
    paysImg.src = france.src;
});

document.querySelector('.all').addEventListener('click', () => {
    paysH2.innerText = allemagne.pays;
    populationP.innerText = 'Population : ' + allemagne.population;
    capitaleP.innerText = 'Capitale : ' + allemagne.capitale;
    paysImg.src = allemagne.src;
});

document.querySelector('.ang').addEventListener('click', () => {
    paysH2.innerText = angleterre.pays;
    populationP.innerText = 'Population : ' + angleterre.population;
    capitaleP.innerText = 'Capitale : ' + angleterre.capitale;
    paysImg.src = angleterre.src;
});

document.querySelector('.sui').addEventListener('click', () => {
    paysH2.innerText = suisse.pays;
    populationP.innerText = 'Population : ' + suisse.population;
    capitaleP.innerText = 'Capitale : ' + suisse.capitale;
    paysImg.src = suisse.src;
});

document.querySelector('.por').addEventListener('click', () => {
    paysH2.innerText = portugal.pays;
    populationP.innerText = 'Population : ' + portugal.population;
    capitaleP.innerText = 'Capitale : ' + portugal.capitale;
    paysImg.src = portugal.src;
});

document.querySelector('.esp').addEventListener('click', () => {
    paysH2.innerText = espagne.pays;
    populationP.innerText = 'Population : ' + espagne.population;
    capitaleP.innerText = 'Capitale : ' + espagne.capitale;
    paysImg.src = espagne.src;
});

document.querySelector('.hon').addEventListener('click', () => {
    paysH2.innerText = hongrie.pays;
    populationP.innerText = 'Population : ' + hongrie.population;
    capitaleP.innerText = 'Capitale : ' + hongrie.capitale;
    paysImg.src = hongrie.src;
});

document.querySelector('.gre').addEventListener('click', () => {
    paysH2.innerText = grece.pays;
    populationP.innerText = 'Population : ' + grece.population;
    capitaleP.innerText = 'Capitale : ' + grece.capitale;
    paysImg.src = grece.src;
});

document.querySelector('.aut').addEventListener('click', () => {
    paysH2.innerText = autriche.pays;
    populationP.innerText = 'Population : ' + autriche.population;
    capitaleP.innerText = 'Capitale : ' + autriche.capitale;
    paysImg.src = autriche.src;
});

document.querySelector('.bel').addEventListener('click', () => {
    paysH2.innerText = belgique.pays;
    populationP.innerText = 'Population : ' + belgique.population;
    capitaleP.innerText = 'Capitale : ' + belgique.capitale;
    paysImg.src = belgique.src;
});

document.querySelector('.payb').addEventListener('click', () => {
    paysH2.innerText = paysBas.pays;
    populationP.innerText = 'Population : ' + paysBas.population;
    capitaleP.innerText = 'Capitale : ' + paysBas.capitale;
    paysImg.src = paysBas.src;
});

document.querySelector('.rus').addEventListener('click', () => {
    paysH2.innerText = russie.pays;
    populationP.innerText = 'Population : ' + russie.population;
    capitaleP.innerText = 'Capitale : ' + russie.capitale;
    paysImg.src = russie.src;
});

document.querySelector('.dan').addEventListener('click', () => {
    paysH2.innerText = danemark.pays;
    populationP.innerText = 'Population : ' + danemark.population;
    capitaleP.innerText = 'Capitale : ' + danemark.capitale;
    paysImg.src = danemark.src;
});

divCards.classList.add('cards');
divImg.classList.add('box-image-cards');
paysH2.classList.add('pays-cards');
populationP.classList.add('population-cards');
capitaleP.classList.add('capitale-cards');
paysImg.classList.add('img-cards');

boxCards.appendChild(divImg);
boxCards.appendChild(divCards);
divCards.appendChild(paysH2);
divCards.appendChild(populationP);
divCards.appendChild(capitaleP);
divImg.appendChild(paysImg);