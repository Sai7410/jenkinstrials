// Calculator functions (standalone)
function validateInput(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Inputs must be numbers.");
  }
}

export function add(a, b) {
  validateInput(a, b);
  return a + b;
}

export function subtract(a, b) {
  validateInput(a, b);
  return a - b;
}

export function divide(a, b) {
  validateInput(a, b);
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return a / b;
}

// Serverless endpoint
export default function handler(req, res) {
  try {
    const { operation, a, b } = req.query; // e.g., /api/calc?operation=add&a=2&b=3
    const numA = parseFloat(a);
    const numB = parseFloat(b);
    let result;

    switch (operation) {
      case "add":
        result = add(numA, numB);
        break;
      case "subtract":
        result = subtract(numA, numB);
        break;
      case "divide":
        result = divide(numA, numB);
        break;
      default:
        throw new Error("Invalid operation");
    }

    res.status(200).json({ result });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}
