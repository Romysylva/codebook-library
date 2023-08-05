
import Counter from '../Subcounter/Counter';

const Counters = ({onReset, counters, onIncrement, onDelete, onDecrement}) => {
    
    return (
        <div>
                <button 
                onClick={onReset} 
                className="danger__c p-3 m-2 light__c"
                >Reset
                </button>

            {counters.map(counter => (
                <Counter 
                key={counter.id} 
                // value={counter.value} 
                // id={counter.id}
                onIncrement={onIncrement}
                onDecrement={onDecrement}
                onDelete={onDelete} 
                counter={counter}
                />
            ))}
        
        
        </div>
    );
};

export default Counters;

// import NavBar from "./Components/Navbar/NavBar";
// import Counters from "./Components/Counters/Counters";
// // import Mycounters from "./Components/Mycounters"
// import Public from './Public';
// import Private1 from './Private1';
// import Private2 from './Private2';
// // import Home from './Home';
// import SecurityProvider from './SecurityProvider';
// import SecureRoute from './SecureRoute';
// import "./App.css"
// import { useState } from "react";
// import Home from "./Home"
// import Login from "./Login"
// import Logout from "./Logout";

// slate-800: "1e2938"


{/* <NavBar totalcounter={state.counters.filter(x => x.value > 0).length}/>
    <Counters
    counters={state.counters}
    onReset={handleReset}
    onIncrement={handleIncrement}
    onDecrement={handleDecrement}
    onDelete={handleDelete}
    /> */}



        {/* <Home/>
        <Login/>
        <Logout/> */}




      //   <SecurityProvider>
      //   <Routes>
      //     <Route exact path="/" element={<Home/>}>
      //       {/* <Home/> */}
      //     </Route>
      //     <SecureRoute path='/private1' element={<Private1/>} >
      //     {/* <Private1/> */}

      //     </SecureRoute>
      //     <SecureRoute path='/private2' element={<Private2/>}>
      //       {/* <Private2/> */}
      //     </SecureRoute>
      //     <Route exact path="/public" element={<Public/>}>
      //       {/* <Public/> */}
      //     </Route>
      //   </Routes>
      // </SecurityProvider>



      // const [state, setState] = useState({
      //   counters: [
      //     {id: 1, value: 4},
      //     {id: 2, value: 0},
      //     {id: 3, value: 2},
      //     {id: 4, value: 0},
      //     {id: 5, value: 9},
      //     {id: 6, value: 0},
      //     {id: 7, value: 0},
      //     {id: 8, value: 7},
      //     ]
      // }
      
      // );
    
      // const handleIncrement = (counter) => {
      //   const counters = [...state.counters];
      //   const index = counters.indexOf(counter);
      //   counters[index] = {...counter};
      //   counters[index].value ++;
      //   setState({counters});
    
      // }
      // const handleDecrement = (counter) => {
      //   const counters =[...state.counters];
      //   const index = counters.indexOf(counter);
      //   counters[index] = {...counter};
      //   counters[index].value --;
    
    
      //   setState({counters});
    
      // }
      // const handleDelete = (counterId) => {
      //     const counters = state.counters.filter(x => x.id !== counterId);
      //     setState({counters})
    
      // }
    
      // const handleReset = () => {
      //     const counters = state.counters.map(x => {
      //         x.value = 0;
      //         return x;
      //     });
    
      //     setState({counters})
      // };