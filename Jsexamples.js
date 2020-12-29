// call by value/name

// function onloadPrint()
// {
//     let elements = document.querySelectorAll('p > mark');

//     console.log(elements);
    
// }   

// call by reference 1
// let onloadPrint = function()
// {
//     let elements = document.querySelectorAll('p > mark');

//     console.log(elements);
    
// }   
// onloadPrint();
// call by reference 2
// let onloadPrint = () => 
// {
//     {
//         let elements = document.getElementsByTagName('p');
    
//         elements.forEach( => {
            
//         });        
//     }  
// };

// onloadPrint();
// let checkEO = (n) => 
// {
//     if(n%2 === 0)
//         console.log(n + "is even");
//     else
//         console.log(n + "is Odd");
// };

// let printHi = (user,age,city) => console.log("Hi "+ user + ". you are " + age + " and in " + city + ".");
 
// let cubeN = (n) => console.log(n**3);
// checkEO(111);
// printHi("Drake","21","Los Santos");
// cubeN(22);
// let cities = ['Hyberabad','Vijayawada','Banglore'];
// let num = [1,2,3,4,5,6,7,8,9,10];
// cities.forEach(element => { console.log(element); });
// let Dnum = num.map(n => n*2);
// let Onum = num.filter(n => n%2);
// console.log(Dnum,Onum);
let personsData = [
        {name:'Kohli', age:15, city:'Banglore'}, 
        {name:'Rohit', age:15, city:'Goa'}, 
        {name:'Dhawan', age:15, city:'Jaipur'},
        {name:'Chahal', age:15, city:'Delhi'},
        {name:'Varun', age:15, city:'Nagaland'},
     ];
console.log(personsData.some(p => p.city === 'Jaipur'));
console.log(personsData.every(p => p.city === 'Goa'));