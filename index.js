const contentDiv = document.getElementById('content');
const charactersBtn = document.getElementById('charactersBtn');
const planetsBtn = document.getElementById('planetsBtn');
const vehiclesBtn = document.getElementById('vehiclesBtn');

// Функція для виконання запиту до API
async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Помилка отримання даних:', error);
    return null;
  }
}

// При натисканні на кнопку "Персонажі"
charactersBtn.addEventListener('click', async () => {
  contentDiv.innerHTML = '<h2 class="text-center bg-primary-subtle">Персонажі</h2>';
  const charactersData = await fetchData('https://swapi.dev/api/people/');
  if (charactersData) {
    charactersData.results.forEach(character => {
      const characterDiv = document.createElement('div');
      characterDiv.innerHTML = `<h3>${character.name}</h3>
                                 <p>Висота: ${character.height}</p>
                                 <p>Вага: ${character.mass}</p>
                                 <hr>`;
      contentDiv.appendChild(characterDiv);
    });
  }
});

// При натисканні на кнопку "Планети"
planetsBtn.addEventListener('click', async () => {
  contentDiv.innerHTML = '<h2 class="text-center bg-primary-subtle">Планети</h2>';
  const planetsData = await fetchData('https://swapi.dev/api/planets/');
  if (planetsData) {
    planetsData.results.forEach(planet => {
      const planetDiv = document.createElement('div');
      planetDiv.innerHTML = `<h3>${planet.name}</h3>
                              <p>Клімат: ${planet.climate}</p>
                              <p>Діаметр: ${planet.diameter}</p>
                              <hr>`;
      contentDiv.appendChild(planetDiv);
    });
  }
});

// При натисканні на кнопку "Транспорт"
vehiclesBtn.addEventListener('click', async () => {
  contentDiv.innerHTML = '<h2 class="text-center bg-primary-subtle">Транспорт</h2>';
  const vehiclesData = await fetchData('https://swapi.dev/api/vehicles/');
  if (vehiclesData) {
    vehiclesData.results.forEach(vehicle => {
      const vehicleDiv = document.createElement('div');
      vehicleDiv.innerHTML = `<h3>${vehicle.name}</h3>
                               <p>Модель: ${vehicle.model}</p>
                               <p>Клас: ${vehicle.vehicle_class}</p>
                               <hr>`;
      contentDiv.appendChild(vehicleDiv);
    });
  }
});





