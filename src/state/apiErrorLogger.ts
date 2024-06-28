import { Middleware } from '@reduxjs/toolkit';

const apiErrorLogger: Middleware = (store) => (next) => (action : any) => {
  if (action.type.endsWith('/rejected')) {
    console.error('API Error:', action);
  }
  return next(action);
};

export default apiErrorLogger;
