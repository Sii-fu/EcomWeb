// 21. Write a C++ program that shows the object(s) as the returned argument(s) of a function using the concepts of class and objects.  

#include <iostream>
using namespace std;

class Test
{
    int a, b;

public:
    void setData(int x, int y)
    {
        a = x;
        b = y;
    }
    void showData()
    {
        cout << "a = " << a << " b = " << b << endl;
    }
};

Test fun()
{
    Test t;
    t.setData(10, 20);
    return t;
}

int main()
{
    Test t1;
    t1 = fun();
    t1.showData();
    return 0;
}
