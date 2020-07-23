
const helperMethods = {
  //trucate text function
  truncateText(text) {
    const minimumLength = 100;
    if (!text.length || text.length < 1) return;

    return text.substring(0, minimumLength) + '...';
  },

  //turns all quotes fancy using "" in the description
  fancyText(text) {
    let count = 1;
    return text = text.replace(/"/g, (item) => {
      if (count <= 1) {
        count++;
        return item += '<i>';
      }
      else if (count == 2) {
        count--;
        return item += '</i>';
      }
    })
  }
}

export default helperMethods;

