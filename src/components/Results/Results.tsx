import styles from "./results.module.css"
import Result from "../Result/Result"
interface ResultsProps {
  arrAnswer: boolean[]
}

function Results({ arrAnswer }: ResultsProps) {
  return (
    <div className={styles.results}>
      {arrAnswer.map((el, index) => {
        return <Result index={index} correct={el} key={index} />
      })}
    </div>
  )
}

export default Results
