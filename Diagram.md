# 🗺️ Flowchart: Animal Leg Count Logic

This diagram shows the logic used in the `countFourLeggedAnimals` function.

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
