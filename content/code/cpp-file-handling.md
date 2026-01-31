Title: cpp File Handling
Date: 2025-02-10
Modified: 2025-02-10
Category: code
Tags: cplusplus
Author: esonusharma.github.io
Summary: File Handling in C++
Status: published

## 10. Aim: Create a program to showcase various File Handling operations – open, close, update

### Practice Exercise 16: Write a C++ program to demonstrate file handling operations - open, close, and update using density calculation.

#### Code:
```
#include <fstream>
#include <iostream>
using namespace std;

int main() {
    float mass, volume, density;

    // Open a file for writing
    ofstream outFile("ouput.txt");
    cout << "Enter mass and volume: ";
    cin >> mass >> volume;
    density = mass / volume;
    outFile << "\nMass: " << mass << "\nVolume: " << volume << "\nDensity: " << density;
    outFile.close(); // Close the file

    // Open a file for reading
    ifstream inFile("output.txt");
    string content;
    while (getline(inFile, content)) {
        cout << content << endl; // Display file content
    }
    inFile.close(); // Close the file

    // Open file for updating (appending new data)
    fstream file("output.txt", ios::app);
    file << "\nUpdated: output calculated successfully.";
    file.close(); // Close the file
    
    return 0;
}
```

## References
There may be some AI Generated content in this article used for demonstration purposes.