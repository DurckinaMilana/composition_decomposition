import React, { ReactNode } from 'react';
import './card-style.css';

type CardProps = {
  title: string,
  children: ReactNode
}

const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div className='card'>
      <h3>{title}</h3>
      {children}
    </div>
  )
}

export default Card