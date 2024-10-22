```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Musafir.com</title>
    <style>
        /* Global Reset */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Arial', sans-serif;
            background-color: #f5f5f5;
            padding: 20px;
        }

        /* Header */
        header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px;
            background-color: white;
            border-bottom: 1px solid #ccc;
        }

        .logo h1 {
            color: #007BFF;
            font-size: 24px;
        }

        /* Hero Section */
        .hero {
            background: url('https://static.vecteezy.com/system/resources/thumbnails/030/028/507/small_2x/aerial-view-forest-moody-fog-peaceful-landscape-freedom-scene-beautiful-nature-wallpaper-photo.jpg') no-repeat center center/cover;
            height: 400px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 36px;
            font-weight: bold;
        }

        /* Search Bar */
        .search-bar {
            display: flex;
            justify-content: center;
            margin: 20px 0;
        }

        .search-bar input {
            padding: 10px;
            border-radius: 30px;
            border: 1px solid #ccc;
            width: 300px;
        }

        .search-bar button {
            padding: 10px 20px;
            margin-left: 10px;
            background-color: #007BFF;
            border: none;
            border-radius: 30px;
            color: white;
            cursor: pointer;
        }

        /* Main Container */
        .main-container {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        /* Destination Card */
        .destination-card {
            background-color: rgba(255, 255, 255, 0.7);
            padding: 20px;
            border-radius: 12px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: relative;
        }

        .destination-card img {
            width: 400px;
            height: 400px;
            border-radius: 10px;
            object-fit: cover;
            cursor: pointer;
        }

        .destination-details {
            flex: 1;
            margin-left: 20px;
        }

        .destination-details h3 {
            font-size: 24px;
            margin-bottom: 10px;
        }

        .destination-details p {
            color: #555;
            margin-bottom: 10px;
        }

        .hotel-info {
            font-size: 14px;
            color: #888;
            margin-bottom: 5px;
        }

        /* Save (Heart) and Delete (Trash) Icons */
        .icon-btn {
            background-color: transparent;
            border: none;
            cursor: pointer;
            font-size: 24px;
        }

        .icon-btn.heart {
            color: #888;
            transition: color 0.3s ease;
        }

        .icon-btn.heart.active {
            color: red;
        }

        /* Modal Styles */
        .modal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
            justify-content: center;
            align-items: center;
        }

        .modal-content {
            background-color: white;
            padding: 20px;
            border-radius: 12px;
            text-align: center;
            position: relative;
        }

        .modal-content img {
            width: 80%;
            border-radius: 10px;
            margin-bottom: 20px;
        }

        .modal-content .close-btn {
            position: absolute;
            top: 10px;
            right: 20px;
            font-size: 20px;
            background: none;
            border: none;
            cursor: pointer;
        }

        /* Itinerary Section */
        .itinerary-container {
            margin-top: 20px;
        }

        .itinerary-card {
            background-color: white;
            padding: 20px;
            border-radius: 12px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            margin-bottom: 10px;
        }

        /* Star Rating */
        .stars {
            display: flex;
            justify-content: center;
            margin: 20px 0;
        }

        .stars i {
            font-size: 30px;
            color: gray;
            cursor: pointer;
        }

        .stars i.active {
            color: gold;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
            .destination-card {
                flex-direction: column;
                align-items: flex-start;
            }

            .destination-details {
                margin-left: 0;
                margin-top: 10px;
            }

            .search-bar input {
                width: 100%;
            }

            .search-bar {
                flex-direction: column;
                align-items: center;
            }

            .search-bar button {
                margin-left: 0;
                margin-top: 10px;
            }
        }

        /* Footer */
        footer {
            background-color: #0d0d0d;
            color: #e0e0e0;
            padding: 20px;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            border-top: 2px solid #333;
            margin-top: 20px; 
        }

        .footer-section {
            margin: 10px;
            flex: 1 1 200px;
        }

        .footer-section h3 {
            margin-bottom: 10px;
            color: #ff1744;
        }

        .footer-section ul {
            list-style: none;
            padding: 0;
        }

        .footer-section ul li {
            margin: 8px 0;
        }

        .footer-section a {
            color: #e0e0e0;
            text-decoration: none;
        }

        .footer-section a:hover {
            color: #ff1744;
        }

        .social-media-icons {
            display: flex;
            gap: 10px;
        }

        .social-media-icons img {
            width: 24px; 
            height: 24px; 
            transition: transform 0.3s ease;
        }

        .social-media-icons a {
            color: #e0e0e0;
            font-size: 24px;
            transition: color 0.3s ease;
        }

        .social-media-icons a:hover {
            color: #ff1744;
        }
    </style>
</head>

<body>

    <header>
        <div class="logo">
            <h1>Musafir.com</h1>
        </div>
    </header>

    <div class="hero">
        Explore the World with Us
    </div>

    <div class="search-bar">
        <input type="text" id="searchInput" placeholder="Search destinations...">
        <button onclick="searchDestinations()">Search</button>
    </div>

    <div class="main-container" id="destinationsContainer">
        </div>

    <div class="itinerary-container">
        <h2>My Itinerary</h2>
        <div id="itineraryContainer"></div>
    </div>

    <div id="imageModal" class="modal">
        <div class="modal-content">
            <button class="close-btn" onclick="closeModal()">✖</button>
            <img id="modalImage" src="" alt="Enlarged Destination" style="width: 600px; height: 600px;">
            <div id="modalDescription"></div>
        </div>
    </div>

 <footer>
        <div class="footer-section">
            <h3>About Us</h3>
            <p>We are a travel platform dedicated to helping you find the best destinations and experiences. Discover new places, explore different cultures, and create unforgettable memories. </p>
        </div>
        <div class="footer-section">
            <h3>Contact</h3>
            <ul>
                <li>Email: <a href="mailto:contact@Musafir.com">contact@Musafir.com</a></li>
                <li>Phone: +1-800-Musafir</li>
            </ul>
        </div>
        <div class="footer-section">
            <h3>Follow Us</h3>
            <div class="social-media-icons">
                <a href="#" aria-label="Facebook">
                    <img src="https://img.icons8.com/color/48/000000/facebook.png" alt="Facebook Icon">
                </a>
                <a href="#" aria-label="Twitter">
                    <img src="https://img.icons8.com/color/48/000000/twitter--v1.png" alt="Twitter Icon">
                </a>
                <a href="#" aria-label="Instagram">
                    <img src="https://img.icons8.com/color/48/000000/instagram-new--v1.png" alt="Instagram Icon">
                </a>
                <a href="#" aria-label="YouTube">
                    <img src="https://img.icons8.com/color/48/000000/youtube-play.png" alt="YouTube Icon">
                </a>
            </div>
        </div>
    </footer>

    <script>
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

            }
        ];

        let itinerary = JSON.parse(localStorage.getItem('itinerary')) || [];

        function renderDestinations() {
            const container = document.getElementById('destinationsContainer');
            container.innerHTML = ''; 

            destinations.forEach(dest => {
                const isSaved = itinerary.some(itinDest => itinDest.id === dest.id);
                container.innerHTML += `
            <div class="destination-card">
                <img src="${dest.img}" alt="${dest.name}" onclick="showModal('${dest.img}', '${dest.description}', '${dest.hotels.join(', ')}')">
                <div class="destination-details">
                    <h3>${dest.name}</h3>
                    <p>${dest.description}</p>
                    <p>Cost: ${dest.cost}</p>
                    <p>Duration: ${dest.duration}</p>
                    <p class="hotel-info">Hotels: ${dest.hotels.join(', ')}</p>
                    <p class="hotel-info">Places: ${dest.activities.join(', ')}</p>
                </div>
                <button class="icon-btn heart ${isSaved ? 'active' : ''}" onclick="toggleItinerary(${dest.id}, this)">❤️</button>
            </div>
        `;
            });
        }


        function showModal(img, description, hotels) {
            document.getElementById('imageModal').style.display = 'flex';
            document.getElementById('modalImage').src = img;
            document.getElementById('modalDescription').innerHTML = `
        <p>${description}</p>
        <p>Hotels: ${hotels}</p>
    `;
        }

        function closeModal() {
            document.getElementById('imageModal').style.display = 'none';
        }

        function toggleItinerary(id, heartBtn) {
    const destIndex = itinerary.findIndex(dest => dest.id === id);

    if (destIndex > -1) {
        itinerary.splice(destIndex, 1); 
        heartBtn.classList.remove('active');
    } else {
        const selectedDestination = destinations.find(dest => dest.id === id);
        itinerary.push(selectedDestination);
        heartBtn.classList.add('active');
    }

    localStorage.setItem('itinerary', JSON.stringify(itinerary));
    renderItinerary();
}


        function renderItinerary() {
            const container = document.getElementById('itineraryContainer');
            container.innerHTML = '';

            if (itinerary.length === 0) {
                container.innerHTML = '<p>No destinations in your itinerary yet.</p>';
                return;
            }

            itinerary.forEach(dest => {
                container.innerHTML += `
                    <div class="itinerary-card">
                        <h4>${dest.name}</h4>
                        <p>Activities: ${dest.activities.join(', ')}</p>
                        <p>Cost: ${dest.cost}</p>
                        <p>Duration: ${dest.duration}</p>
                        <button class="icon-btn" onclick="removeFromItinerary(${dest.id})">Remove</button>
                    </div>
                `;
            });
        }

        function removeFromItinerary(id) {
            itinerary = itinerary.filter(dest => dest.id !== id);
            localStorage.setItem('itinerary', JSON.stringify(itinerary));
            renderItinerary(); 
            renderDestinations();
        }

        function searchDestinations() {
            const query = document.getElementById('searchInput').value.toLowerCase();
            const filteredDestinations = destinations.filter(dest =>
                dest.name.toLowerCase().includes(query) ||
                dest.description.toLowerCase().includes(query) ||
                dest.activities.some(activity => activity.toLowerCase().includes(query))
            );

            const container = document.getElementById('destinationsContainer');
            container.innerHTML = '';

            if (filteredDestinations.length > 0) {
                filteredDestinations.forEach(dest => {
                    container.innerHTML += `
                        <div class="destination-card">
                            <img src="${dest.img}" alt="${dest.name}" onclick="showModal('${dest.img}', '${dest.description}', '${dest.hotels.join(', ')}')">
                            <div class="destination-details">
                                <h3>${dest.name}</h3>
                                <p>${dest.description}</p>
                                <p>Cost: ${dest.cost}</p>
                                <p>Duration: ${dest.duration}</p>
                                <p class="hotel-info">Hotels: ${dest.hotels.join(', ')}</p>
                                <p class="hotel-info">Places: ${dest.activities.join(', ')}</p>
                            </div>
                            <button class="icon-btn heart" onclick="toggleItinerary(${dest.id}, this)">❤️</button>
                        </div>
                    `;
                });
            } else {
                container.innerHTML = '<p>No destinations found for your search.</p>';
            }
        }

        renderDestinations();
        renderItinerary();
    </script>
</body>

</html>

```