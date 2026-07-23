# Pizza Order Website (HONProject)

A premium, full-stack web application designed for ordering pre-configured pizzas and building highly customized pizzas with specific crusts, sauces, cheeses, and ingredients.

---

## 🚀 Tech Stack

### Frontend (UI)
*   **Framework:** Angular (v16.2.x)
*   **Styling:** Bootstrap (v5.3.x) & Vanilla CSS
*   **Icons:** Bootstrap Icons (v1.13.x)
*   **State & HTTP:** RxJS & Angular HttpClient

### Backend (Server)
*   **Runtime:** Node.js (v18+)
*   **Framework:** Express.js (v5.2.x)
*   **CORS & Body Parser:** Built-in middleware configuration

### Database (Data Store)
*   **Database:** MongoDB
*   **ODM:** Mongoose (v9.2.x)

---

## 📁 Directory & File Structure

This repository is organized as a monorepo containing two main folders: `frontend` and `backend`.

### 1. Backend (`/backend`)
Handles the REST API endpoints and interacts with the MongoDB database.

*   `server.js`: The main entry point of the Node/Express server. Registers CORS, parses JSON payloads, mounts API routes, and listens on port `5000`.
*   `config/`
    *   `db.js`: Contains the Mongoose database connection string pointing to local MongoDB (`mongodb://127.0.0.1:27017/pizzeria`).
*   `models/`: Defines Mongoose schemas for the database collections.
    *   `pizzaModel.js`: Model for pre-configured pizzas (Paneer Tikka, Veggie Paradise, Pepperoni, etc.).
    *   `ingredientModel.js`: Model for custom toppings/ingredients (Mushrooms, Olives, Pepperoni, Jalapenos, etc.).
    *   `crustModel.js`: Model for pizza crust options (Thin Crust, Cheese Burst, Wheat Thin Crust).
    *   `sauceModel.js`: Model for pizza sauce options (Tomato Sauce, Marinara, Pesto).
    *   `cheeseModel.js`: Model for cheese types (Mozzarella, Cheddar).
    *   `cartModel.js`: Model to store items currently added to the shopping cart.
*   `routes/`: Houses the API endpoints.
    *   `pizzaRoutes.js`: Handles `GET /api/pizzas` to retrieve pre-configured pizzas.
    *   `ingredientRoutes.js`: Handles `GET /api/ingredients` to fetch toppings/ingredients.
    *   `crustRoutes.js`: Handles `GET /api/crusts` to get crust variations.
    *   `sauceRoutes.js`: Handles `GET /api/sauces` to retrieve sauce options.
    *   `cheeseRoutes.js`: Handles `GET /api/cheeses` to retrieve cheese types.
    *   `cartRoutes.js`: CRUD endpoints (`GET`, `POST`, `PUT`, `DELETE`) for items in `/api/cart`.

### 2. Frontend (`/frontend`)
The user interface built with Angular.

*   `src/app/`
    *   `navbar/`: Header navigation component present across all views.
    *   `home/`: The landing page welcoming users to the Pizzeria.
    *   `order-pizza/`: Shows pre-configured pizzas fetched from the backend. Users can add them directly to the cart.
    *   `build-pizza/`: An interactive workspace where users can build a custom pizza step-by-step (select crust, sauce, cheese, toppings) and view real-time price updates.
    *   `cart/`: The cart view displaying added items, total cost, quantity controls, and checkout flow.
    *   `services/`
        *   `pizza.service.ts`: Angular Service containing all the HTTP helper methods (`getPizzas`, `getIngredients`, `addToCart`, etc.) to communicate with the Node.js API server.
*   `src/index.html`: Main HTML entry page with responsive viewport settings and links.
*   `angular.json` / `tsconfig.json`: Angular project and TypeScript compiler configurations.

---

## 🛠️ Installation & Running the Project

### Prerequisites
1.  **Node.js** (v18 or higher) installed on your system.
2.  **MongoDB** running locally on port `27017`.

---

### Step 1: Start MongoDB
Ensure your local MongoDB instance is running. The database name is `pizzeria`.

---

### Step 2: Set Up and Run the Backend
1.  Open your terminal and navigate to the backend directory:
    ```bash
    cd backend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the Express server:
    ```bash
    node server.js
    ```
    *You should see output:*
    `Server running on port 5000`
    `MongoDB Connected`

---

### Step 3: Set Up and Run the Frontend
1.  Open a new terminal window and navigate to the frontend directory:
    ```bash
    cd frontend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the Angular development server:
    ```bash
    npm start
    ```
4.  Open your browser and navigate to:
    `http://localhost:4200/`
