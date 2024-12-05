console.log(`Namastey React!`);

let a = true;
let b = true;
console.log(a && b);

console.log(a && "Arpit is Full Stack Developer!");

//Template Literals
const name = `Arpit`;
const age = 25;
console.log(`My name is ${name} and I am ${age} years old!`);

const id = 1;
const productName = `Apple Watch`;
const rating = 5;

console.log({
    id,
    productName,
    rating
})

const product = {
    description:"Apple Watch Description",
    id,
    productName,
    rating
}

const {description:productDescription} = product;
console.log(productDescription);


// Array Methods

const personArr = [
    {
        name:'Person 1',
        age:20,
        country:'USA'
    },{
        name:'Person 2',
        age:30,
        country:'India'
    },{
        name:'Person 3',
        age:30,
        country:'UK'
    }
];

const personNameArr = personArr.map((person)=>person.name);
console.log(personNameArr);

const personLivesInUsa = personArr.find((person) => person.country === 'USA');
console.log(personLivesInUsa);


// persons who are older than 20

const personGreaterThan20 = personArr.filter(person => person.age > 20);
console.log(personGreaterThan20);

const numbers = [10,20,30,45,50,60,70,80,90,100];
const result = numbers.some(num => num > 50);
const result2 = numbers.every(num => num < 100);
console.log(result);
console.log(result2);

const imdex = personArr.findIndex((person) => person.country === `UK`);
console.log(imdex)

const listOfProducts = document.querySelector(`.list-of-products`);

function renderList(products)
{
    // console.log(products);
    const ul = document.createElement(`ul`);
    products.map(product => {
        const li = document.createElement(`li`);
        console.log(product.title);
        li.textContent = product.title;
        console.log(li);
        ul.appendChild(li);
    });


    listOfProducts.append(ul);
}


const fetchList = async function ()
{
    try{
        const response = await fetch('https://dummyjson.com/products',{method:'GET'});
        const data = await response.json();
        console.log(data.products);

        if(data.products.length > 0)
        {
            // console.log(`length: ${data.products.length}`);

            renderList(data.products);
        }
    }
    catch (error)
    {
        console.log(error);
    }
}

fetchList();
