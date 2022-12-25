export const BRANDS = [
  {id: 1, name: 'Mercedes-Benz'},
  {id: 2, name: 'Chevrolet'},
  {id: 3, name: 'Hyundai'},
];

const YEARMAX = new Date().getFullYear();

export const YEARS = Array.from(new Array(20), (value, index) => YEARMAX - index);

export const PLANS = [
  {id: 1, name: 'A terceros'},
  {id: 2, name: 'Todo riesgo'},
]