import styles from './ComponentC.module.css';

const ComponentC = ({ data }) => {
  return (
    <div className={styles.container}>
      Component C: {data}
    </div>
  )
}

export default ComponentC