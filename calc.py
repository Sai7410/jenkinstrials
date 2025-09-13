def add(a, b):
    _validate_input(a, b)
    return a + b

def subtract(a, b):
    _validate_input(a, b)
    return a - b

def divide(a, b):
    _validate_input(a, b)
    if b == 0:
        raise ZeroDivisionError("Division by zero is not allowed.")
    return a / b

def _validate_input(a, b):
    if not isinstance(a, (int, float)) or not isinstance(b, (int, float)):
        raise ValueError("Inputs must be integers or floats.")
