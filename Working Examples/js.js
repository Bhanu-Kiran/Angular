// // let company={
// //         name:'Ford',
// //         established:'1903',
// //         place:'Detriot',
// //         country:'United States',
// //         famous_car:'Mustang'
// //     };
// // let cars = [
// //     "Mustang",
// //     "shelby",
// //     "gt40",
// //     "figo"
// //   ];

//   let a=[];
//   let b=[]; 
//   let personsData = [
//     {name:'Kohli', city:'Banglore'}, 
//     {name:'Rohit', city:'Banglore'}, 
//     {name:'Rohit', city:'Banglore'}, 
//     {name:'Rohit', city:'Goa'}, 
//     {name:'Dhawan', city:'Jaipur'},
//     {name:'Dhawan', city:'Delhi'},
//     {name:'Dhawan', city:'Jaipur'},
//     {name:'Chahal', city:'Delhi'},
//     {name:'Varun', city:'Nagaland'},
//     {name:'Kapil', city:'Hyderabad'},
//     {name:'Varun', city:'Nagaland'},
//     {name:'Rohit', city:'Vijayawada'}, 
//     {name:'Kohli', city:'Hyderabad'}, 
//     {name:'Kohli', city:'Hyderabad'} 
//  ];
//  let flag=0;
// //  function canadd(key)
// // {
// //     for(i=0;i<a.length;i++)
// //     {
// //         if(a[i].name===key.name && a[i].city===key.city){
// //             return false;
// //         }
// //     }
// //     return true;
// // }
// a.push(personsData[0]);
// for (let key of personsData) 
// {
//     // if(canadd(key))
//     // {
//     //     a.push(key);
//     // }
//     for(i=0;i<a.length;i++)
//     {
//         if(a[i].name===key.name && a[i].city===key.city){
//             flag=0;
//             break;
//         }
//     }
//     if(flag=== 1){
//         a.push(key);
//         flag=0;
//     }
// }
// console.log(a);

// function greet(par1, par2)
// {
//     console.log("hi "+par1+". Your age is "+par2);
// }

// greet("adnakj",26);
// let names = ['swami','santhosh','bhanu','chandu','saidruthi','swami','bhanu','swami','santhosh','bhanu','chandu','saidruthi',
//                 'hyderabad','banglore','chennai', 'kochi', 'hyderabad','banglore','chennai',
//                 20, 55, 13, 46, 20, 55, 13, 46,
//                 'ap','telangana','mp','hp','telangana','mp'];
// let cities = ['hyderabad','banglore','chennai', 'kochi', 'hyderabad','banglore','chennai' ];
// let ages = [20, 55, 13, 46, 20, 55, 13, 46] ;
// let states=['ap','telangana','mp','hp','telangana','mp'];
// function reverse(arr)
// {
//     let temp = [];
//     for(var i = arr.length-1; i >= 0; i--) 
//     {
//         temp.push(arr[i]);
//     }
//     return temp;
// }
// function oddArray(arr)
// {
//     let temp=[];
//     for(let i=0;i<arr.length-1;i++)
//     {
//         if(i%2 !== 0)
//             temp.push(arr[i]);
//     }
//     return temp;
// }
// function removal(arr)
// {
//     let temp=[];
//     for(i=0;i<arr.length-1;i++)
//     {
//         if(temp.indexOf(arr[i]) === -1)
//         {
//             temp.push('text'+arr[i]);
//         }
//     }
//     return temp;
// }

// names = oddArray(names);
// names = removal(names);
// names = reverse(names);
// console.log(names);
                                         para1Mouse();