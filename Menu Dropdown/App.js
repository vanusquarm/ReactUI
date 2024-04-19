import React, {useState} from 'react';

export default function App() {
  const [isOpened, setOpen] = useState(false);

  return (
    <div className="App">
      <ul className='menu-container'>
        <li className="menu-item">Home</li>
        <li className="menu-item">About</li>
        <li className="menu-item">Services</li>
        <li className="menu-item">Contact</li>
      </ul>
      <div className={`dropdown-menu ${isOpened? 'show':''}`}>
        <div className="dropdown-toggle" onClick={() => setOpen(curr => !curr)}>Menu</div>
        {        
        isOpened && 
        <ul className='dropdown-content'>
          <li className="menu-item">Home</li>
          <li className="menu-item">About</li>
          <li className="menu-item">Services</li>
          <li className="menu-item">Contact</li>
        </ul>
        }
      </div>
    </div>
  );
}
