// ------------------------------------
// createElement()
// appendChild()
// append()
// prepend()
// insertBefore()

/* insertAdjacentElement(
    'beforebegin'
    'afterend'
    'beforeend'
    'afterend',
    element
) */

// removeChild()
// remove()
// ------------------------------------

//creating elements

// const h1 = document.createElement('h1');
// h1.textContent = 'helloworld';
// h1.classList.add('greeting');
// // console.log(h1);

// //apending the create element to the html body
// const body = document.body;
// body.appendChild(h1)

const ul = document.querySelector('ul');
const newli = document.querySelector('li');
newli.innerText = 'lam a new li';
ul.appendChild(newli);

const firstli = document.querySelector('li');
ul.insertBefore(newli,firstli);