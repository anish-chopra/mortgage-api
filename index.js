const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json()); // To handle JSON body parsing

app.get("/", (req, res) => {
  res.send("Mortgage Calculator API is running!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

function calculateMortgage(
  loanAmount,
  interestRate,
  durationYears,
  paymentFrequency
) {
  // Adjust for semi-annual compounding
  const monthlyRate = Math.pow(1 + interestRate / 100 / 2, 1 / 6) - 1;

  // Total number of payments
  const totalPayments = durationYears * paymentFrequency;

  // Adjustment for payment frequency (monthly, bi-weekly, etc.)
  const frequencyMultiplier = 12 / paymentFrequency;

  // Mortgage payment calculation
  const payment =
    (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, durationYears * 12)) /
    (Math.pow(1 + monthlyRate, durationYears * 12) - 1);

  // Adjust payment to match payment frequency
  return (payment * frequencyMultiplier).toFixed(2);
}

app.post("/calculate", (req, res) => {
  const { loanAmount, interestRate, durationYears, paymentFrequency } =
    req.body;

  if (!loanAmount || !interestRate || !durationYears || !paymentFrequency) {
    return res.status(400).send({ error: "All fields are required!" });
  }

  try {
    const result = calculateMortgage(
      loanAmount,
      interestRate,
      durationYears,
      paymentFrequency
    );
    res.send({ monthlyPayment: result });
  } catch (error) {
    res.status(500).send({ error: "Something went wrong!" });
  }
});
