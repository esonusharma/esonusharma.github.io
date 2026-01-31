Title: cpp Command Line Arguements
Date: 2025-02-04
Modified: 2025-02-04
Category: code
Tags: cplusplus
Author: esonusharma.github.io
Summary: Command Line Arguments in C++
Status: published

## 11. Aim: Create a program to show the use of Command Line Arguments.

### Practice Exercise 17: Write a C++ program to demonstrate the use of Command Line Arguments for calculating stress.

#### Code:
```
#include <iostream>
#include <string>
using namespace std;

int main(int argc, char* argv[]) {
    // program name itself is counted in no. of arguements inside argc by operating system, so when the argc = 3 becomes true, following if condition will not run. But when user enters less arguements then also argc < 0, then if condition is true and program exits.
    
    if (argc < 3) {
        cout << "Usage: ./programName <force> <area>" << endl;
        return 1;
    }
    // 
    float force = stof(argv[1]);  // Convert to float
    float area = stof(argv[2]);   // Convert to float

    float stress = force / area;
    cout << "Stress: " << stress << " N/m^2" << endl;

    return 0;
}
```

## References
There may be some AI Generated content in this article used for demonstration purposes.