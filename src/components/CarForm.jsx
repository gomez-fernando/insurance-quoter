import { Fragment } from "react"
import { BRANDS, YEARS, PLANS } from "../constants"
import useQuoter from "../hooks/Quoter"
import Error from "./Error"

const CarForm = () => {
  const { data, handleChangeData, error, setError, quote } = useQuoter()

  const handleSubmit = e => {
    e.preventDefault()

    if(Object.values(data).includes('')){
      setError('Todos los campos son obligatorios')
      return
    }

    setError('')
    quote()
  }

  return (
    <>
      {error && <Error/>}

      <form
        onSubmit={handleSubmit}
      >
        <div className="my-5">
          <label htmlFor="" className="block mt-3 font-bold text-gray-400 uppercase">
            Marca
          </label>
          <select
            name="brand"
            id=""
            className="w-full p-3 bg-white border border-gray-200"
            onChange={e => handleChangeData(e)}
            value={data.brand}
          >
            <option value="">Selecciona la marca</option>

            {BRANDS.map(brand => (
              <option
                key={brand.id}
                value={brand.id}
              >
                {brand.name}
              </option>
            ))}
          </select>
        </div>

        <div className="my-5">
          <label htmlFor="" className="block mt-3 font-bold text-gray-400 uppercase">
            Año
          </label>
          <select
            name="year"
            id=""
            className="w-full p-3 bg-white border border-gray-200"
            onChange={e => handleChangeData(e)}
            value={data.year}
          >
            <option value="">Selecciona el año de matriculación</option>

            {YEARS.map(year => (
              <option
                key={year}
                value={year}
              >
                {year}
              </option>
            ))}
          </select>
        </div>

        <div className="my-5">
          <label htmlFor="" className="block mt-3 font-bold text-gray-400 uppercase">
            Plan
          </label>
          <div className="flex gap-3 items-center">
            {PLANS.map(plan => (
              <Fragment key={plan.id}>
                <label htmlFor="">{plan.name}</label>
                <input
                  type="radio"
                  name="plan"
                  value={plan.id}
                  onChange={e => handleChangeData(e)}
                />
              </Fragment>
            ))}
          </div>
        </div>

        <div className="flex">
          <input type="submit" className="w-2/3 mx-auto bg-indigo-500 transition-colors text-white cursor-pointer p-3 uppercase font-bold hover:bg-indigo-600 rounded-md" value="Cotizar" />
        </div>
      </form>
    </>
  )
}

export default CarForm