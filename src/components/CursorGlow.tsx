'use client';

import { useEffect, useState, useCallback } from 'react';
import styles from './styles/cursor.module.css';

const CursorGlow = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isMoving, setIsMoving] = useState(false);

  const updateCursorPosition = useCallback((e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
    
    // Check if the cursor is over a clickable element
    const target = e.target as HTMLElement;
    const isClickable = 
      window.getComputedStyle(target).cursor === 'pointer' ||
      target.tagName.toLowerCase() === 'a' ||
      target.tagName.toLowerCase() === 'button' ||
      target.closest('a') ||
      target.closest('button');
    
    setIsPointer(isClickable);

    // Set moving state
    setIsMoving(true);
    setTimeout(() => setIsMoving(false), 100);
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', updateCursorPosition);
    return () => window.removeEventListener('mousemove', updateCursorPosition);
  }, [updateCursorPosition]);

  // Update CSS variables for smooth animation
  useEffect(() => {
    document.documentElement.style.setProperty('--mouse-x', `${position.x}px`);
    document.documentElement.style.setProperty('--mouse-y', `${position.y}px`);
  }, [position]);

  return (
    <>
      <div 
        className={`${styles.cursor} ${isPointer ? styles.cursorHover : ''} ${isMoving ? styles.cursorMoving : ''}`}
        style={{
          transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`
        }}
      />
      <div 
        className={`${styles.cursorGlow} ${isPointer ? styles.cursorGlowHover : ''} ${isMoving ? styles.cursorGlowMoving : ''}`}
        style={{
          transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`
        }}
      />
    </>
  );
};

export default CursorGlow; 