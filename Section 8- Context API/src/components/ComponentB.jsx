import React from 'react';
import ComponentC from './ComponentC';
import styles from './ComponentB.module.css';


const ComponentB = ({ data }) => {
  return (
    <div className={styles.container}>
      Component B
      <ComponentC data={data} />
    </div>
  )
}

export default ComponentB