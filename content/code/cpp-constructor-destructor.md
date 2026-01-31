Title: cpp Constructor Destructor
Date: 2025-02-06
Modified: 2025-02-06
Category: code
Tags: cplusplus
Author: esonusharma.github.io
Summary: Constructors and Destructors in C++
Status: published

## 3. Aim: Create a program that implements constructor (simple, copy, parameterized) and destructor.

### Practice Exercise 4: Write a C++ program to calculate the density using a default constructor.

#### Code:
```
#include <iostream>
using namespace std;

class Density
{
private:
    float mass;
    float volume;

public:
    Density() {
        mass = 10;
        volume = 5;
    }

    ~Density() {
        cout << "Destructor called." << endl;
    }

    float calculateDensity() {
        return mass / volume;
    }
};

int main()
{
    Density d;
    cout << "Density of Fluid: " << d.calculateDensity() << " N/m³" << endl;
    return 0;
}
```

### Practice Exercise 5: Write a C++ program to calculate the density using a parameterized constructor.

#### Code:
```
#include <iostream>
using namespace std;

class Density
{
private:
    float mass;
    float volume;

public:
    Density(float m, float v) {
        mass = m;
        volume = v;
    }

    float calculateDensity() {
        return mass / volume;
    }
};

int main()
{
    Density d(10, 5);
    cout << "Density of Fluid: " << d.calculateDensity() << " N/m³" << endl;
    return 0;
}
```

### Practice Exercise 6: Write a C++ program to calculate the density using a copy constructor.

#### Code:
```
#include <iostream>
using namespace std;

class Density
{
private:
    float mass;
    float volume;

public:
    Density(float m, float v) {
        mass = m;
        volume = v;
    }

    Density(const Density &obj) {
        mass = obj.mass;
        volume = obj.volume;
    }

    float calculateDensity() {
        return mass / volume;
    }
};

int main()
{
    Density d1(10, 5);
    Density d2 = d1;

    cout << "Density of Fluid: " << d2.calculateDensity() << " N/m³" << endl;

    return 0;
}
```

## References
There may be some AI Generated content in this article used for demonstration purposes.