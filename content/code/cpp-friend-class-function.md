Title: cpp Friend Class Function
Date: 2025-02-05
Modified: 2025-02-05
Category: code
Tags: cplusplus
Author: esonusharma.github.io
Summary: Friend Class and Friend Function in C++
Status: published

## 2. Aim: Create a program to showcase the use of friend function.

### Practice Exercise 2: Write a C++ program to calculate the density showcasing friend class.

#### Code:
```
#include <iostream>
using namespace std;

class Density;

class DensityCalculator
{
public:
    void displayDensity(Density d);
};

class Density
{
public:
    float mass;
    float volume;
    friend class DensityCalculator;
};

void DensityCalculator::displayDensity(Density d)
{
    float density = d.mass / d.volume;
    cout << "Density of Fluid: " << density << " N/m³" << endl;
}

int main()
{
    Density d;
    d.mass = 10;
    d.volume = 5;

    DensityCalculator calc;
    calc.displayDensity(d);

    return 0;
}
```

### Practice Exercise 3: Write a C++ program to calculate the density showcasing friend function.

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
    friend float calculateDensity(Density d);
};

float calculateDensity(Density d)
{
    return d.mass / d.volume;
}

int main()
{
    Density d;
    d.mass = 10;
    d.volume = 5;

    float result = calculateDensity(d);
    cout << "Density of Fluid: " << result << " N/m³" << endl;

    return 0;
}
```

## References
There may be some AI Generated content in this article used for demonstration purposes.