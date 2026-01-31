Title: cpp Polymorphism
Date: 2025-02-09
Modified: 2025-02-09
Category: code
Tags: cplusplus
Author: esonusharma.github.io
Summary: Polymorphism in C++
Status: published

## 7. Aim: Create a program that exhibits the usage of Operator Overloading (Compile Time Polymorphism)

### Practice Exercise 13: Write a C++ program to demonstrate operator overloading by implementing vector addition.

#### Theory:
Operator Overloading is a feature in C++ that allows us to define custom behaviors for operators when applied to user-defined types. It provides compile-time polymorphism by enabling different behaviors for the same operator based on operand types. In two-dimensional space, vector addition follows the rule of adding corresponding components.

Given two vectors V1(x1, y1) and V2(x2, y2), their sum is calculated as:

$$
V3(x3, y3) = (x1 + x2, y1 + y2)
$$

#### Algorithm:
1. Define a class with private data members.
2. Create a constructor to initialize the data members.
3. Overload the operator function within the class using the 'operator' keyword.
4. Implement the overloaded operator function to perform the required operation.
5. Create a display function to print the object state.
6. In the main function, create objects and use the overloaded operator.
7. Display the results.

#### Code:
```
#include <iostream>
using namespace std;

class Vector {
private:
    int x, y, z;

public:
    Vector(int a, int b, int c) : x(a), y(b), z(c) {}

    Vector operator+(const Vector &v) {
        return Vector(x + v.x, y + v.y, z + v.z);
    }

    void display() {
        cout << "(" << x << ", " << y << ", " << z << ")" << endl;
    }
};

int main() {
    Vector v1(1, 2, 3);
    Vector v2(4, 5, 6);
    Vector v3 = v1 + v2;

    cout << "Vector 1: ";
    v1.display();
    cout << "Vector 2: ";
    v2.display();
    cout << "Vector Sum: ";
    v3.display();

    return 0;
}
```

## 8. Aim: Create a program that exhibits the usage of Function Overloading (Compile Time Polymorphism)

### Practice Exercise 14: Write a C++ program to demonstrate function overloading by calculating areas of different shapes.

#### Code:
```
#include <iostream>
using namespace std;

class AreaCalculator {
public:
    double area(double side) {
        return side * side;
    }

    double area(double length, double width) {
        return length * width;
    }
};

int main() {
    AreaCalculator calc;
    cout << "Area of Square: " << calc.area(5.0) << endl;
    cout << "Area of Rectangle: " << calc.area(5.0, 10.0) << endl;
    return 0;
}
```

## 9. Aim: Construct a program that demonstrates the implementation of Abstract Classes and Virtual Functions(Run Time Polymorphism)

### Practice Exercise 15: Write a C++ program to demonstrate abstract classes and virtual functions by calculating the density, relative density, and weight of a fluid.

#### Code:
```
#include <iostream>
using namespace std;

// Abstract class Density
class Density {
protected:
    float mass;
    float volume;
public:
    Density(float m, float v) : mass(m), volume(v) {}
    virtual float calculate() = 0; // Pure virtual function
};

// Derived class for Relative Density
class RelativeDensity : public Density {
    float refDensity;
public:
    RelativeDensity(float m, float v, float r) : Density(m, v), refDensity(r) {}
    float calculate() override {
        return (mass / volume) / refDensity;
    }
};

// Derived class for Weight
class Weight : public Density {
    float gravity;
public:
    Weight(float m, float v, float g = 9.81) : Density(m, v), gravity(g) {}
    float calculate() override {
        return mass * gravity;
    }
};

int main() {
    RelativeDensity rd(10, 2, 1000);
    Weight w(10, 2);

    cout << "Relative Density: " << rd.calculate() << endl;
    cout << "Weight: " << w.calculate() << " N" << endl;
    
    return 0;
}
```

## References
There may be some AI Generated content in this article used for demonstration purposes.