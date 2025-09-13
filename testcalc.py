import unittest
from calculator import core

class TestCalculator(unittest.TestCase):
    def test_addition(self):
        self.assertEqual(core.add(3, 5), 8)

    def test_subtraction(self):
        self.assertEqual(core.subtract(10, 4), 6)

    def test_division(self):
        self.assertEqual(core.divide(10, 2), 5)

    def test_division_by_zero(self):
        with self.assertRaises(ZeroDivisionError):
            core.divide(5, 0)

    def test_invalid_input(self):
        with self.assertRaises(ValueError):
            core.add("a", 5)

if __name__ == "__main__":
    unittest.main()
