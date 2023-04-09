function arrayOfMultiples (num, length) {
    let arr = [];
    let x = 1;
    for (let i = 1; i <= length; i++) {
      arr.push(num * x);
      x++;
    }
    return arr;
  };
  console.log(arrayOfMultiples(7, 5));
  console.log(arrayOfMultiples(12, 10));
  console.log(arrayOfMultiples(17, 6));