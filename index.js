const destinations = [
    {
        id: 1, 
        name: 'Paris', 
        description: 'Paris, often referred to as the "City of Lights," is known for its art, fashion, and culture. It’s a dream destination for lovers of history and art with iconic landmarks such as the Eiffel Tower, the Louvre Museum, and charming streets filled with cafes and boutiques.', 
        activities: ['Eiffel Tower', 'Louvre Museum', 'Notre-Dame Cathedral'],
        hotels: ['Hotel Le Meurice - Rue de Rivoli', 'Four Seasons Hotel George V - Avenue George V'],
        cost: '$1500', 
        duration: '5 days', 
        img: 'https://m.media-amazon.com/images/I/71oFVzj8piL._AC_UF894,1000_QL80_.jpg' 
    },
    {
        
        id: 2, 
        name: 'New York', 
        description: 'New York, also called "The Big Apple," is famous for its skyscrapers, museums, theaters, and endless activities. From Central Park to the Statue of Liberty, there’s no shortage of things to see and do in this fast-paced city.', 
        activities: ['Central Park', 'Times Square', 'Statue of Liberty'],
        hotels: ['The Plaza - 5th Avenue', 'The Ritz-Carlton - Central Park South'],
        cost: '$1800', 
        duration: '7 days', 
        img: 'https://i.natgeofe.com/k/5b396b5e-59e7-43a6-9448-708125549aa1/new-york-statue-of-liberty.jpg' 

    },
    {
        id: 3, 
        name: 'Tokyo', 
        description: 'Tokyo, the bustling capital of Japan, is known for its blend of traditional and futuristic attractions. From the serene Meiji Shrine to the ultra-modern Shibuya Crossing, Tokyo offers a rich experience of Japan’s history and future.', 
        activities: ['Shibuya Crossing', 'Tokyo Tower', 'Meiji Shrine'],
        hotels: ['Park Hyatt Tokyo - Shinjuku', 'The Ritz-Carlton - Roppongi'],
        cost: '$2200', 
        duration: '6 days', 
        img: 'https://t3.ftcdn.net/jpg/02/65/23/70/360_F_265237090_Muthvb72m2POYFjyx7F5UCQLh9JdBtKN.jpg' 

    },
    { 
        id: 4, 
        name: 'Sydney', 
        description: 'Sydney is Australia’s largest city and a global metropolis surrounded by natural beauty. The Sydney Opera House, Bondi Beach, and Harbour Bridge offer both scenic and cultural experiences for tourists.', 
        activities: ['Sydney Opera House', 'Bondi Beach', 'Harbour Bridge'],
        hotels: ['The Langham - Millers Point', 'Shangri-La Hotel - The Rocks'],
        cost: '$2500', 
        duration: '5 days', 
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Sydney_Opera_House_-_Dec_2008.jpg/800px-Sydney_Opera_House_-_Dec_2008.jpg' 
    },
    { 
        id: 5, 
        name: 'Dubai', 
        description: 'Dubai, a city that has grown rapidly from a desert to a global tourist hub, offers some of the world’s most luxurious experiences. The Burj Khalifa, extravagant shopping malls, and adventurous desert safaris make Dubai a popular destination.', 
        activities: ['Burj Khalifa', 'Desert Safari', 'Dubai Mall'],
        hotels: ['Burj Al Arab - Jumeirah Beach', 'Atlantis The Palm - Crescent Road'],
        cost: '$1600', 
        duration: '4 days', 
        img: 'https://thumbs.dreamstime.com/b/atlantis-palm-dubai-night-scene-31546178.jpg' 
    },
    { 
        id: 6, 
        name: 'London', 
        description: 'London is a historic and modern city with landmarks like Big Ben, Buckingham Palace, and the Tower of London. It’s a bustling metropolis full of history, culture, and shopping.', 
        activities: ['Big Ben', 'London Eye', 'Tower of London'],
        hotels: ['The Savoy - Strand', 'The Ritz London - Piccadilly'],
        cost: '$2000', 
        duration: '6 days', 
        img: 'https://t4.ftcdn.net/jpg/02/57/75/51/360_F_257755130_JgTlcqTFxabsIKgIYLAhOFEFYmNgwyJ6.jpg' 
    },
    { 
        id: 7, 
        name: 'Rome', 
        description: 'Rome, known as "The Eternal City," is full of ancient ruins, religious landmarks, and Renaissance art. With the Colosseum, Vatican City, and countless historical sites, it is a journey through time.', 
        activities: ['Colosseum', 'Vatican City', 'Pantheon'],
        hotels: ['Hotel de Russie - Via del Babuino', 'Hassler Roma - Trinità dei Monti'],
        cost: '$1800', 
        duration: '5 days', 
        img: 'https://media.istockphoto.com/id/539115110/photo/colosseum-in-rome-and-morning-sun-italy.jpg?s=612x612&w=0&k=20&c=9NtFxHI3P2IBWRY9t0NrfPZPR4iusHmVLbXg2Cjv9Fs=' 
    },
    { 
        id: 8, 
        name: 'Barcelona', 
        description: 'Barcelona, a city in Spain known for the work of Antoni Gaudí, is famous for its art and architecture. The vibrant La Rambla, Sagrada Familia, and sunny beaches make it a perfect Mediterranean escape.', 
        activities: ['Sagrada Familia', 'Park Güell', 'La Rambla'],
        hotels: ['Hotel Arts - Port Olímpic', 'Majestic Hotel - Passeig de Gràcia'],
        cost: '$1700', 
        duration: '5 days', 
        img: 'https://www.barcelo.com/guia-turismo/wp-content/uploads/2019/04/home-barcelona-1.jpg' 
    },
    { 
        id: 9, 
        name: 'Cape Town', 
        description: 'Cape Town is a coastal city in South Africa, offering stunning landscapes and rich history. Visitors can enjoy the majestic Table Mountain, the historic Robben Island, and the vibrant waterfront.', 
        activities: ['Table Mountain', 'Robben Island', 'Kirstenbosch Gardens'],
        hotels: ['One&Only Cape Town - Waterfront', 'Mount Nelson Hotel - Gardens'],
        cost: '$2100', 
        duration: '7 days', 
        img: 'https://images.ctfassets.net/i3kf1olze1gn/2yyImvuFidEenDWwrpFEoB/2421030880379f6b35aaa0721860b52e/cape_town_city.jpg?q=55&w=640' 
    },
    { 
        id: 10, 
        name: 'Bangkok', 
        description: 'Bangkok, the capital of Thailand, is a vibrant city known for its bustling streets, stunning temples, and rich culture. Famous for street markets and nightlife, Bangkok offers an exciting mix of modernity and tradition.', 
        activities: ['Grand Palace', 'Wat Arun', 'Chatuchak Market'],
        hotels: ['Mandarin Oriental - Chao Phraya River', 'The Peninsula - Thonburi'],
        cost: '$1300', 
        duration: '4 days', 
        img: 'https://static.langimg.com/photo/imgsize-475129,msid-84089039/navbharat-times.jpg' 
    },
];

        
let savedPlaces = JSON.parse(localStorage.getItem('savedPlaces')) || [];
let itinerary = JSON.parse(localStorage.getItem('itinerary')) || [];

