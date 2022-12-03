const REQUEST = {
  NEW_BOOK_LIST: (page: number, count: number): string =>
    `ItemList.aspx?QueryType=ItemNewAll&Start=${page}&MaxResults=${count}`,
  BEST_SELLER_LIST: (page: number, count: number): string =>
    `ItemList.aspx?QueryType=Bestseller&Start=${page}&MaxResults=${count}`,
};

export { REQUEST };
