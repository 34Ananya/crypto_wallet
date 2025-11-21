window.addEventListener('load', () => {
  // Check if the URL has ?loggedin=true
  const urlParams = new URLSearchParams(window.location.search);
  const isLoggedIn = urlParams.get('loggedin');

  if (isLoggedIn === 'true') {
    // Find the wallet button by the ID we just added
    const walletButton = document.getElementById('wallet-button');
    
    if (walletButton) {
      // --- This is the "logged in" state ---
      
      // 1. Change the text
      walletButton.innerText = "Welcome! (Your Wallet)";
      
      // 2. Stop it from linking back to the login page
      walletButton.href = "#"; 
      
      // 3. (Optional) Make it green to show success
      walletButton.style.backgroundColor = "#28a745";
      walletButton.style.borderColor = "#28a745";
    }
  }
});