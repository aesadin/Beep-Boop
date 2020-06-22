# Won't You Be My Neighbor

#### _Date_ 
June 12, 2020

#### By _Allison Sadin_

## Description

This website takes a number input by the user and creates a range from 0 up to and including the inputted number. Then it replaces all numbers in that range containing the digit 3, with the sentence "Won't you be my neighbor?". Then it replaces all numbers in that range containing the digit 2, with the word "Boop!". Then it replaces all numbers in that range containing the digit 1, with the word "Beep!". Then it returns the string to the user.

## Specs
1. Turn user's inputed number into an integer.
  * Input: "5"
  * Output: 5

2. The program returns a range of numbers from 1 to the users inputted number.
  * Input: 4
  * Output: 1, 2, 3, 4

3. Replace the number 1 with the string "Beep!"
  * Input: 1
  * Output: "Beep!"

4. Replace the number 2 with the string "Boop!"
  * Input: 2
  * Output: "Beep", "Boop!"

5. Replace the number 3 with the string "Won't you be my neighbor?"
  * Input: 3
  * Output: "Beep", "Boop", "Won't you be my neighbor?"

6. When a number in the sequence has any digits in it with a '1', replace number with the string "Beep!".
  * Input: 11
  * Output: "Beep", "Boop", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!"

7. When a number in the sequence has any digits in it with a '2', replace number with the string "Boop!". 
  * Input: 12
  * Output: "Beep", "Boop", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!" "Boop!"

8. When a number contains a '1', '2' and '3', the last exception is to be followed over the previous two.
  * input: 13
  * Output: "Beep", "Boop", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!" "Boop!", "Won't you be my neighbor?"



## Setup/Installation Requirements

#### Open by downloading:
1. Download the repository onto your computer
2. Drag and drop index.html in to your web browser from gh-pages:  https://aesadin.github.io/Beep-Boop/

#### Open with Bash/GitBash:
1. _open your bash terminal_
2. _use git clone, copy and paste github URL using clone or download green button:  https://aesadin.github.io/Beep-Boop/ _
3. _Navigate into the 'My-Portfolio' directory using cd My-Portfolio_
4. _open in Visual Studio code using 'code .' command_
5. _Open index.html in Chrome or preferred browser: 'open index.html'_


## Known Bugs

I am unable to get my code to iterate through the array and correctly replace the numbers with their determined words. I know the issue has to do with the way I am looping because if I input a number that is 3 or larger, it returns 1000 iterations of "Won't you be my neighbor?".


## Support and contact details

_For questions concerns or contributions, contact Allison Sadin
at allisonsadin@gmail.com_

## Technologies Used

* _HTML_
* _Bootstrap_
* _css_
* _jQuery_
* _Javascript_

### License

Copyright (c) 2020 **_Allison Sadin_**

**_This software is licensed under the MIT license_**
