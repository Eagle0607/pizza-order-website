# Walkthrough - Pizza Order Website Setup & Launch

I have successfully resolved the port conflicts, run both the backend and frontend servers, and verified their integration. I have also initialized Git, configured the project for GitHub, and pushed the code to your repository.

## 🛠️ Changes & Tasks Completed

1. **Resolved Port 5000 Conflict:**
   * Detected that another Node process (User Management server) was occupying port `5000` via IPv6 (`[::1]`).
   * Safely terminated the conflicting process (PID `11196`).
   * Started the Pizzeria Express server, allowing it to correctly bind to port `5000` and connect to the local MongoDB database `pizzeria`.

2. **GitHub Repository Setup:**
   * Created a root [.gitignore](file:///c:/Users/Himanshu%20Saini/OneDrive/Documents/All%20Codes/Accenture%20Practice/HimanshuSaini/.gitignore) to exclude unnecessary files like `node_modules/` and `.angular/`.
   * Created a root [README.md](file:///c:/Users/Himanshu%20Saini/OneDrive/Documents/All%20Codes/Accenture%20Practice/HimanshuSaini/README.md) containing the tech stack, directory/file index, and setup/run instructions.
   * Initialized Git, staged all files, created the initial commit, and pushed the code to your GitHub repository: [pizza-order-website](https://github.com/Eagle0607/pizza-order-website).

3. **Application Verification:**
   * Ran the Angular Dev Server on `http://localhost:4200/`.
   * Used the browser subagent to verify page loading:
     * **Order Pizza (`/order`)**: Successfully loaded 4 pizza items (*Paneer Tikka*, *Chicken Italiano*, *Veggie Supreme*, and *Triple Chicken Feast*) directly from the MongoDB database.
     * **Build Pizza (`/build`)**: Verified that toppings/ingredients load and selecting options dynamically updates the total price (e.g. selecting a crust updates total to ₹80).

---

## 📸 Verification Demo

Below is the browser interaction recording demonstrating that the frontend successfully loads and communicates with your MongoDB backend:

![Browser Verification Recording](file:///C:/Users/Himanshu%20Saini/.gemini/antigravity-ide/brain/e56f8079-ebb1-4ac2-b833-2836e88d4e03/check_pizza_app_1784807001844.webp)
