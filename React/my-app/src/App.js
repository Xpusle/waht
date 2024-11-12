// // import logo from './logo.svg';
// // import './App.css';

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// // export default App;
// import Task from "./Task";
// function App(){
//   return(
//     <div>
//       <Task text="Buy oil" compelted={false}></Task>
//     </div>
//   )
// };export default App;

// import React,{Component} from "react";
// class Counter extends Component{
//   constructor(){
//     super();
//     this.state={
//       count:0
//     }
//   }

//   increment=()=>{
//     this.setState({count:this.state.count +1})
//   }

//   decrement=()=>{
//     this.setState({count:this.state.count -1})
//   }

//   render(){
//     return(
//       <div>
//         <h1>{this.state.count}</h1>
//         <button onClick={this.increment}>increment</button>
//         <button onClick={this.decrement}>decrement</button>
//       </div>
//     )
//   }
// }; export default Counter;
// import LoginForm from "./LoginForm";
// function App(){
//   return (
//     <div>
//       <LoginForm />
//     </div>
//   )
// }; export default App;

// import Layout from "./Component/Layout";
// import Home from "./Component/Home";
// import Contact from "./Component/Contact";
// import Blog from "./Component/Blog";
// import { BrowserRouter,Routes,Route } from "react-router-dom";
// function App(){
//   return(
//     <div>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Layout/>}>
//             <Route index element={<Home/>}/>
//             <Route path="/Blog" element={<Blog />}/>
//             <Route path="/Contact" element={<Contact />}/>
//             </Route>
//         </Routes>
//       </BrowserRouter>
//     </div>
//   )
// }; export default App;
// import Profilepage from "./Profilepage";
// function App(){
//   return(
//     <div>
//       <Profilepage />
//     </div>
//   )
// }; export default Profilepage;