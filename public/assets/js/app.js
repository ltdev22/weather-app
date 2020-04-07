console.log('client-side JS');

const weatherForm = document.querySelector('#weather-form');
const searchTerm = document.querySelector('#search');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');

messageOne.classList.add('hidden');
messageTwo.classList.add('hidden');

weatherForm.addEventListener('submit', event => {
    event.preventDefault();

    const location = searchTerm.value;
    fetch(`http://localhost:8888/weather?address=${location}`).then(
        response => {
            response.json().then(data => {
                if (data.error) {
                    messageTwo.classList.add('hidden');
                    messageOne.classList.remove('hidden');
                    messageOne.textContent = data.error;
                } else if (data.forecast.error) {
                    messageTwo.classList.add('hidden');
                    messageOne.classList.remove('hidden');
                    messageOne.textContent = data.forecast.error;
                } else {
                    messageOne.classList.remove('hidden');
                    messageTwo.classList.remove('hidden');
                    messageOne.textContent = data.location;
                    messageTwo.textContent = data.forecast;
                }
            });
        }
    );
});
