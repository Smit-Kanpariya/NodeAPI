# Node.js API with MongoDB Integration

A simple Node.js API for managing product data with full CRUD functionality and MongoDB as the database.

---

## Features

- Middleware for parsing JSON and URL-encoded request bodies.
- Endpoints for:
  - Creating new products.
  - Retrieving all products or specific products by ID.
  - Updating existing products.
  - Deleting products.
- MongoDB integration using Mongoose.

---

## Prerequisites

- Node.js (version 14 or higher)
- MongoDB Atlas or local MongoDB server
- npm or yarn package manager

---

## Installation

1. Clone the repository:
   ```bash
   git clone <repository_url>
   cd <repository_folder>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Update the MongoDB connection string in the `mongoose.connect` method in `app.js`.

---

## Usage

1. Start your MongoDB server (local or Atlas).
2. Run the application:
   ```bash
   node app.js
   ```
3. Access the API on `http://localhost:3000/`.

---

## API Endpoints

**Base URL:** `http://localhost:3000`

### GET /

- Returns a welcome message.

### POST /products

- Adds a new product.
- **Request Body:**
  ```json
  {
    "name": "Product Name",
    "price": 100,
    "description": "Product Description",
    "category": "Product Category",
    "inStock": true
  }
  ```

### GET /products

- Retrieves all products.

### GET /products/:id

- Retrieves a product by its ID.

### PUT /products/:id

- Updates a product by its ID.
- **Request Body:** Provide only the fields you wish to update.

### DELETE /products/:id

- Deletes a product by its ID.

---

## Example Product Schema

The project uses the following product schema:

```javascript
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  category: { type: String },
  inStock: { type: Boolean, default: true }
});

module.exports = mongoose.model("Product", productSchema);
```

---

## Dependencies

- `express`: Framework for API routing and middleware.
- `mongoose`: MongoDB object modeling tool.

---

## License

This project is licensed under the MIT License
