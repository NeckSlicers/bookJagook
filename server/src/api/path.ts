const PATH = {
  ROOT: '/',
  USER: '/user',
  BOOKLIST: {
    ROOT: '/bookList',
  },
  BOOK: {
    ROOT: '/book',
    BOOKID: '/:bookId',
    REVIEW: '/:bookId/review',
  },
  MYBOOKLIST: {
    ROOT: '/mybookList',
  },
  MYBOOK: {
    ROOT: '/mybook',
    BOOKID: '/:bookId',
    REPORT: '/:bookId/report',
  },
  WISHLIST: {
    ROOT: '/wishList',
    BOOKID: '/:bookId',
  },
  REPORT: {
    ROOT: '/report',
  },
};

export { PATH };
