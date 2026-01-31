Title: cpp Inheritance
Date: 2025-02-08
Modified: 2025-02-08
Category: code
Tags: cplusplus
Author: esonusharma.github.io
Summary: Inheritance in C++
Status: published

## 5. Aim: Construct a program that demonstrates implementation of Inheritance - Single and Multilevel

### Practice Exercise 8: To write a C++ program to demonstrate single inheritance by calculating the density and relative density of a fluid.

#### Code:
```
#include <iostream>
using namespace std;

class Density
{
public:
    float mass;
    float volume;

    Density(float m, float v) : mass(m), volume(v) {}

    float mDensity()
    {
        return mass / volume;
    }
};

class RelativeDensity : public Density
{
public:
    float refDensity;

    RelativeDensity(float m1, float v1, float r) : Density(m1, v1), refDensity(r) {}

    float rDensity()
    {
        float density = mDensity();
        return density / refDensity;
    }
};

int main()
{
    RelativeDensity rd(50, 20, 1000);
    cout << "Relative Density of Fluid: " << rd.rDensity() << endl;
    return 0;
}
```

### Practice Exercise 9: Write a C++ program to demonstrate multilevel inheritance by calculating the density, relative density, and weight of a fluid.

#### Code:
```
#include <iostream>
using namespace std;

class Density
{
public:
    float mass;
    float volume;

    Density(float m, float v) : mass(m), volume(v) {}

    float mDensity()
    {
        return mass / volume;
    }
};

class RelativeDensity : public Density
{
public:
    float refDensity;

    RelativeDensity(float m1, float v1, float r) : Density(m1, v1), refDensity(r) {}

    float rDensity()
    {
        return mDensity() / refDensity;
    }
};

class Weight : public RelativeDensity
{
public:
    float gravity;

    Weight(float m1, float v1, float r, float g) : RelativeDensity(m1, v1, r), gravity(g) {}

    float fluidWeight()
    {
        return rDensity() * refDensity * volume * gravity;
    }
};

int main()
{
    Weight w(50, 20, 1000, 9.81);
    cout << "Weight of Fluid: " << w.fluidWeight() << " N" << endl;
    return 0;
}
```


## 6. Aim: Construct a program that demonstrates implementation of Inheritance - Multiple, Hierarchical and Hybrid.

### Practice Exercise 10: Write a C++ program to demonstrate multiple inheritance by calculating the density, relative density, and weight of a fluid.

#### Code:
```
#include <iostream>
using namespace std;

class Density
{
public:
    float mass;
    float volume;

    Density(float m, float v) : mass(m), volume(v) {}

    float mDensity()
    {
        return mass / volume;
    }
};

class RelativeDensity
{
public:
    float refDensity;

    RelativeDensity(float r) : refDensity(r) {}

    float rDensity(float density)
    {
        return density / refDensity;
    }
};

class Weight : public Density, public RelativeDensity
{
public:
    float gravity;

    Weight(float m1, float v1, float r, float g) : Density(m1, v1), RelativeDensity(r), gravity(g) {}

    float fluidWeight()
    {
        float density = mDensity();
        return rDensity(density) * refDensity * volume * gravity;
    }
};

int main()
{
    Weight w(50, 20, 1000, 9.81);
    cout << "Weight of Fluid: " << w.fluidWeight() << " N" << endl;
    return 0;
}
```

### Practice Exercise 11: Write a C++ program to demonstrate hierarchical inheritance by calculating the density, relative density, and weight of a fluid.

#### Code:
```
#include <iostream>
using namespace std;

class Density
{
public:
    float mass;
    float volume;

    Density(float m, float v) : mass(m), volume(v) {}

    float mDensity()
    {
        return mass / volume;
    }
};

class RelativeDensity : public Density
{
public:
    float refDensity;

    RelativeDensity(float m1, float v1, float r) : Density(m1, v1), refDensity(r) {}

    float rDensity()
    {
        return mDensity() / refDensity;
    }
};

class Weight : public Density
{
public:
    float gravity;

    Weight(float m1, float v1, float g) : Density(m1, v1), gravity(g) {}

    float fluidWeight()
    {
        return mDensity() * volume * gravity;
    }
};

int main()
{
    RelativeDensity rd(50, 20, 1000);
    Weight w(20, 10, 9.81);
    cout << "Relative Density: " << rd.rDensity() << endl;
    cout << "Weight of Fluid: " << w.fluidWeight() << " N" << endl;

    return 0;
}
```

### Practice Exercise 12: Write a C++ program to demonstrate hybrid inheritance by calculating the density, relative density, and weight of a fluid.

#### Code:
```
#include <iostream>
using namespace std;

class Density {
protected:
    float mass;
    float volume;

public:
    Density(float m, float v) : mass(m), volume(v) {}

    float mDensity() {
        return mass / volume;
    }
};

class RelativeDensity : virtual public Density {
protected:
    float refDensity;

public:
    RelativeDensity(float m, float v, float r) : Density(m, v), refDensity(r) {}

    float rDensity() {
        return mDensity() / refDensity;
    }
};

class Weight : virtual public Density {
protected:
    float gravity;

public:
    Weight(float m, float v, float g) : Density(m, v), gravity(g) {}

    float fluidWeight() {
        return mDensity() * volume * gravity;
    }
};

class Fluid : public RelativeDensity, public Weight {
public:
    Fluid(float m, float v, float r, float g) : Density(m, v), RelativeDensity(m, v, r), Weight(m, v, g) {}

    void display() {
        cout << "Density: " << mDensity() << " kg/m^3" << endl;
        cout << "Relative Density: " << rDensity() << endl;
        cout << "Weight of Fluid: " << fluidWeight() << " N" << endl;
    }
};

int main() {
    Fluid fluid(50, 20, 1000, 9.81);
    fluid.display();
    return 0;
}
```

## References
There may be some AI Generated content in this article used for demonstration purposes.