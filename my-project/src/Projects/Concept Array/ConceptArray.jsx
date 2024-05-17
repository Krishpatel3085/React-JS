import React from 'react'

export default function ConceptArray() {
  // Question 1 ====================>
  // Circle
  const circleArea = (radius) => Math.PI * radius ** 2;

  // Rectangle area
  const rectangleArea = (length, width) => length * width;

  // Triangle area
  const triangleArea = (base, height) => 0.5 * base * height;


  // Question 2 ====================>

  let a = [1, 2, 3, 4, 5];
  const squareCubeArray = a.map(num => ({ square: num ** 2, cube: num ** 3 }));

  // Question 3 ====================>

  let b = [11, 22, 33, 44, 55]

  // Question 4 ====================>

  const numToFind = 44;
  const found = b.includes(numToFind);

  // Question 5 ====================>
  let c = [10, 20, 30, 40, 50];
  const sum = c.reduce((item, ind) => item + ind, 0);

  // Question 6 ====================>

  let arr = [11, 22, 33, 44, 55];
  const even = arr.filter(num => num % 2 === 0);
  const odd = arr.filter(num => num % 2 !== 0);

  // Question 7 ====================>
  const LeapYear = year => (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

  // Question 8 ====================>

  let mergedArray = [...a, ...b];

  // Question 9 ====================>
  const student =
  {
    name: "John",
    age: 20,
    grade: "A"
  }

  // Question 10 ====================>

  const arrs = ["mango", "orange", "mango", "apple", "apple", "pineple", "apple"];
  const counts = {};
  arrs.forEach(element => {
    if (counts[element]) {
      counts[element]++;
    } else {
      counts[element] = 1;
    }
  });


  return (
    <>
      <ul>
        <h2>Q1:- Find area of circle,rectangle & triangle using arrow function.</h2><br />
        <li> Circle Area is:- {circleArea(5)}</li><br />
        <li> Rectangl Area is:- {rectangleArea(4, 6)}</li><br />
        <li>Tringle Area is:-   {triangleArea(3, 8)}</li>
        <br /><br />

      </ul>

      <h2>Q2:- let a = [1,2,3,4,5] find square & cube of array elements.</h2>

      {squareCubeArray.map((item, index) => (
        <p key={index}> Square: {item.square}, Cube: {item.cube}</p>
      ))
      }

      <br /><br />

      <h2>Q3:- let b = [11,22,33,44,55] how to display records?</h2>

      {
        b.map((num, index) => (
          <p key={index}>Index {index + 1}: {num}</p>
        ))

      }

      <br /><br />

      <h2>Q4:- find 44 element is include in array or not? if element is found return "No is found" else "No is not found" print message. </h2>
      <p>{found ? `${numToFind} is found` : `${numToFind} is not found`}</p>

      <br />

      <h2>Q5:-  let a = [10,20,30,40,50] find sum of array elements. </h2>
      <p>{sum}</p>

      <br />
      <h2>Q6:- let arr = [11,22,33,44,55] find even & odd elements.</h2>
      <p>Even No is:- {even}  </p>
      <p>Odd No  is :- {odd}</p>

      <br />
      <h2>Q7:-  Find year is leap year or not?</h2>
      <p>2024 is Leap Year:- {LeapYear ? `Yes` : ` no`}</p>

      <br />
      <h2>Q8:- Merge above two array a & arr.</h2>
      <p>Merg:- {mergedArray}</p>


      <br />
      <h2>Q9:- create student object & display students' information.</h2>
      <p>name:- {student.name}</p>
      <p>age:- {student.age}</p>
      <p>grade:- {student.grade}</p>

      <br />
      <h2>Q10:-  let a= ["mango","orange","mango","apple",apple","pineple","apple"] count how many time elements are include in array.</h2>
   
      <ul>
          {Object.keys(counts).map((key, index) => (
            <li key={index}>
              {key}: {counts[key]}
            </li>
          ))}
        </ul>
    </>
  )
}
