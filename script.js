const choices = ['D', 'T', 'T']; // Updated choices
let predictions = [];

function createCircle() {
    const circle = document.createElement('div');
    circle.className = 'circle';
    document.getElementById('circleContainer').appendChild(circle);
}

function resetCircles() {
    const circleContainer = document.getElementById('circleContainer');
    circleContainer.innerHTML = '';
    for (let i = 0; i < 6; i++) {
        createCircle();
    }
    predictions = [];
    document.getElementById('buttonContainer').style.display = 'block';
    document.getElementById('predictionResult').innerHTML = ''; // Clear prediction result
    document.getElementById('predictButton').style.display = 'block'; // Show predict button
}

function predict(choice) {
    if (predictions.length < 6) {
        const circle = document.getElementsByClassName('circle')[predictions.length];
        circle.style.backgroundColor = getColor(choice);
        circle.textContent = choice === 'Tiger' ? 'T' : choice.charAt(0); // Use the first character
        predictions.push(choice);
    }
}

function getColor(choice) {
    switch(choice) {
        case 'Dragon':
            return '#66b3ff'; // Blue
        case 'Tie':
            return '#85e085'; // Green
        case 'Tiger':
            return '#ffcc66'; // Yellow Orange
        default:
            return '#ccc'; // Default color
    }
}

function handlePredict() {
    if (predictions.length === 6) {
        const predictionResult = document.getElementById('predictionResult');
        const resultIndex = Math.floor(Math.random() * predictions.length);
        const result = predictions[resultIndex];

        // Determine the adjective for the prediction
        let adjective;
        switch(result) {
            case 'D':
                adjective = 'Great';
                break;
            case 'T':
                adjective = 'Interesting';
                break;
            default:
                adjective = 'Exciting';
        }

        // Construct the prediction message
        const predictionMessage = `${adjective} prediction: ${result === 'T' ? 'Tiger' : result}`;

        // Display the prediction
        predictionResult.textContent = predictionMessage;
        
        // Hide the prediction buttons
        document.getElementById('buttonContainer').style.display = 'none';
    } else {
        alert("Please fill all circles before predicting.");
    }
}


document.getElementById('dragonButton').addEventListener('click', () => predict('Dragon'));
document.getElementById('tieButton').addEventListener('click', () => predict('Tie'));
document.getElementById('tigerButton').addEventListener('click', () => predict('Tiger'));
document.getElementById('predictButton').addEventListener('click', handlePredict);
document.getElementById('resetButton').addEventListener('click', resetCircles);

resetCircles();