// Function to render destinations
function renderDestinations() {
    const container = document.getElementById('destinationsContainer');
    container.innerHTML = '';

    destinations.forEach(dest => {
        const isSaved = savedPlaces.some(saved => saved.id === dest.id);
        container.innerHTML += `
            <div class="destination-card" id="dest-${dest.id}">
                <img src="${dest.img}" alt="${dest.name}" onclick="showModal('${dest.img}', '${dest.description}', '${dest.hotels.join(', ')}')">
                <div class="destination-details">
                    <h3>${dest.name}</h3>
                    <p>${dest.description}</p>
                    <p>Cost: ${dest.cost}</p>
                    <p>Duration: ${dest.duration}</p>
                    <p class="hotel-info">Hotels: ${dest.hotels.join(', ')}</p>
                    <p class="hotel-info">Places: ${dest.activities.join(', ')}</p>
                </div>
                <button class="icon-btn heart ${isSaved ? 'active' : ''}" onclick="savePlace(${dest.id}, this)">❤️</button>
                <button class="icon-btn" onclick="removeDisplay(${dest.id})">❌</button>
            </div>
        `;
    });
}

// Function to save a place to savedPlaces
function savePlace(id, heartBtn) {
    const selectedDestination = destinations.find(dest => dest.id === id);
    const isAlreadySaved = savedPlaces.some(dest => dest.id === id);

    if (!isAlreadySaved) {
        savedPlaces.push(selectedDestination);
        heartBtn.classList.add('active'); // Mark the place as saved (red heart)
        localStorage.setItem('savedPlaces', JSON.stringify(savedPlaces));
        renderSavedPlaces();  // Render saved places immediately
    } else {
        alert('This place is already saved.');
    }
}

