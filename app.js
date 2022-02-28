// let myMap = new Map();

// console.log( typeof myMap);

//  const key1= "sibel";
//  const key2={a:1,b:20}
//  const key3=()=>2;

//  //set
//   myMap.set(key1,"string deger");
//   myMap.set(key2,"object literal deger");
//   myMap.set(key3,"function deger");

//   //get
//    console.log(myMap.get(key1));
//    console.log(myMap.get(key2));
//    console.log(myMap.get(key3));
//     console.log(myMap);
   

//    console.log(myMap.size);

// const cities= new Map();
//  cities.set("Ankara",5);
//  cities.set("İstanbul",15);
//  cities.set("İzmir",4);

 //foreach

//  cities.forEach(function(value,key){
//      console.log(key,value);
//  })

//for of
//  for(let [key,value] of cities){
//      console.log(key,value);
//  }

//   for(let key of cities.keys()){
//       console.log(key)
//   }
//  for(let value of cities.values()){
//      console.log(value);
//  }


//Arraylardan MAP Oluşturma

//  const array=[["key1","value1"],["key2","value2"]];
//  const lastMap = new Map(array);
//  console.log(lastMap);

//  //Map leren Array olusturma
//  const cities= new Map();

//  cities.set("Ankara",5);
//  cities.set("İstanbul",15);
//  cities.set("İzmir",4);

//  const arr = Array.from(cities);
// //  [["Ankara",5]["İstanbul",15]["İzmir",4]]
//  console.log(arr);