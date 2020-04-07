console.log('client-side JS');

const weatherForm = document.querySelector('#weather-form');
const searchTerm = document.querySelector('#search');

weatherForm.addEventListener('submit', event => {
    event.preventDefault();

    const location = searchTerm.value;
    fetch(`http://localhost:8888/weather?address=${location}`).then(
        response => {
            response.json().then(data => {
                if (data.error) {
                    console.log(data.error);
                } else if (data.forecast.error) {
                    console.log(data.forecast.error);
                } else {
                    console.log(data.location);
                    console.log(data.forecast);
                }
            });
        }
    );
});
