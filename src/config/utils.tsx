export const numberFormatter = (num: string | number) => {
  return num.toString().replace(/\B(?<!\.\d)(?=(\d{3})+(?!\d))/g, ".");
}