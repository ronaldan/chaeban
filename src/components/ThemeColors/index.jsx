import React, { useContext } from 'react';
import { AppContext } from '../../context';
import './style.scss';

const ThemeColors = () => {
  const { theme } = useContext(AppContext);
  const colors = Object.values(theme);

  return (
    <div className="tc__container">
      {colors.map((color, index) => (
        <div
          key={index}
          className="tc__circle"
          style={{ backgroundColor: color }}
        />
      ))}
    </div>
  );
};

export default ThemeColors;
