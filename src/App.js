import logo from './logo.svg';
import './App.css';
import { Component, useState } from 'react';

function App() {
  const [state, updateAge] = useState({ age: 10 });

  const handleClick = () => {
    updateAge({ age: state.age + 1 });
  };

  const handleMouseOver = () => {
    console.log('mouse over');
  };
  return (
    <div>
      <h1>Age is {state.age}</h1>
      <button onClick={handleClick} onMouseOver={handleMouseOver}>
        Click me!!!
      </button>
    </div>
  );
}

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { age: 10 };
//   }

//   render() {
//     const handleClick = () => {
//       let newAge = this.state.age + 1;
//       this.setState({ age: newAge });
//     };

//     const handleMouseOver = () => {
//       console.log('mouse over');
//     };
//     return (
//       <div>
//         <h1>Age is {this.state.age}</h1>
//         <button onClick={handleClick} onMouseOver={handleMouseOver}>
//           Click me!!!
//         </button>
//       </div>
//     );
//   }
// }

export default App;
