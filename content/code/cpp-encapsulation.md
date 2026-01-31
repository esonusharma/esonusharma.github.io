Title: cpp Encapsulation
Date: 2025-02-07
Modified: 2025-02-07
Category: code
Tags: cplusplus
Author: esonusharma.github.io
Summary: Encapsulation in C++
Status: published

## 4. Aim: Write a program that showcases the application of Encapsulation.

### Practice Exercise 7: Write a C++ program to calculate the weight density of water demonstrating encapsulation.

#### Code:
```
#include <iostream>
using namespace std;

class WeightDensity
{
private:
    float weight;
    float volume;

public:
    WeightDensity(float w, float v) : weight(w), volume(v) {}

    float calculateDensity() {
        return weight / volume;
    }
};

int main()
{
    WeightDensity wd(9800, 1);

    cout << "Weight Density of Fluid: " << wd.calculateDensity() << " N/m³" << endl;

    return 0;
}
```

## References
There may be some AI Generated content in this article used for demonstration purposes.