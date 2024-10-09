// Get elements from the DOM
const webcamElement = document.getElementById('webcam');
const captureButton = document.getElementById('captureButton');
const votingOptions = document.getElementById('votingOptions');
const voteStatus = document.getElementById('voteStatus');

// Function to start webcam stream
async function startWebcam() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        webcamElement.srcObject = stream;
    } catch (error) {
        alert('Unable to access webcam: ' + error);
    }
}

// Simulate face recognition
function recognizeFace() {
    // Simulate successful face recognition
    return true; // In a real scenario, you would check against a face recognition model
}

// Event listener for the capture button
captureButton.addEventListener('click', () => {
    const recognized = recognizeFace();
    
    if (recognized) {
        votingOptions.style.display = 'block'; // Show voting options
    } else {
        alert('Face not recognized. Please try again.');
    }
});

// Event listener for vote buttons
const voteButtons = document.querySelectorAll('.voteButton');
voteButtons.forEach(button => {
    button.addEventListener('click', () => {
        const candidate = button.getAttribute('data-candidate');
        voteStatus.style.display = 'block';
        voteStatus.textContent = `You voted for: ${candidate}`;
    });
});

// Start webcam stream on page load
startWebcam();
