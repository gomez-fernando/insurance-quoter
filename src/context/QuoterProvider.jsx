import { createContext, useState } from "react";
import { getDifferenceYear, calculateByBrand, calculatePlan, formatMoney } from "../helpers";

const QuoterContext = createContext()

const QuoterProvider = ({ children }) => {
  const [data, setData] = useState({
    brand: '',
    year: '',
    plan: '',
  })

  const [error, setError] = useState('')
  const [result, setResult] = useState(0)
  const [loader, setLoader] = useState(false)

  const handleChangeData = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const quote = () => {
    // base
    let result = 2000
    // years diff
    const diff = getDifferenceYear(data.year)
    // Substract 3% each year
    result -= ((diff * 3) * result ) / 100
    // calculate by brand
    result *= calculateByBrand(data.brand)
    // calculate by plan
    result *= calculatePlan(data.plan).toFixed(2)
    // format money
    result = formatMoney(result)

    setLoader(true)

    setTimeout(() => {
      setResult(result)
      setLoader(false)
    }, 1500)
    
  }

  return (
    <QuoterContext.Provider
      value={{
        data,
        handleChangeData,
        error, 
        setError,
        quote,
        result,
        loader
      }}
    >
      {children}
    </QuoterContext.Provider>
  )
}

export { QuoterProvider }

export default QuoterContext