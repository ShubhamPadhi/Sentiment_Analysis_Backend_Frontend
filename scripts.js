// scripts.js

document.getElementById('sentimentForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    const loadingBar = document.getElementById('loadingBar');
    loadingBar.style.display = 'block';
    loadingBar.style.width = '0%';

 
    let width = 0;
    const interval = setInterval(() => {
        if (width >= 100) {
            clearInterval(interval);
        } else {
            width++;
            loadingBar.style.width = width + '%';
        }
    }, 10); 
    setTimeout(() => {
     
        loadingBar.style.display = 'none';
        
        
        const resultContainer = document.getElementById('resultContainer');
        const predictionResult = document.getElementById('predictionResult');
        predictionResult.textContent = 'Predicted Sentiment: Positive'; 
        resultContainer.style.display = 'block';
    }, 2000); 
});
