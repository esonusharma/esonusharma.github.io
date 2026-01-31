Title: cpp Exception Handling
Date: 2025-02-04
Modified: 2025-02-04
Category: code
Tags: cplusplus
Author: esonusharma.github.io
Summary: Exception Handling in C++
Status: published

## 13. Aim: Create a program to implement Exception Handling – Try, Catch

### Practice Exercise 19: Write a C++ program to demonstrate the use of Exception Handling for calculating stress.

#### Code:
```
#include <iostream>
#include <string>
#include <exception>

using namespace std;

int main() {
    try {
        float force, area;

        cout << "Enter force: ";
        cin >> force;

        cout << "Enter area: ";
        cin >> area;

        if (area == 0) {
            throw runtime_error("Error: Area cannot be zero (division by zero is undefined).");
        }

        float stress = force / area;
        cout << "Stress: " << stress << " N/m^2" << endl;

    } catch (const exception& e) { 
        cerr << "Exception caught: " << e.what() << endl;
        return 1;
    }

    return 0;
}
```

## References
There may be some AI Generated content in this article used for demonstration purposes.