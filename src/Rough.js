// it is for react icon code.

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


// This is for 1st way to do.   both are way are same.

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import Home from './Home';
// import About from './About';

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//   <React.StrictMode>
//     <Home/>
//     <About name="Prateek Rai"  hobby="Coder"/>
//     <About name="Raj Rai"/>
//     <About name="Lev Raj"/>
//   </React.StrictMode>
// );

//   or  2nd way to do it.

import React, { useState } from "react";
import ReactDOM from "react-dom";
import Home from './components/Home';
import About, { youtube } from './components/About';


// const currentDate = new Date().toLocaleDateString();
// const currentTime= new Date().toLocaleTimeString();

// const img1 = "https://picsum.photos/200/300";
// const img2 = "https://picsum.photos/250/300";
// const img3 = "https://picsum.photos/300/300";
// const link = "https://www.instagram.com/_rairaj_/"
ReactDOM.render(
  <>
    {/* <h1 style={{color:"red"}}>Todays Date is = {currentDate} </h1> */}
    {/* <h1 style={{color:"green"}}>Current time is = {currentTime} </h1> */}

    {/* <div className="images">
      <img src={img1} alt="randomImages" />
      <img src={img2} alt="randomImages" />
      <a href={link} target="_hacker">
        <img src={img3} alt="randomImages" />
      </a>
    </div> */}

    <Home />
    <li> channel {youtube} </li>
    <About name="Prateek Rai" hobby="Coder" />
    <About name="Raj Rai" />
    <About name="Lev Raj" />
  </>,
  document.getElementById("root"))



// This is not working .This is map array. it is structure. how to use map array.

// {About.map(function datafun(val){
//   return(
//     <About 
//    key={val.id}       the key is vary important and unique  to identy the particular object in component. 
//    name={val.youtube}
//    />
//   );
// })}



// you always have  use function to use if else condition.  (here i use fat arrow function)

// const favseries= "netflix";

// const Favs = () => {
// if(favseries==="netflix"){
//   return <Netflix/>
// }else{
//   return <Amazon/>
// };
// };



// Array Destructuring...

// const [name1, name2, name3] = name;
// console.log("name1");


// //   Digital clock using React Js Hooks..

// import React, {useState} from "react";

//   const App = () => {
//   let newtime = new Date().toLocaleTimeString();
//   const [ctime, uptime] = useState(newtime);

//   const GetTime = () => {
//   newtime = new Date().toLocaleTimeString();
//   uptime(newtime);
//   };
//   setInterval(GetTime,1000);
//   return (
//     <>
//       <h1> {ctime} </h1>
//     </>
//   );
//   };
//   export default App;


// Events in React ....

// const App = () => {
//  const purple = 'yellow';   // here yellow colour value is stored in crbg and yellow color will be show in useState value.
//  const [crbg, setbg] = useState(purple);
// const [name, setName] = useState('click me');

// const bgChange = () => {
//  const newbg = 'green'
//  setbg(newbg);
//  setName('Ouch!!');
// }
//   return(
//     <>
//     <div style={ {backgroundColor : crbg} }>
//       <button onClick={bgChange}> {name} </button>
//     </div>
//     </>
//   );
// };
// export default App;



// How to create a Forms in react....

// import React, {useState} from "react";

// const App = () => {
//   const [fullName, setFullName] = useState({
//     fname: '',
//     lname: '',
//   });

//   const InputEvent = (event) => {
//     console.log(event.target.value);
//     console.log(event.target.name);

//     const value = event.target.value;
//     const name = event.target.name;

//     setFullName((preValue) => {
//       // console.log(preValue);
//       if (name === "fname") {
//         return {
//           fname: value,
//           lname: preValue.lname,
//         };
//       } else if (name === "lname") {
//         return {
//           fname: preValue.fname,
//           lname: value,
//         };
//       }
//     });
//   };

//   const onSubmits = (event) => {
//     event.preventDefault();    // by using this the page will not refresh and value will add after heading or any where youwant
//     alert('form is submitted')
//   };

//   return (
//     <>
//       <form onSubmit={onSubmits}>
//         <div>
//           <h1> Hello {fullName.fname} {fullName.lname} </h1>
//           <input type="text" placeholder="Enter Your Full Name" name="fName" onChange={InputEvent} value={fullName.fname}></input>
//           <input type="text" placeholder="Enter Your Last Name" name="lName" onChange={InputEvent} value={fullName.lname}></input>
//           <button type="submit"> Click Here </button>
//         </div>
//       </form>
//     </>
//   );
// };
// export default App;



//    spread opreator.    or  ()...)

// // 1st Case.
// const fullName= ['Prateek' , 'Rai'];
// const bio= [1,26,'male', ...fullName];

// 2nd Case.
// var shootgames= ['Bgmi','cod','endgames'];
// var racinggame= ['need for speed', 'bechbuggy', 'dr driving'];
// var total= [...shootgames, ...racinggame];

// console.log(games)

// 3rd case.

// var shootgames= ['bgmi','cod','freefire'];
// var[first, ...remain] = shootgames;

// console.log(first);  // bgmi
// console.log(remain);


// 4th case and m.mimp case....

// const fullName = {
//   fname : "Prateek",
//   lname : "Rai",
// };

// const bioData = {
//   id : 1,
//   ...fullName,
//   age : 20,
//   gender : "male", 
// };

// console.log(bioData);



//  Increment and decrement  state variable  on button click...


const TodoList = () => {
  return(
    <>
     <div className="main_div">
      <div className="center_div">
        <h1> {-+6} </h1>
        <div className="btn-div">
          <button>Increment</button>
          <button>Decrement</button>
        </div>
      </div>
     </div>
    </>
  );
};

export default TodoList;
