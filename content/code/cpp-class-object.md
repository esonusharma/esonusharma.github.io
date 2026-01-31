Title: cpp Class Object
Date: 2025-02-04
Modified: 2025-02-04
Category: code
Tags: cplusplus
Author: esonusharma.github.io
Summary: Class and Object in c++
Status: published

## 1. Aim: Construct a program that illustrates the concept and implementation of class and objects

### Practice Exercise 1: Write a program to calculate the density using class and object.

#### Code:
```
#include <iostream>
using namespace std;

class Density
{
public:
    float mass;
    float volume;

    float mDensity()
    {
        return mass / volume;
    }
};

int main()
{
    Density d;
    d.mass = 10;
    d.volume = 5;
    cout << d.mDensity() << endl;
    return 0;
}
```

## References
There may be some AI Generated content in this article used for demonstration purposes.