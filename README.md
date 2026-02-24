# Animal-leg-count
AD311 – Tech Interview Prep: Animal Leg Count in the Forest

🦁 Overview
This project simulates a technical interview challenge.
You are given an array of animal names and must determine how many of them have exactly four legs.

The assignment includes:

A working JavaScript solution

A diagram/flowchart of your approach

Test cases (normal + edge)

Time & space complexity

A refinement step

A recorded walkthrough explaining your solution

🧠 Problem Description
You will receive an array of animal names, such as:

js
['lion', 'monkey', 'deer']
Your task is to count how many of these animals belong to the four‑legged category.

🧩 Solution (Baseline Version)
js
function countFourLeggedAnimals(animals) {
  const fourLegged = ['lion', 'deer', 'elephant', 'horse', 'dog', 'cat'];
  let count = 0;

  for (const animal of animals) {
    if (fourLegged.includes(animal)) {
      count++;
    }
  }

  return count;
}
🔄 Refinement (Improved Version)
js
function countFourLeggedAnimals(animals) {
  const fourLegged = new Set(['lion', 'deer', 'elephant', 'horse', 'dog', 'cat']);
  return animals.filter(a => fourLegged.has(a)).length;
}
Why this is better:

Set provides faster lookups

Code becomes shorter and more expressive

Still maintains 
𝑂
(
𝑛
)
 time complexity

🗺️ Flowchart (Text Version)
Code
Start
  ↓
Input: animals[]
  ↓
Initialize count = 0
  ↓
For each animal in animals:
      ↓
  Is animal in fourLegged list?
      ↙        ↘
    Yes         No
    ↓           ↓
 count++     continue
  ↓
End loop
  ↓
Return count
🧪 Test Cases
✔ Normal Cases
Input	Expected Output
['lion', 'monkey', 'deer']	2
['horse', 'spider', 'ant']	1
['dog', 'cat', 'elephant']	3
✔ Edge Cases
Input	Expected Output
[]	0
['spider', 'snake', 'worm']	0
['unknown', 'alien', 'robot']	0
⏱️ Time & Space Complexity
Time Complexity:
You loop through the array once → O(n)

Space Complexity:
The four‑leg list is constant size → O(1)

The refined version uses a Set, still constant → O(1)

🎥 Video Requirements
Your recording must include:

Problem explanation

Diagram or flowchart

Coding the solution

Running test cases

Explaining complexity

Refining the solution

Final summary

You may use Copilot for everything except the recording itself, per assignment rules.
