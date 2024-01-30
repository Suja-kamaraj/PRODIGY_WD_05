function text(){
    var locationInput = document.getElementById("locationInput");
    locationInput.value = locationInput.value.toUpperCase();
}

    const apiKey = '5242dd4684d876220d3c7bc48cec1cd2';
    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
    const locationInput = document.getElementById('locationInput');
    const searchButton = document.getElementById('searchButton');
    const locationElement = document.getElementById('location');
    const temperatureElement = document.getElementById('temperature');
    const descriptionElement = document.getElementById('description');
    const windElement = document.getElementById('wind')

    
    searchButton.addEventListener('click', () => {
        const location = locationInput.value;
        const url = `${apiUrl}?q=${location}&appid=${apiKey}&units=metric`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                locationElement.textContent =  `location: ${data.name}`;
                temperatureElement.textContent =  `Temperature: ${Math.round(data.main.temp)}°C`;
                descriptionElement.textContent = `Sky Condition: ${data.weather[0].description}`;
                windElement.innerHTML = `Wind Speed: ${data.wind.speed} km/h`;
            })

            .catch(error => {
                console.error('Error fetching weather data:', error);
            });
    }
    );
