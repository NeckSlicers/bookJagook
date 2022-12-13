const REQUEST = {
  NEW_BOOK_LIST: (page: number, count: number): string =>
    `ItemList.aspx?QueryType=ItemNewAll&Start=${page}&MaxResults=${count}`,
  BEST_SELLER_LIST: (page: number, count: number): string =>
    `ItemList.aspx?QueryType=Bestseller&Start=${page}&MaxResults=${count}`,
  SEARCH_BOOK: (itemId: string): string => `ItemLookUp.aspx?ItemId=${itemId}`,
};

export { REQUEST };