// Function to render saved places with delete button
function renderSavedPlaces() {
    const container = document.getElementById('savedDestinationsContainer');
    container.innerHTML = '';

    if (savedPlaces.length === 0) {
        container.innerHTML = '<p>No saved places yet.</p>';
        return;
    }

    savedPlaces.forEach((dest, index) => {
        container.innerHTML += `
            <div class="destination-card" id="saved-${dest.id}">
                <img src="${dest.img}" alt="${dest.name}" style="width: 150px; height: 150px;">
                <div class="destination-details">
                    <h3>${dest.name}</h3>
                    <p>${dest.description}</p>
                    <p>Cost: ${dest.cost}</p>
                    <p>Duration: ${dest.duration}</p>
                    <button class="delete-btn" onclick="deleteSavedPlace(${index})">❌ Delete</button>
                </div>
            </div>
        `;
    });
}

// Function to delete a saved place
function deleteSavedPlace(index) {
    // Remove the place from savedPlaces array
    savedPlaces.splice(index, 1);

    // Update the localStorage with the new savedPlaces array
    localStorage.setItem('savedPlaces', JSON.stringify(savedPlaces));

    // Re-render the saved places to reflect the change
    renderSavedPlaces();
}

// Function to toggle the visibility of saved places container
function toggleSavedPlaces() {
    const savedContainer = document.getElementById('savedPlacesContainer');
    if (savedContainer.style.display === 'none' || savedContainer.style.display === '') {
        savedContainer.style.display = 'block';  // Show the container
        renderSavedPlaces(); // Also render the saved places when showing
    } else {
        savedContainer.style.display = 'none';  // Hide the container
    }
}

// Function to remove the display of a destination
function removeDisplay(id) {
    const destCard = document.getElementById(`dest-${id}`);
    if (destCard) {
        destCard.style.display = 'none'; // Hide the destination card
    }
}

// Function to save a destination to the itinerary
function saveToItinerary(id, heartBtn) {
    const selectedDestination = destinations.find(dest => dest.id === id);
    const isAlreadySaved = itinerary.some(dest => dest.id === id);

    if (!isAlreadySaved) {
        itinerary.push(selectedDestination);
        heartBtn.classList.add('active'); // Change heart color to active
        localStorage.setItem('itinerary', JSON.stringify(itinerary));
        renderItinerary();
    } else {
        alert("This destination is already added to your itinerary.");
    }
}

// Function to render the itinerary
function renderItinerary() {
    const container = document.getElementById('itineraryContainer');
    container.innerHTML = '';

    if (itinerary.length === 0) {
        container.innerHTML = '<p>No destinations in your itinerary yet.</p>';
    }

    itinerary.forEach(dest => {
        container.innerHTML += `
            <div class="itinerary-card">
                <h4>${dest.name}</h4>
                <p>Activities: ${dest.activities.join(', ')}</p>
                <p>Cost: ${dest.cost}</p>
                <p>Duration: ${dest.duration}</p>
            </div>
        `;
    });
}

// Function to show modal with enlarged image and description
function showModal(img, description, hotels) {
    document.getElementById('imageModal').style.display = 'flex';
    document.getElementById('modalImage').src = img;
    document.getElementById('modalDescription').innerHTML = `
        <p>${description}</p>
        <p>Hotels: ${hotels}</p>
    `;
}

// Close Modal
function closeModal() {
    document.getElementById('imageModal').style.display = 'none';
}

// Star rating functionality
function rateStar(starNum) {
    const stars = document.querySelectorAll('.star');
    stars.forEach((star, index) => {
        if (index < starNum) {
            star.classList.add('active');
        } else {
            star.classList.remove('active');
        }
    });
}

// Search functionality
function searchDestinations() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const filteredDestinations = destinations.filter(dest => dest.name.toLowerCase().includes(query));

    const container = document.getElementById('destinationsContainer');
    container.innerHTML = '';

    if (filteredDestinations.length > 0) {
        filteredDestinations.forEach(dest => {
            container.innerHTML += `
                <div class="destination-card" id="dest-${dest.id}">
                    <img src="${dest.img}" alt="${dest.name}" onclick="showModal('${dest.img}', '${dest.description}', '${dest.hotels.join(', ')}')">
                    <div class="destination-details">
                        <h3>${dest.name}</h3>
                        <p>${dest.description}</p>
                        <p>Cost: ${dest.cost}</p>
                        <p>Duration: ${dest.duration}</p>
                        <p class="hotel-info">Hotels: ${dest.hotels.join(', ')}</p>
                        <p class="hotel-info">Places: ${dest.activities.join(', ')}</p>
                    </div>
                    <button class="icon-btn heart" onclick="saveToItinerary(${dest.id}, this)">❤️</button>
                    <button class="icon-btn" onclick="removeDisplay(${dest.id})">❌</button>
                </div>
            `;
        });
    } else {
        container.innerHTML = '<p>No destinations found for your search.</p>';
    }
}

// Initialize rendering
renderDestinations();
renderItinerary();
