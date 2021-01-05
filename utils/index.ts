export const formatDate = (date) => {
  const dateNum = new Date(+date);
  const day = dateNum.getDate();
  const month = dateNum.getMonth() + 1;
  const year = dateNum.getFullYear();
  return `${day}.${month}.${year}`;
}
