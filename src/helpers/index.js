export function getDifferenceYear(year) {
  return new Date().getFullYear() - year
}

export function calculateByBrand(brand) {
  let increment;

  switch (brand) {
    case '1':
      increment = 1.3
      break;
    case '2':
      increment = 1.15
      break;
    case '3':
      increment = 1.05
      break;
    default:
      break
  }

  return increment
}

export function calculatePlan(plan){
  return (plan === '1') ? 1.2 : 1.5
}

export function formatMoney(quantity){
  return quantity.toLocaleString('es-ES', {
    style: 'currency',
    currency: 'EUR'
  })
}