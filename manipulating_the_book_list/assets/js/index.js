const books = [
  {
    title: "The Design of ED",
    author: "Don Norman",
    alreadyRead: false,
    img:
      "http://t2.gstatic.com/images?q=tbn:ANd9GcTQEZhxiVNZAeKa1dGfEzKwLXiyY_78i08Gfhwn53k-JYin9TDO"
  },
  {
    title: "The Most Human",
    author: "Brian Christian",
    alreadyRead: true,
    img:
      "http://t2.gstatic.com/images?q=tbn:ANd9GcRqNE0qeS4ldVIC9DbGkx9MOwJ4WWKi6HVvtrtZ8XTKVodonSBy"
  },
  {
    title: "Thinking with Type",
    author: "Ellen Lupton",
    alreadyRead: true,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/518%2BxIiELFL._SX258_BO1,204,203,200_.jpg"
  },
  {
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    alreadyRead: false,
    img: "https://eloquentjavascript.net/img/cover.jpg"
  }
];

// Lösung 01 =====>
const ulEl = document.querySelector('.book-list');

for(let book of books){
  const div1 = document.createElement('div');
  const div2 = document.createElement('div');
  const img = document.createElement('img');
  const div3 = document.createElement('div');
  const h5El = document.createElement('h5');
  const pEl = document.createElement('p');
  const aEl = document.createElement('a');
  const div4 = document.createElement('div');
  div1.classList.add('card-desk');
  div2.classList.add('card');
  img.classList.add('card-img-top');
  div3.classList.add('card-body');
  h5El.classList.add('card-title');
  pEl.classList.add('card-text');
  div4.classList.add('card-footer');
  div4.classList.add('text-right');
  aEl.classList.add('btn');

  div1.style.width = '15rem';
  img.setAttribute('height', '330px');

  div3.append(h5El, pEl );
  div2.append(img, div3, div4);
  div1.append(div2);
  ulEl.append(div1);
  div4.appendChild(aEl);

  img.setAttribute('src', book.img);
  img.style.border = 'solid 3px black'
  h5El.innerText = book.title;
  pEl.innerText = book.author;
  aEl.style.borderRadius = '80%';
  aEl.style.fontSize = '13px';
  div1.style.marginTop = '20px';

  if(book.alreadyRead){
    aEl.innerHTML = 'Read'
    aEl.classList.add('btn-success');
  } else {
    aEl.innerHTML = 'To read'
    aEl.classList.add('btn-secondary');
  }

}



// Lösung 02 =====>
// const ourLists = document.getElementsByClassName('card-column'); 

// for(let key of books) {
//   const newList = document.createElement('li'); 
//   newList.style.listStyleType = 'none';
//   const divElement = document.createElement('div');
//   divElement.classList.add('card');
//   divElement.style.width = '15rem';

//   newList.append(divElement);

//   const bookImage = document.createElement('img');
//   bookImage.classList.add('card-img-top');

//   // // 01
//   // const srcAtt = document.createAttribute('src');
//   // srcAtt.value = 'www.google.com';
//   // bookImage.setAttribute(srcAtt);

//   //  02
//   bookImage.setAttribute('src', key.img);
//   bookImage.style.width = '100%';
//   bookImage.setAttribute('height', '350px');
//   bookImage.style.border = '5px solid black';

//   // newList.append(bookImage);
//   divElement.append(bookImage);

//   const divElement1 = document.createElement('div');
//   divElement1.classList.add('card-body');
//   const h5Element = document.createElement('h5');
//   h5Element.classList.add('card-title');
//   h5Element.style.height = '50px';
//   h5Element.innerText = key.title;
//   const pElement = document.createElement('p');
//   pElement.classList.add('card-text');
//   pElement.innerText = key.author;
//   const aElement = document.createElement('a');
//   aElement.classList.add('btn');
//   if(key.alreadyRead === true){
//     aElement.innerHTML = 'Read';
//     aElement.classList.add('btn-success');

//   } else {
//     aElement.innerHTML = 'To read';
//     aElement.classList.add('btn-secondary');
//   }

//   divElement1.append(h5Element, pElement, aElement);
//   divElement.append(divElement1);
  
//   ourLists[0].append(newList);
// }


