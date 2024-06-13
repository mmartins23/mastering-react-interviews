import React from 'react';
import ComponentC from './ComponentC';
import styles from './ComponentB.module.css';


const ComponentB = () => {
  return (
    <div className={styles.container}>
      Component B
      <ComponentC />
    </div>
  )
}

export default ComponentB