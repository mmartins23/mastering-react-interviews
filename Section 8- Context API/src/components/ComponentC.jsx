import styles from './ComponentC.module.css';
import { useContext } from 'react';
import DataContext from '../context/DataContext';

const ComponentC = () => {
  const data = useContext(DataContext);

  return (
    <div className={styles.container}>
      Component C: {data}
    </div>
  )
}

export default ComponentC