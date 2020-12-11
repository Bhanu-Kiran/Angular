let company={
        name:'Ford',
        established:'1903',
        place:'Detriot',
        country:'United States',
        famous_car:'Mustang'
    };
let cars = [
    "Mustang",
    "shelby",
    "gt40",
    "figo"
  ];
  let a=[];
  let b=[]; 
  let personsData = [
    {name:'Kohli', age:31, city:'Hyderabad'}, 
    {name:'Rohit', age:33, city:'Banglore'}, 
    {name:'Dhawan', age:35, city:'Jaipur'},
    {name:'Chahal', age:16, city:'Delhi'},
    {name:'Varun', age:20, city:'Nagaland'},
    {name:'Kapil', age:18, city:'Hyderabad'},

 ];
for (let key of personsData) {
    if (key.age>=18) 
        a.push(key.name);
    if(key.age>=21)
        b.push(key.name);
        
}
console.log(a);
console.log(b);
