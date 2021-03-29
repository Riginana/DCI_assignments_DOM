const books = [
  {
    title: "The Design of EveryDay Things",
    author: "Don Norman",
    alreadyRead: false,
    img:
      "http://t2.gstatic.com/images?q=tbn:ANd9GcTQEZhxiVNZAeKa1dGfEzKwLXiyY_78i08Gfhwn53k-JYin9TDO"
  },
  {
    title: "The Most Human Human",
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



const ourLists = document.getElementsByClassName('card-column'); 


for(let key of books) {
  const newList = document.createElement('li'); 
  newList.style.listStyleType = 'none';
  const divElement = document.createElement('div');
  divElement.classList.add('card');
  divElement.style.width = '15rem';


  newList.append(divElement);

  const bookImage = document.createElement('img');
  bookImage.classList.add('card-img-top');

  // // 01
  // const srcAtt = document.createAttribute('src');
  // srcAtt.value = 'www.google.com';
  // bookImage.setAttribute(srcAtt);

  //  02
  bookImage.setAttribute('src', key.img);
  bookImage.style.width = '100%';
  bookImage.setAttribute('height', '350px');
  bookImage.style.border = '5px solid black';



  // newList.append(bookImage);
  divElement.append(bookImage);

  const divElement1 = document.createElement('div');
  divElement1.classList.add('card-body');
  const h5Element = document.createElement('h5');
  h5Element.classList.add('card-title');
  h5Element.style.height = '50px';
  h5Element.innerText = key.title;
  const pElement = document.createElement('p');
  pElement.classList.add('card-text');
  pElement.innerText = key.author;
  const aElement = document.createElement('a');
  aElement.classList.add('btn');
  if(key.alreadyRead === true){
    aElement.innerHTML = 'Read';
    aElement.classList.add('btn-success');

  } else {
    aElement.innerHTML = 'To read';
    aElement.classList.add('btn-secondary');

  }

  divElement1.append(h5Element, pElement, aElement);

  divElement.append(divElement1);
  
  ourLists[0].append(newList);
}


