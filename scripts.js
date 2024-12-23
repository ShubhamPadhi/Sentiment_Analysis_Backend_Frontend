// scripts.js

document.getElementById('sentimentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Show the loading bar
    const loadingBar = document.getElementById('loadingBar');
    loadingBar.style.display = 'block';
    loadingBar.style.width = '0%';

    // Simulate loading progress (you can remove this in production)
    let width = 0;
    const interval = setInterval(() => {
        if (width >= 100) {
            clearInterval(interval);
        } else {
            width++;
            loadingBar.style.width = width + '%';
        }
    }, 10); // Adjust the speed as necessary

    // Mock AJAX request (replace with actual AJAX call)
    setTimeout(() => {
        // Hide the loading bar
        loadingBar.style.display = 'none';
        
        // Show the result (mock result)
        const resultContainer = document.getElementById('resultContainer');
        const predictionResult = document.getElementById('predictionResult');
        predictionResult.textContent = 'Predicted Sentiment: Positive'; // Example result
        resultContainer.style.display = 'block';
    }, 2000); // Simulate a delay of 2 seconds (replace with actual response time)
});
