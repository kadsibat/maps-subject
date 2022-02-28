//setler-kümeler

const myset= new Set();
 myset.add(100);
 myset.add(100);
 myset.add(3.14);
 myset.add("mustafa");
 myset.add(true);
 myset.add([1,2,3]);
 myset.add({a:1,b:2});
 
 console.log(myset);
 const myset2= new Set([100,3.14,"mustafa"]);
 console.log(myset2);
  console.log(myset.size);

  //delete metod

//   myset.delete("mustafa");
//   console.log(myset);

// has Metodu
console.log(myset.has("mustafa"));
 console.log(myset.has(3.14));
  console.log(myset.has(200));
  console.log(myset.has([1,2,3]));

  //for forEach

  myset.forEach(function(value){
      console.log(value)
  });

//for of 
for(let value of myset){
    console.log(value);
}

//setlerden array Oluşturma

const array=Array.from(myset);
console.log(array);