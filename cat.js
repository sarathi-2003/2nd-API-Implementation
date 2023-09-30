   // Function to fetch and display cat images
   function fetchCatImages() {
    fetch('https://api.thecatapi.com/v1/images/search?limit=10')
        .then(response => response.json())
        .then(data => {
            const catImagesDiv = document.getElementById('catImages');

            // Clear any previous images
            catImagesDiv.innerHTML = '';

            // Display each cat image
            data.forEach(cat => {
                const img = document.createElement('img');
                img.src = cat.url;
                img.alt = 'Cat';
                img.style.width = '300px'; // Adjust the width as needed
                catImagesDiv.appendChild(img);
            });
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

// Call the fetchCatImages function when the page loads
window.onload = fetchCatImages;