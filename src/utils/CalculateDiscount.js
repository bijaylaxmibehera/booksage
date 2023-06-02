export function CalculateDiscount({price,originalPrice}){
  return  Math.floor(Math.abs((price / originalPrice) * 100 - 100));
}