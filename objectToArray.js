const toArray = (obj) => {
    let a = [];
    a = Object.entries(obj);
    return a;
  };
  
  
  console.log(toArray({ a: 1, b: 2 }));
  console.log(toArray({ shrimp: 15, tots: 12 }));