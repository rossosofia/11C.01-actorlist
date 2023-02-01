console.log ("hello world");
const open = document.querySelector("ul");
const container = document.getElementById('pop-up');
const close = document.querySelector("button");

open.addEventListener('click', () => {
    container.classList.remove('hidden');
    container.classList.add('show');
})

close.addEventListener('click', () => {
    container.classList.remove('show');
    container.classList.add('hidden');
})


// fetch the data
fetch('actors.json')
.then((res) => res.json()) 
.then((data) => ActorsList(data));

// forEach
function ActorsList(data){
    console.log(data);
data.forEach(showActor);
}

// that function
function showActor(actor){

// grab the template
const template = document.querySelector("template#actors-template").content;
    
// clone it 
const clone = template.cloneNode(true);
    
// change content
clone.querySelector("h2.actor-name").textContent = actor.fullname;
clone.querySelector("h3.movie").textContent = actor.movie;


// grab parent
const parent = document.querySelector("ul#actors-cards");
    
// append
    parent.appendChild(clone);
    }