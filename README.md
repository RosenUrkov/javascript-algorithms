# JavaScript Algorithms and Data Structures

[![CI](https://github.com/trekhleb/javascript-algorithms/workflows/CI/badge.svg)](https://github.com/trekhleb/javascript-algorithms/actions?query=workflow%3ACI+branch%3Amaster)
[![codecov](https://codecov.io/gh/trekhleb/javascript-algorithms/branch/master/graph/badge.svg)](https://codecov.io/gh/trekhleb/javascript-algorithms)

This repository contains JavaScript based examples of many
popular algorithms and data structures.

Each algorithm and data structure has its own separate README
with related explanations and links for further reading (including ones
to YouTube videos).

_Read this in other languages:_
[_简体中文_](README.zh-CN.md),
[_繁體中文_](README.zh-TW.md),
[_한국어_](README.ko-KR.md),
[_日本語_](README.ja-JP.md),
[_Polski_](README.pl-PL.md),
[_Français_](README.fr-FR.md),
[_Español_](README.es-ES.md),
[_Português_](README.pt-BR.md),
[_Русский_](README.ru-RU.md),
[_Türk_](README.tr-TR.md),
[_Italiana_](README.it-IT.md),
[_Bahasa Indonesia_](README.id-ID.md),
[_Українська_](README.uk-UA.md),
[_Arabic_](README.ar-AR.md)

_☝ Note that this project is meant to be used for learning and researching purposes
only, and it is **not** meant to be used for production._

## Data Structures

A data structure is a particular way of organizing and storing data in a computer so that it can
be accessed and modified efficiently. More precisely, a data structure is a collection of data
values, the relationships among them, and the functions or operations that can be applied to
the data.

`B` - Beginner, `A` - Advanced

- :heavy_check_mark: `B` [Linked List](src/data-structures/linked-list)
- :heavy_check_mark: `B` [Doubly Linked List](src/data-structures/doubly-linked-list)
- :heavy_check_mark: `B` [Queue](src/data-structures/queue)
- :heavy_check_mark: `B` [Stack](src/data-structures/stack)
- :heavy_check_mark: `B` [Hash Table](src/data-structures/hash-table)
- :heavy_check_mark: `B` [Heap](src/data-structures/heap) - max and min heap versions
- :heavy_check_mark: `B` [Priority Queue](src/data-structures/priority-queue)
- :heavy_check_mark: `A` [Trie](src/data-structures/trie)
- :heavy_check_mark: `A` [Binary Search Tree](src/data-structures/tree/binary-search-tree)
- :heavy_check_mark: `A` [AVL Tree](src/data-structures/tree/avl-tree)
- :heavy_check_mark: `A` [Red-Black Tree](src/data-structures/tree/red-black-tree)
- :heavy_check_mark: `A` [Segment Tree](src/data-structures/tree/segment-tree) - with min/max/sum range queries examples
- :heavy_check_mark: `A` [Fenwick Tree](src/data-structures/tree/fenwick-tree) (Binary Indexed Tree)
- :heavy_check_mark: `A` [Graph](src/data-structures/graph) (both directed and undirected)
- :heavy_check_mark: `A` [Disjoint Set](src/data-structures/disjoint-set)
- :heavy_check_mark: `A` [Bloom Filter](src/data-structures/bloom-filter)

## Algorithms

An algorithm is an unambiguous specification of how to solve a class of problems. It is
a set of rules that precisely define a sequence of operations.

`B` - Beginner, `A` - Advanced

### Algorithms by Topic

- **Math**
  - :heavy_check_mark: `B` [Bit Manipulation](src/algorithms/math/bits) - set/get/update/clear bits, multiplication/division by two, make negative etc.
  - :heavy_check_mark: `B` [Factorial](src/algorithms/math/factorial)
  - :heavy_check_mark: `B` [Fibonacci Number](src/algorithms/math/fibonacci) - classic and closed-form versions
  - :heavy_check_mark: `B` [Prime Factors](src/algorithms/math/prime-factors) - finding prime factors and counting them using Hardy-Ramanujan's theorem
  - :heavy_check_mark: `B` [Primality Test](src/algorithms/math/primality-test) (trial division method)
  - :heavy_check_mark: `B` [Euclidean Algorithm](src/algorithms/math/euclidean-algorithm) - calculate the Greatest Common Divisor (GCD)
  - :heavy_check_mark: `B` [Least Common Multiple](src/algorithms/math/least-common-multiple) (LCM)
  - :heavy_check_mark: `B` [Sieve of Eratosthenes](src/algorithms/math/sieve-of-eratosthenes) - finding all prime numbers up to any given limit
  - :heavy_check_mark: `B` [Is Power of Two](src/algorithms/math/is-power-of-two) - check if the number is power of two (naive and bitwise algorithms)
  - :heavy_check_mark: `B` [Pascal's Triangle](src/algorithms/math/pascal-triangle)
  - :heavy_check_mark: `B` [Complex Number](src/algorithms/math/complex-number) - complex numbers and basic operations with them
  - :heavy_check_mark: `B` [Radian & Degree](src/algorithms/math/radian) - radians to degree and backwards conversion
  - :heavy_check_mark: `B` [Fast Powering](src/algorithms/math/fast-powering)
  - :heavy_check_mark: `B` [Horner's method](src/algorithms/math/horner-method) - polynomial evaluation
  - :heavy_check_mark: `B` [Matrices](src/algorithms/math/matrix) - matrices and basic matrix operations (multiplication, transposition, etc.)
  - :heavy_check_mark: `B` [Euclidean Distance](src/algorithms/math/euclidean-distance) - distance between two points/vectors/matrices
  - :heavy_check_mark: `A` [Integer Partition](src/algorithms/math/integer-partition)
  - :heavy_check_mark: `A` [Square Root](src/algorithms/math/square-root) - Newton's method
  - :heavy_check_mark: `A` [Liu Hui π Algorithm](src/algorithms/math/liu-hui) - approximate π calculations based on N-gons
  - :heavy_check_mark: `A` [Discrete Fourier Transform](src/algorithms/math/fourier-transform) - decompose a function of time (a signal) into the frequencies that make it up
- **Sets**
  - :heavy_check_mark: `B` [Cartesian Product](src/algorithms/sets/cartesian-product) - product of multiple sets
  - :heavy_check_mark: `B` [Fisher–Yates Shuffle](src/algorithms/sets/fisher-yates) - random permutation of a finite sequence
  - :heavy_check_mark: `A` [Power Set](src/algorithms/sets/power-set) - all subsets of a set (bitwise and backtracking solutions)
  - :heavy_check_mark: `A` [Permutations](src/algorithms/sets/permutations) (with and without repetitions)
  - :heavy_check_mark: `A` [Combinations](src/algorithms/sets/combinations) (with and without repetitions)
  - :heavy_check_mark: `A` [Longest Common Subsequence](src/algorithms/sets/longest-common-subsequence) (LCS)
  - :heavy_check_mark: `A` [Longest Increasing Subsequence](src/algorithms/sets/longest-increasing-subsequence)
  - :heavy_check_mark: `A` [Shortest Common Supersequence](src/algorithms/sets/shortest-common-supersequence) (SCS)
  - :heavy_check_mark: `A` [Knapsack Problem](src/algorithms/sets/knapsack-problem) - "0/1" and "Unbound" ones
  - :heavy_check_mark: `A` [Maximum Subarray](src/algorithms/sets/maximum-subarray) - "Brute Force" and "Dynamic Programming" (Kadane's) versions
  - :heavy_check_mark: `A` [Combination Sum](src/algorithms/sets/combination-sum) - find all combinations that form specific sum
- **Strings**
  - :heavy_check_mark: `B` [Hamming Distance](src/algorithms/string/hamming-distance) - number of positions at which the symbols are different
  - :heavy_check_mark: `A` [Levenshtein Distance](src/algorithms/string/levenshtein-distance) - minimum edit distance between two sequences
  - :heavy_check_mark: `A` [Knuth–Morris–Pratt Algorithm](src/algorithms/string/knuth-morris-pratt) (KMP Algorithm) - substring search (pattern matching)
  - :heavy_check_mark: `A` [Z Algorithm](src/algorithms/string/z-algorithm) - substring search (pattern matching)
  - :heavy_check_mark: `A` [Rabin Karp Algorithm](src/algorithms/string/rabin-karp) - substring search
  - :heavy_check_mark: `A` [Longest Common Substring](src/algorithms/string/longest-common-substring)
  - :heavy_check_mark: `A` [Regular Expression Matching](src/algorithms/string/regular-expression-matching)
- **Searches**
  - :heavy_check_mark: `B` [Linear Search](src/algorithms/search/linear-search)
  - :heavy_check_mark: `B` [Jump Search](src/algorithms/search/jump-search) (or Block Search) - search in sorted array
  - :heavy_check_mark: `B` [Binary Search](src/algorithms/search/binary-search) - search in sorted array
  - :heavy_check_mark: `B` [Interpolation Search](src/algorithms/search/interpolation-search) - search in uniformly distributed sorted array
- **Sorting**
  - :heavy_check_mark: `B` [Bubble Sort](src/algorithms/sorting/bubble-sort)
  - :heavy_check_mark: `B` [Selection Sort](src/algorithms/sorting/selection-sort)
  - :heavy_check_mark: `B` [Insertion Sort](src/algorithms/sorting/insertion-sort)
  - :heavy_check_mark: `B` [Heap Sort](src/algorithms/sorting/heap-sort)
  - :heavy_check_mark: `B` [Merge Sort](src/algorithms/sorting/merge-sort)
  - :heavy_check_mark: `B` [Quicksort](src/algorithms/sorting/quick-sort) - in-place and non-in-place implementations
  - :heavy_check_mark: `B` [Shellsort](src/algorithms/sorting/shell-sort)
  - :heavy_check_mark: `B` [Counting Sort](src/algorithms/sorting/counting-sort)
  - :heavy_check_mark: `B` [Radix Sort](src/algorithms/sorting/radix-sort)
- **Linked Lists**
  - :heavy_check_mark: `B` [Straight Traversal](src/algorithms/linked-list/traversal)
  - :heavy_check_mark: `B` [Reverse Traversal](src/algorithms/linked-list/reverse-traversal)
- **Trees**
  - :heavy_check_mark: `B` [Depth-First Search](src/algorithms/tree/depth-first-search) (DFS)
  - :heavy_check_mark: `B` [Breadth-First Search](src/algorithms/tree/breadth-first-search) (BFS)
- **Graphs**
  - :heavy_check_mark: `B` [Depth-First Search](src/algorithms/graph/depth-first-search) (DFS)
  - :heavy_check_mark: `B` [Breadth-First Search](src/algorithms/graph/breadth-first-search) (BFS)
  - :heavy_check_mark: `B` [Kruskal’s Algorithm](src/algorithms/graph/kruskal) - finding Minimum Spanning Tree (MST) for weighted undirected graph
  - :heavy_check_mark: `A` [Dijkstra Algorithm](src/algorithms/graph/dijkstra) - finding the shortest paths to all graph vertices from single vertex
  - :heavy_check_mark: `A` [Bellman-Ford Algorithm](src/algorithms/graph/bellman-ford) - finding the shortest paths to all graph vertices from single vertex
  - :heavy_check_mark: `A` [Floyd-Warshall Algorithm](src/algorithms/graph/floyd-warshall) - find the shortest paths between all pairs of vertices
  - :heavy_check_mark: `A` [Detect Cycle](src/algorithms/graph/detect-cycle) - for both directed and undirected graphs (DFS and Disjoint Set based versions)
  - :heavy_check_mark: `A` [Prim’s Algorithm](src/algorithms/graph/prim) - finding Minimum Spanning Tree (MST) for weighted undirected graph
  - :heavy_check_mark: `A` [Topological Sorting](src/algorithms/graph/topological-sorting) - DFS method
  - :heavy_check_mark: `A` [Articulation Points](src/algorithms/graph/articulation-points) - Tarjan's algorithm (DFS based)
  - :heavy_check_mark: `A` [Bridges](src/algorithms/graph/bridges) - DFS based algorithm
  - :heavy_check_mark: `A` [Eulerian Path and Eulerian Circuit](src/algorithms/graph/eulerian-path) - Fleury's algorithm - Visit every edge exactly once
  - :heavy_check_mark: `A` [Hamiltonian Cycle](src/algorithms/graph/hamiltonian-cycle) - Visit every vertex exactly once
  - :heavy_check_mark: `A` [Strongly Connected Components](src/algorithms/graph/strongly-connected-components) - Kosaraju's algorithm
  - :heavy_check_mark: `A` [Travelling Salesman Problem](src/algorithms/graph/travelling-salesman) - shortest possible route that visits each city and returns to the origin city
- **Cryptography**
  - :heavy_check_mark: `B` [Polynomial Hash](src/algorithms/cryptography/polynomial-hash) - rolling hash function based on polynomial
  - :heavy_check_mark: `B` [Rail Fence Cipher](src/algorithms/cryptography/rail-fence-cipher) - a transposition cipher algorithm for encoding messages
  - :heavy_check_mark: `B` [Caesar Cipher](src/algorithms/cryptography/caesar-cipher) - simple substitution cipher
  - :heavy_check_mark: `B` [Hill Cipher](src/algorithms/cryptography/hill-cipher) - substitution cipher based on linear algebra
- **Machine Learning**
  - :heavy_check_mark: `B` [NanoNeuron](https://github.com/trekhleb/nano-neuron) - 7 simple JS functions that illustrate how machines can actually learn (forward/backward propagation)
  - :heavy_check_mark: `B` [k-NN](src/algorithms/ml/knn) - k-nearest neighbors classification algorithm
  - :heavy_check_mark: `B` [k-Means](src/algorithms/ml/k-means) - k-Means clustering algorithm
- **Uncategorized**
  - :heavy_check_mark: `B` [Tower of Hanoi](src/algorithms/uncategorized/hanoi-tower)
  - :heavy_check_mark: `B` [Square Matrix Rotation](src/algorithms/uncategorized/square-matrix-rotation) - in-place algorithm
  - :heavy_check_mark: `B` [Jump Game](src/algorithms/uncategorized/jump-game) - backtracking, dynamic programming (top-down + bottom-up) and greedy examples
  - :heavy_check_mark: `B` [Unique Paths](src/algorithms/uncategorized/unique-paths) - backtracking, dynamic programming and Pascal's Triangle based examples
  - :heavy_check_mark: `B` [Rain Terraces](src/algorithms/uncategorized/rain-terraces) - trapping rain water problem (dynamic programming and brute force versions)
  - :heavy_check_mark: `B` [Recursive Staircase](src/algorithms/uncategorized/recursive-staircase) - count the number of ways to reach to the top (4 solutions)
  - :heavy_check_mark: `B` [Best Time To Buy Sell Stocks](src/algorithms/uncategorized/best-time-to-buy-sell-stocks) - divide and conquer and one-pass examples
  - :heavy_check_mark: `A` [N-Queens Problem](src/algorithms/uncategorized/n-queens)
  - :heavy_check_mark: `A` [Knight's Tour](src/algorithms/uncategorized/knight-tour)

### Algorithms by Paradigm

An algorithmic paradigm is a generic method or approach which underlies the design of a class
of algorithms. It is an abstraction higher than the notion of an algorithm, just as an
algorithm is an abstraction higher than a computer program.

- **Brute Force** - look at all the possibilities and selects the best solution
  - `B` [Linear Search](src/algorithms/search/linear-search)
  - `B` [Rain Terraces](src/algorithms/uncategorized/rain-terraces) - trapping rain water problem
  - `B` [Recursive Staircase](src/algorithms/uncategorized/recursive-staircase) - count the number of ways to reach to the top
  - `A` [Maximum Subarray](src/algorithms/sets/maximum-subarray)
  - `A` [Travelling Salesman Problem](src/algorithms/graph/travelling-salesman) - shortest possible route that visits each city and returns to the origin city
  - `A` [Discrete Fourier Transform](src/algorithms/math/fourier-transform) - decompose a function of time (a signal) into the frequencies that make it up
- **Greedy** - choose the best option at the current time, without any consideration for the future
  - `B` [Jump Game](src/algorithms/uncategorized/jump-game)
  - `A` [Unbound Knapsack Problem](src/algorithms/sets/knapsack-problem)
  - `A` [Dijkstra Algorithm](src/algorithms/graph/dijkstra) - finding the shortest path to all graph vertices
  - `A` [Prim’s Algorithm](src/algorithms/graph/prim) - finding Minimum Spanning Tree (MST) for weighted undirected graph
  - `A` [Kruskal’s Algorithm](src/algorithms/graph/kruskal) - finding Minimum Spanning Tree (MST) for weighted undirected graph
- **Divide and Conquer** - divide the problem into smaller parts and then solve those parts
  - `B` [Binary Search](src/algorithms/search/binary-search)
  - `B` [Tower of Hanoi](src/algorithms/uncategorized/hanoi-tower)
  - `B` [Pascal's Triangle](src/algorithms/math/pascal-triangle)
  - `B` [Euclidean Algorithm](src/algorithms/math/euclidean-algorithm) - calculate the Greatest Common Divisor (GCD)
  - `B` [Merge Sort](src/algorithms/sorting/merge-sort)
  - `B` [Quicksort](src/algorithms/sorting/quick-sort)
  - `B` [Tree Depth-First Search](src/algorithms/tree/depth-first-search) (DFS)
  - `B` [Graph Depth-First Search](src/algorithms/graph/depth-first-search) (DFS)
  - `B` [Matrices](src/algorithms/math/matrix) - generating and traversing the matrices of different shapes
  - `B` [Jump Game](src/algorithms/uncategorized/jump-game)
  - `B` [Fast Powering](src/algorithms/math/fast-powering)
  - `B` [Best Time To Buy Sell Stocks](src/algorithms/uncategorized/best-time-to-buy-sell-stocks) - divide and conquer and one-pass examples
  - `A` [Permutations](src/algorithms/sets/permutations) (with and without repetitions)
  - `A` [Combinations](src/algorithms/sets/combinations) (with and without repetitions)
- **Dynamic Programming** - build up a solution using previously found sub-solutions
  - `B` [Fibonacci Number](src/algorithms/math/fibonacci)
  - `B` [Jump Game](src/algorithms/uncategorized/jump-game)
  - `B` [Unique Paths](src/algorithms/uncategorized/unique-paths)
  - `B` [Rain Terraces](src/algorithms/uncategorized/rain-terraces) - trapping rain water problem
  - `B` [Recursive Staircase](src/algorithms/uncategorized/recursive-staircase) - count the number of ways to reach to the top
  - `A` [Levenshtein Distance](src/algorithms/string/levenshtein-distance) - minimum edit distance between two sequences
  - `A` [Longest Common Subsequence](src/algorithms/sets/longest-common-subsequence) (LCS)
  - `A` [Longest Common Substring](src/algorithms/string/longest-common-substring)
  - `A` [Longest Increasing Subsequence](src/algorithms/sets/longest-increasing-subsequence)
  - `A` [Shortest Common Supersequence](src/algorithms/sets/shortest-common-supersequence)
  - `A` [0/1 Knapsack Problem](src/algorithms/sets/knapsack-problem)
  - `A` [Integer Partition](src/algorithms/math/integer-partition)
  - `A` [Maximum Subarray](src/algorithms/sets/maximum-subarray)
  - `A` [Bellman-Ford Algorithm](src/algorithms/graph/bellman-ford) - finding the shortest path to all graph vertices
  - `A` [Floyd-Warshall Algorithm](src/algorithms/graph/floyd-warshall) - find the shortest paths between all pairs of vertices
  - `A` [Regular Expression Matching](src/algorithms/string/regular-expression-matching)
- **Backtracking** - similarly to brute force, try to generate all possible solutions, but each time you generate next solution you test
  if it satisfies all conditions, and only then continue generating subsequent solutions. Otherwise, backtrack, and go on a
  different path of finding a solution. Normally the DFS traversal of state-space is being used.
  - `B` [Jump Game](src/algorithms/uncategorized/jump-game)
  - `B` [Unique Paths](src/algorithms/uncategorized/unique-paths)
  - `B` [Power Set](src/algorithms/sets/power-set) - all subsets of a set
  - `A` [Hamiltonian Cycle](src/algorithms/graph/hamiltonian-cycle) - Visit every vertex exactly once
  - `A` [N-Queens Problem](src/algorithms/uncategorized/n-queens)
  - `A` [Knight's Tour](src/algorithms/uncategorized/knight-tour)
  - `A` [Combination Sum](src/algorithms/sets/combination-sum) - find all combinations that form specific sum
- **Branch & Bound** - remember the lowest-cost solution found at each stage of the backtracking
  search, and use the cost of the lowest-cost solution found so far as a lower bound on the cost of
  a least-cost solution to the problem, in order to discard partial solutions with costs larger than the
  lowest-cost solution found so far. Normally BFS traversal in combination with DFS traversal of state-space
  tree is being used.

## How to use this repository

**Install all dependencies**

```
npm install
```

**Run ESLint**

You may want to run it to check code quality.

```
npm run lint
```

**Run all tests**

```
npm test
```

**Run tests by name**

```
npm test -- 'LinkedList'
```

**Playground**

You may play with data-structures and algorithms in `./src/playground/playground.js` file and write
tests for it in `./src/playground/__test__/playground.test.js`.

Then just simply run the following command to test if your playground code works as expected:

```
npm test -- 'playground'
```

## Useful Information

### References

[▶ Data Structures and Algorithms on YouTube](https://www.youtube.com/playlist?list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)

### Big O Notation

_Big O notation_ is used to classify algorithms according to how their running time or space requirements grow as the input size grows.
On the chart below you may find most common orders of growth of algorithms specified in Big O notation.

![Big O graphs](./assets/big-o-graph.png)

Source: [Big O Cheat Sheet](http://bigocheatsheet.com/).

Below is the list of some of the most used Big O notations and their performance comparisons against different sizes of the input data.

| Big O Notation | Computations for 10 elements | Computations for 100 elements | Computations for 1000 elements |
| -------------- | ---------------------------- | ----------------------------- | ------------------------------ |
| **O(1)**       | 1                            | 1                             | 1                              |
| **O(log N)**   | 3                            | 6                             | 9                              |
| **O(N)**       | 10                           | 100                           | 1000                           |
| **O(N log N)** | 30                           | 600                           | 9000                           |
| **O(N^2)**     | 100                          | 10000                         | 1000000                        |
| **O(2^N)**     | 1024                         | 1.26e+29                      | 1.07e+301                      |
| **O(N!)**      | 3628800                      | 9.3e+157                      | 4.02e+2567                     |

### Data Structure Operations Complexity

| Data Structure         | Access | Search | Insertion | Deletion | Comments                                             |
| ---------------------- | :----: | :----: | :-------: | :------: | :--------------------------------------------------- |
| **Array**              |   1    |   n    |     n     |    n     |                                                      |
| **Stack**              |   n    |   n    |     1     |    1     |                                                      |
| **Queue**              |   n    |   n    |     1     |    1     |                                                      |
| **Linked List**        |   n    |   n    |     1     |    n     |                                                      |
| **Hash Table**         |   -    |   n    |     n     |    n     | In case of perfect hash function costs would be O(1) |
| **Binary Search Tree** |   n    |   n    |     n     |    n     | In case of balanced tree costs would be O(log(n))    |
| **B-Tree**             | log(n) | log(n) |  log(n)   |  log(n)  |                                                      |
| **Red-Black Tree**     | log(n) | log(n) |  log(n)   |  log(n)  |                                                      |
| **AVL Tree**           | log(n) | log(n) |  log(n)   |  log(n)  |                                                      |
| **Bloom Filter**       |   -    |   1    |     1     |    -     | False positives are possible while searching         |

### Array Sorting Algorithms Complexity

| Name               |     Best      |         Average         |            Worst            | Memory | Stable | Comments                                                      |
| ------------------ | :-----------: | :---------------------: | :-------------------------: | :----: | :----: | :------------------------------------------------------------ |
| **Bubble sort**    |       n       |      n<sup>2</sup>      |        n<sup>2</sup>        |   1    |  Yes   |                                                               |
| **Insertion sort** |       n       |      n<sup>2</sup>      |        n<sup>2</sup>        |   1    |  Yes   |                                                               |
| **Selection sort** | n<sup>2</sup> |      n<sup>2</sup>      |        n<sup>2</sup>        |   1    |   No   |                                                               |
| **Heap sort**      | n&nbsp;log(n) |      n&nbsp;log(n)      |        n&nbsp;log(n)        |   1    |   No   |                                                               |
| **Merge sort**     | n&nbsp;log(n) |      n&nbsp;log(n)      |        n&nbsp;log(n)        |   n    |  Yes   |                                                               |
| **Quick sort**     | n&nbsp;log(n) |      n&nbsp;log(n)      |        n<sup>2</sup>        | log(n) |   No   | Quicksort is usually done in-place with O(log(n)) stack space |
| **Shell sort**     | n&nbsp;log(n) | depends on gap sequence | n&nbsp;(log(n))<sup>2</sup> |   1    |   No   |                                                               |
| **Counting sort**  |     n + r     |          n + r          |            n + r            | n + r  |  Yes   | r - biggest number in array                                   |
| **Radix sort**     |    n \* k     |         n \* k          |           n \* k            | n + k  |  Yes   | k - length of longest key                                     |

## Project Backers

> You may support this project via ❤️️ [GitHub](https://github.com/sponsors/trekhleb) or ❤️️ [Patreon](https://www.patreon.com/trekhleb).

[Folks who are backing this project](https://github.com/trekhleb/javascript-algorithms/blob/master/BACKERS.md) `∑ = 0`
