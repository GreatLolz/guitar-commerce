# guitar-commerce
E‑commerce web application for discovering and purchasing musical instruments and accessories.

Built with React + Vite + TypeScript and Stripe for payments, alongside a .NET backend API and SQL Server database.

# Requirements

### Production:

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

### Development:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [.NET SDK](https://dotnet.microsoft.com/en-us/download)
- MSSQL Server 2022 instance

# Setup

### Production

1. Copy `.env.example` to `.env` and review values.
2. Build and run with Docker Compose:
    ```bash
    docker compose up --build
    ```

### Development

1. Clone and run API in development mode: \
For information about running the API in development mode, see [here](https://github.com/greatlolz/guitarcommerce-api).

2. Set environment variables:
    ```bash
    VITE_API_URL = "" # leave empty if using local api
    VITE_STRIPE_PUBLIC_KEY = "pk_test_..." # use test key
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Run the app in development mode:
    ```bash
    npm run dev
    ```

Access the app at `http://localhost:5181`.

# License

This project is licensed under the MIT License.