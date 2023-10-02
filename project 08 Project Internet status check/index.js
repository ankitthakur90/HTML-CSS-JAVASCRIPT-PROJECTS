

// This code adds an event listener that listens for the 'load' event on the window object and 
// calls the 'checkInterentConnection' function when the page is loaded.
window.addEventListener("load", checkInterentConnection);


// This is the function that gets called when the page is loaded.
function checkInterentConnection() {

  // These lines get references to HTML elements with specific IDs.
  const statusText = document.getElementById("statusText");
  const ipAddressText = document.getElementById("ipAddressText");
  const natworkStrengthText = document.getElementById("natworkStrengthText");

    // This line sets the text content of the 'statusText' element to "Checking...".

  statusText.textContent = "Checking...";



  // This condition checks if the user's browser is currently online (connected to the internet).
  if (navigator.onLine) {


    // If the browser is online, it sends a request to the "https://api.ipify.org?format=json" URL to get the public IP address.
    fetch("https://api.ipify.org?format=json")
    .then((response)=> response.json())
    .then((data)=>{

      // This block of code is executed when the IP address request is successful.
      ipAddressText.textContent = data.ip;  // Set the IP address in the 'ipAddressText' element.
      statusText.textContent = 'connected';  // // Update the status text to "connected".

    // Get information about the network connection (if available).
      const connection = navigator.connection;


// Check if the 'connection' object exists, and if so, get the downlink speed in Mbps.

      const natworkStrength = connection ?connection.downlink + 'Mbps' : 'unkonwn';

 // Set the network strength text in the 'natworkStrengthText' element.
      natworkStrengthText.textContent = natworkStrength;
    })
    .catch(()=>{
    // This block of code is executed if the browser is offline (not connected to the internet).

      statusText.textContent = "Disconnected";
      ipAddressText.textContent = "-";
      natworkStrengthText.textContent = "-";

    })
    

  } else {
    statusText.textContent = "Disconnected";
    ipAddressText.textContent = "-";
    natworkStrengthText.textContent = "-";
  }
}
