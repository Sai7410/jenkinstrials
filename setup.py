from setuptools import setup, find_packages

setup(
    name="calculator",
    version="0.1.0",
    description="A simple calculator with add, subtract, divide",
    packages=find_packages(include=["calculator", "calculator.*"]),
    python_requires=">=3.8",
)
