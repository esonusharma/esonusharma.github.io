Title: cpp Template
Date: 2025-02-04
Modified: 2025-02-04
Category: code
Tags: cplusplus
Author: esonusharma.github.io
Summary: Templates in C++
Status: published

## 12. Aim: Create a program to showcase the use of Templates.

### Practice Exercise 18: Write a C++ program to demonstrate the use of Function Templates for calculating stress.

#### Code:
```
#include <iostream>

using namespace std;

template <typename T>
T calculateStress(T force, T area) {
    return force / area;
}

int main() {

    int intForce, intArea;
    cout << "Enter force (integer, N): ";
    cin >> intForce;
    cout << "Enter area (integer, m^2): ";
    cin >> intArea;
    int intStress = calculateStress(intForce, intArea);
    cout << "Integer Stress: " << intStress << " N/m^2" << endl;

    float floatForce, floatArea;
    cout << "Enter force (float, N): ";
    cin >> floatForce;
    cout << "Enter area (float, m^2): ";
    cin >> floatArea;
    float floatStress = calculateStress(floatForce, floatArea);
    cout << "Float Stress: " << floatStress << " N/m^2" << endl;

    return 0;
}
```

## References
There may be some AI Generated content in this article used for demonstration purposes.