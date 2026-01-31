Title: cpp Pointer
Date: 2024-02-23
Modified: 2024-02-23
Category: code
Tags: cplusplus
Author: esonusharma.github.io
Summary: pointers in c++
Status: published

```
#include<iostream>

using namespace std;

int main()
{
    int x, *y;
    x=7;
    y=&x;
    cout<<"x= "<<x<<endl;
    cout<<"*y= "<<*y<<endl;
    cout<<"&x= "<<&x<<endl;
    cout<<"y= "<<y<<endl;
    return 0;
}

Output:

x= 7
*y= 7
&x= 0x8kkkkkkkwn6c
y= 0x8kkkkkkkwn6c
```