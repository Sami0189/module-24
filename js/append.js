//1.where to add
const placesList = document.getElementById('places-list');
//2.what to be added
const li = document.createElement('li');
li.innerText='pahari bon';
//3.add the child
placesList.appendChild(li);



const mainContent = document.getElementById('main-content');
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText='My Food List';
section.appendChild(h1);

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText='water'
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText='rice'
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText='dal'
ul.appendChild(li3);

const li4 = document.createElement('li');
li4.innerText='potato'
ul.appendChild(li4);

section.appendChild(ul);
mainContent.appendChild(section);


//set innerHTML direcly

const sectionDress = document.createElement('section');
sectionDress.innerHTML=`
<h1>My dress section</h1>
<ul>
<li>T-shirt</li>
<li>Pant</li>
<li>Tougar</li>
<li>sock</li>
</ul>
`
mainContent.appendChild(sectionDress);