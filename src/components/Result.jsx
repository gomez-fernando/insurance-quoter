import useQuoter from "../hooks/Quoter"
import { BRANDS, PLANS } from "../constants"
import { useCallback, useMemo, useRef } from "react"

const Result = () => {
  const { result, data } = useQuoter()
  const { brand, year, plan } = data
  const yearRef = useRef(year)

  const [nameBrand] = useCallback(
    BRANDS.filter(b => b.id === Number(brand)),
    [result]
  )
  const [namePlan] = useMemo( () =>
    PLANS.filter(p => p.id === Number(plan)),
    [result]
  )

  if (result === 0) return null;

  return (
    <div className="bg-gray-100 text-center mt-5 p-5 shadow">
      <h2 className="text-gray-600 font-black text-3xl">
        Resumen
      </h2>

      <p className="my-2">
        <span className="font-bold">Marca: </span>{nameBrand.name}
      </p>
      <p className="my-2">
        <span className="font-bold">Plan: </span>{namePlan.name}
      </p>
      <p className="my-2">
        <span className="font-bold">Año: </span>{yearRef.current}
      </p>
      <p className="my-2 text-2xl">
        <span className="font-bold">Total Cotización: </span>{result}
      </p>
    </div>
  )
}

export default Result