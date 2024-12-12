# Mortgage Calculator API

A simple API to calculate mortgage payments based on loan amount, interest rate, duration, and payment frequency.

## Features

- Calculate mortgage payments with semi-annual compounding.
- Supports various payment frequencies (monthly, biweekly, etc.).

## Endpoints

### `GET /`

- Returns a message confirming the API is running.

### `POST /calculate`

- **Body Parameters**:
  - `loanAmount` (number): Total loan amount.
  - `interestRate` (number): Annual interest rate (percentage).
  - `durationYears` (number): Loan duration in years.
  - `paymentFrequency` (number): Number of payments per year (e.g., 12 for monthly, 26 for biweekly).
- **Response**:
  - Success: `{ "monthlyPayment": "1234.56" }`
  - Error: `{ "error": "All fields are required!" }`

## How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   ```
