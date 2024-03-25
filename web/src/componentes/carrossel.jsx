import  { useState } from 'react';
import './css/carossel.css'


import { CardPay, CardService, CardWorkspace } from './cards';

import Image1 from '../assets/workspace.png';
import Image2 from '../assets/service.png';
import Image3 from '../assets/pay.png';

const items = [
  { id: 1, text: <CardWorkspace />, imageUrl: Image1 },
  { id: 2, text: <CardService />, imageUrl: Image2 },
  { id: 3, text: <CardPay />, imageUrl: Image3 },
];

const Carousel = () => {
    const [currentItem, setCurrentItem] = useState(items[0]);
    const [activeComponent, setActiveComponent] = useState(1); // Inicialmente o primeiro componente é ativado
  
    const handleTextClick = (item) => {
      setCurrentItem(item);
      setActiveComponent(item.id);
    };
  
    return (
      <div className="carousel">
        <div className="text-box">
          {items.map((item) => (
            <div
              key={item.id}
              className={`text-item ${activeComponent === item.id ? 'active' : ''}`}
              onClick={() => handleTextClick(item)}
            >
              {item.text}
            </div>
          ))}
        </div>
        <div className="main-item-container">
          <img src={currentItem.imageUrl} alt="Main" className="main-image" />
        </div>
      </div>
    );
  };
  
  export default Carousel;
