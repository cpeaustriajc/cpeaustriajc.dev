---
layout: ../../layouts/MarkdownLayout.astro
title: Why are you still using `using namespace x` in the global context?
description:
    If you are still using `using namespace x` in the global context, then maybe you should think
    about what the consequences that it can cause.
date:
    format: 2022-09-07
    content: September 07, 2022
topics:
    - devlog
    - education
    - c++
image_name: namespace-std
image_alt:
    Gru is pointing a gun at you for using `using namespace std`! Stop using it incorrectly or there
    will be consequences!
draft: false
---

## Table of Contents

## Avoid using `using namespace x` in the global context

When you are first taught C++, you are always shown the code as your first exposure to the language:

```cpp
#include <iostream>

using namespace std;

int main()
{
    cout << "Hello, World!" << endl;
}
```

BUT HOLD ON, there are some dangers in this code that you might carry as a habit that might bite you
in the future.

First of all, let's talk about what the `using` keyword does. The `using` keyword basically injects
a specific namespace and in this case is the `std` or the standard library namespace into a specific
block of code.

In this case, you are injecting a the standard library code in the global context, which is not
ideal when you only want to use a specific function inside a namespace like the cout and the endl
function.

### What's the worse that could happen?

Well what if there are two functions with the same name inside different namespaces? The compiler
would be confused as to why there are two different functions with the same name in two separate
namespaces. Based on the [stackoverflow answer.][using-namespace-stackoverflow]

```cpp
/*
    Two different namespaces, might have the same functions/methods like
    for example hello
*/
using namespace foo;
using namespace bar;
```

### Among Us function

Because this is literally what it is doing, there is a mystery function that is being called
somewhere and we don't know where it is from.

```cpp

using namespace foo;
using namespace foo;

int main() {
    /*
        Where is this getting called? We don't have a function declaration in this example,
        so it must be somewhere. Among us function!
     */
    hello();
}

```

## Alternatives

Better alternatives are to call where you want to use a namespace in a function or in a class. Be
cautious when using `using namespace`!

```cpp
#include <iostream>

/*
    Good!
*/
int main() {
    using namespace std;

    cout << "Hello, World" << endl;
}
```

Or to remove the namespace directly and just call only the specific functions you want to use:

```cpp
#include <iostream>

/*
    Good!
 */
int main() {
    using std::cout;
    using std::endl;

    cout << "Hello, World!" << endl;
}
```

Or in the most dead simple way is to just call the function you want with the scope resolution
operator! Now it looks like it is much simpler and works just the same!

```cpp
#include <iostream>

int main() {
    std::cout << "Hello, World!" << std::endl;
}
```

## Summary

In conclusion, `using namespace` is a software engineering bad practice and should be avoided as
much as possible.

## References

[StackOverflow answer about `using namespace`][using-namespace-stackoverflow]

[using-namespace-stackoverflow]: https://stackoverflow.com/a/1452738/13473841
