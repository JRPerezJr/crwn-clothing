import { all, call } from 'redux-saga/effects';

import { shopSagas } from '../pages/shop/shop.sagas';
import { cartSagas } from './cart/cart.sagas';
import { userSagas } from './user/user.sagas';

export default function* rootSaga() {
  yield all([call(shopSagas), call(userSagas), call(cartSagas)]);
}
