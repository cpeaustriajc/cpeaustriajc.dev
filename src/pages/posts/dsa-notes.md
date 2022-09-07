---
layout: ../../layouts/MarkdownLayout.astro
title: Data Structures and Algorithms Notes
description:
    This is an ongoing series for me learning about data structures and algorithms using C++, I am
    writing about it so that I can retain my knowledge about it.
date:
    format: 2022-06-16
    content: August 16, 2022
topics:
    - devlog
    - education
image_name: dsa-notes
image_alt:
    A person about to be assassinated by a woman but the woman is also about to be assassinated by
    another woman BUT the woman is ALSO about to be assassinated by another man!
draft: false
---

## Table of Contents

## Foreword

These are some notes that I take while I study about Data Structures and Algorithms in C++ in
college, I want to study in advance because being a good computer engineer always learns something
new and knows the core concepts of programming and computer science in general.

I hope the person that finds this post useful, there are also some useful resources in the
references section of this post.

The programming language used in this post is C++ but you should be able to translate it to your
preferred programming language, do it as an exercise to assess how much you know about your
programming language!

## Introduction to Data Structures

Before we talk about data structures, we need to know about data first; we need to know what it is,
how it is used in programming, and why we use it.

### What is Data?

Data are the quantities, characters or symbols on which operations are performed by a computer,
which may be stored and transitted in the form of electrical signals and recorded on magnetic,
optical or mechanical recording media.

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

These are form of data that are stored in variables `a` and `b` and the third are the result of an
operation of data that is stored in `c`

### When does Data become Information?

Data is unprocessed, only understood by the computer as it is not yet been converted to a human
readable format. Let's say for example there is a JSON output of the data that was fetched
somewhere.

```json
{
	"title": "Post One",
	"description": "This is my first post!",
	"date": "2022-09-06",
	"image": "https://media.giphy.com/media/Ju7l5y9osyymQ/giphy.gif"
}
```

This is **JSON data**, an unprocesed piece of symbols that have not been converted to content or
information that is either used later in a website to display the content of the JSON data.

What happens if we process this data? Since JSON pairs well with JavaScript, let's use JavaScript as
an example (specifically React):

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

Linked lists are the fundamental data structure, it is one of the very first topics that is taught
in data structures.

![Spiderman doesn't know how to reverse a linked list, so he is sad, so you should know how to so that you won't be sad!](/spiderman-linked-list.jpeg)

A linked list is a linear data structure, in which the elements are not stored at contiguous memory
locations. The elements in a linked list are linked using pointers.

```cpp
// A very basic example of a linked list.
class Node {
public:
    int data;
    Node* next;
}
```

To operate with a linked list we have to store it in a `nullptr` then dynamically allocate a new
node in the heap. Then assign a data in the linked list data structure, point the next node to
another instance then free the memory.

```cpp
class Node {
public:
    int data;
    Node* next;
}

int main(void)
{
    Node* head = nullptr;
    Node* second = nullptr;
    Node* third = nullptr;

    head = new Node();
    second = new Node();
    third = new Node();

    head->data = 1;
    head->next = second;

    second->data = 2;
    second->next = third;

    third->data = 3;
    third->next = nullptr;

    delete head;
    delete second;
    delete third;

    return 0;
}
```

## References

[Introduction to Data Structures][intro-to-dsa]

[intro-to-dsa]: https://www.youtube.com/watch?v=xLetJpcjHS0&list=PLBlnK6fEyqRj9lld8sWIUNwlKfdUoPd1Y
