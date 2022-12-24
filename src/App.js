import { useEffect, useState } from 'react';
import './App.css';


function Change() {
  const [color,setColor] = useState('blue')
  
  
  return (
    <div className="App">
      <div className='wrapper'>
        {
          color === "blue" 
          ? 
          <button 
            className='blue' 
            onClick={() => setColor('red')}>
              синий
          </button> 
          : 
          <button 
            className='red' 
            onClick={() => setColor('blue')}>
              красный
          </button>
        }
      </div>
    </div>
  );
  
}

export default Change;



























// const App = () => {
//   const shovHide = () => {
//       let button = document.getElementById('blue')
//       if (button.style.display === 'none') {
//           button.style.display = 'block'
//       } else if (button.style.display === 'block') {
//           button.style.display = 'none'
//       } 
      


//       let button2 = document.getElementById('green')
//       if (button2.style.display === 'none') {
//           button2.style.display = 'block'
//       } else if (button2.style.display === 'block') {
//           button2.style.display = 'none'
//       }

      
      
//   }

//   return (
//       <div>
//           <button id='green' onClick={shovHide} style={{width: '250px', height: '250px', backgroundColor: 'green', marginBottom: '50px'}}>
//               green
//           </button>
//           <button id='blue' onClick={shovHide} style={{ display: 'none', width: '250px', height: '250px', backgroundColor: 'blue' }}>blue</button>
//       </div>
//   )
// }

// export default App;

  

