import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TicTacToe from './TicTac'; 
import Calculator from './Calc'; 


export default function App() {
  return (
    <Router>
      <div className='buttons'>
        <Link to='/TicTac'><button>TicTacToe</button></Link>
        <Link to='/Calc'><button>Calculator</button></Link>
      </div>
      <Routes>
        <Route path="/TicTac" element={<TicTacToe />} />
        <Route path="/Calc" element={<Calculator />} />
      </Routes>
    </Router>
  );
}
