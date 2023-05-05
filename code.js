const name = document.getElementById('name')
const email = document.getElementById('email')
const message = document.getElementById('msg')


async function submitHandler(event) {
  event.preventDefault();

  const info = {
    name: name.value,
    email: email.value,
    message: message.value
  }

  try {
    const response = await fetch('https://6454dce7f803f34576334f22.mockapi.io/user', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(info)
    })
    const result = await response.json();
    console.log(`The data: ${result}`);
  } catch (error) {
    console.error(`Error message: ${error.message}`);
  }

}

const form = document.getElementById('form');
form.addEventListener('submit', submitHandler);


// Data fetched from the Mock api
const nameFromReq = document.getElementById('nameFromReq')
const emailFromReq = document.getElementById('emailFromReq')
const messageFromReq = document.getElementById('messageFromReq')
const dataToDisplay = document.getElementById('dataToDisplay')
const data = document.getElementById('data');

async function fetchHandler(event) {
  event.preventDefault();

  try {
    const data = await fetch('https://6454dce7f803f34576334f22.mockapi.io/user', {
      method: 'GET',
    })
    const result = await data.json();
    for (let ele of result) {
      let parentElement = document.createElement('div');
      parentElement.className = 'element';
      parentElement.id = `element-${ele.id}`;
      // here above parentElement is created along with a class and id assigned to it

      let element = `<p class="nameFromReq"><b>Name:</b> ${ele.name}</p>
      <p class="emailFromReq"><b>Email:</b> ${ele.email}</p>
      <p class="messageFromReq"><b>Message:</b> ${ele.message}</p>`;
      //when you create an element using template literal you must assing it to any element as the innerHTML to that element
      parentElement.innerHTML = element;

      dataToDisplay.append(parentElement)
    }

    console.log(result);
  } catch (error) {
    console.log(error.message)
  }
}

data.addEventListener('click', fetchHandler);

