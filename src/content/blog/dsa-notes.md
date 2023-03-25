---
title: Data Structures and Algorithms Notes
description: This is an ongoing series for me learning about data structures and
  algorithms using C++, I am writing about it so that I can retain my
  knowledge about it.
publishedDate: 2022-06-16
topics:
  - devlog
  - education
  - c++
cover: ~/assets/images/dsa-notes.webp
draft: false
---

## Foreword

These are some notes that I take while I study about Data Structures and
Algorithms in C++ in college, I want to study in advance because being a good
computer engineer always learns something new and knows the core concepts of
programming and computer science in general.

I hope the person that finds this post useful, there are also some useful
resources in the references section of this post.

The programming language used in this post is C++ but you should be able to
translate it to your preferred programming language, do it as an exercise to
assess how much you know about your programming language!

## Introduction to Algorithms

Algorithms are the building blocks of a program, they are a set of rules that
need to be followed by a program in calculations or other problem-solving
operations.

Algorithms can also be defined as a procedure for solving a mathematical problem
in a finite numbers of steps frequently by recursive operations.

### What are Algorithms?

Algorithms are a finite sequence of instructions, each of which have clear
meaning and can be performed with a finite amount of effort in a finite length
of time.

Another definition of Algorithms is that it is a step-by-step procedure which
defines a set of instruction to be executed in a certain order to get the
desired output.

### The Different Types of Algorithms

There are several type of algorithms that are available. Some important
algorithms are:

1. [Brute Force Approach](#brute-force-approach): Solve a problem through
   exhaustion.

#### Brute Force Approach

Brute Force algorithms are:

- Intuitive, direct, and straightforward technique of problem-solving in which
  all the possible ways or all the possbile solutions to a given problem are
  enumerated.
- Many problems solved in day-to-day life using the brute force strategy, for
  example, exploring all the paths to a nearby market to find the minimum
  shortest path
- Arranging the books in a rack using all the possibilities to optimize the
  rack spaces, etc.
- Daily life activities use a brute force nature, even though optimal
  algorithms are also possbile.

## Introduction to Data Structures

Before we talk about data structures, we need to know about data first; we need
to know what it is, how it is used in programming, and why we use it.

### What is Data?

Data are the quantities, characters or symbols on which operations are performed
by a computer, which may be stored and transitted in the form of electrical
signals and recorded on magnetic, optical or mechanical recording media.

Let's say the following code example:

```cpp
#include <iostream>

int main() {
    int a = 2;
    int b = 5;
    int c = a + b;

    std::cout << c << std::endl;

    return 0;
}
```

These are form of data that are stored in variables `a` and `b` and the third
are the result of an operation of data that is stored in `c`

### When does Data become Information?

Data is unprocessed, only understood by the computer as it is not yet been
converted to a human readable format. Let's say for example there is a JSON
output of the data that was fetched somewhere.

```json
{
  "title": "Post One",
  "description": "This is my first post!",
  "date": "2022-09-06",
  "image": "https://media.giphy.com/media/Ju7l5y9osyymQ/giphy.gif"
}
```

This is **JSON data**, an unprocesed piece of symbols that have not been
converted to content or information that is either used later in a website to
display the content of the JSON data.

What happens if we process this data? Since JSON pairs well with JavaScript,
let's use JavaScript as an example (specifically React):

```jsx
const Post = ({ post }) => {
  return (
    <article>
      <h1>{post.title}</h1>
      <img src={post.image} alt={post.description} />
      <time datetime={post.date}>{post.date}</time>
      <p>{post.description}</p>
    </article>
  );
};
```

This is how you would use it in JavaScript (React).

## Linked Lists

Linked lists are the fundamental data structure, it is one of the very first
topics that is taught in data structures.

![Spiderman doesn't know how to reverse a linked list, so he is sad, so you should know how to so that you won't be sad!](~/assets/images/spiderman-linked-list.webp)

A linked list is a linear data structure, in which the elements are not stored
at contiguous memory locations. The elements in a linked list are linked using
pointers. This is better used in some cases where data must be stored
dynamically in which an array data structure is weak.

Linked lists include a series of connected nodes and each node stores the data
and the address of the next node.

![Linked List Graphical Representation](~/assets/images/linked-list-graphical.webp)

```cpp
// A very basic example of a linked list.
class Node {
public:
    int data;
    Node* next;
}
```

To operate with a linked list we have to store it in a `nullptr` then
dynamically allocate a new node in the heap. Then assign a data in the linked
list data structure, point the next node to another instance then free the
memory.

### Why Linked List?

```cpp
class Node {
public:
  int data;
  Node *next;
};

int main(void) {
    Node* head = nullptr;
    Node* first = nullptr;
    Node* tail = nullptr;

    // allocate 3 nodes in the heap.
    head = new Node();
    first = new Node();
    third = new Node();

    head->data = 1;         // Assign data to the first node

    head->next = second;    // Link first node
                            // to second node.

    first->data = 2;       // Assign data to the second node
    first->next = third;

    tail->data = 3;         // Assign data to the third node
    tail->next = nullptr;   // The tail is assigned as nullptr
                            // because it is the end of the list.

    // Always best practice to clear the memory
    // after it has been allocated to avoid memory leaks!
    delete head;
    delete second;
    delete third;

    return 0;
}
```

Looks great! We learned here that we can create simple nodes in a list, by
assigning a pointer to a variable with a type of `Node` then allocate three
nodes in the heap.

## References

A list of references that I use to gather information about Data Structures and
Algorithms.

- [Introduction to Data Structures][intro-to-dsa]
- [Introduction to Algorithms][intro-to-algorithms]

[intro-to-dsa]: https://www.youtube.com/watch?v=xLetJpcjHS0&list=PLBlnK6fEyqRj9lld8sWIUNwlKfdUoPd1Y
[intro-to-algorithms]: https://www.geeksforgeeks.org/fundamentals-of-algorithms/
