export const wait = ms => {
  let date1 = new Date();
  let date2 = null;
  do {
    date2 = new Date();
  } while (date2 - date1 < ms);
};
