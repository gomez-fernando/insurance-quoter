import { Fragment } from "react"
import { BRANDS, YEARS, PLANS } from "../constants"

const CarForm = () => {
  return (
    <>

      <form>
        <div className="my-5">
          <label htmlFor="" className="block mt-3 font-bold text-gray-400 uppercase">
            Marca
          </label>
          <select name="brand" id="" className="w-full p-3 bg-white border border-gray-200">
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
          <select name="brand" id="" className="w-full p-3 bg-white border border-gray-200">
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
                <input type="radio" name="plan" value={plan.id} />
              </Fragment>
            ))}
          </div>
        </div>

        <div className="flex">
          <input type="submit" className="w-2/3 mx-auto bg-indigo-500 transition-colors text-white cursor-pointer p-3 uppercase font-bold hover:bg-indigo-600" value="Cotizar" />
        </div>
      </form>
    </>
  )
}

export default CarForm