const {
  selectProductOptionId,
  checkIfSameProduct,
  insertProduct,
  getCarts,
  addQuantity,
  modifyQuantity,
  selectQuantity,
} = require('../models/cartsDao');

const addItemToCartsService = async (userId, productId, sizeId) => {
  const select = await selectProductOptionId(productId, sizeId);
  const productOptionId = select[0].id;
  const check = await checkIfSameProduct(userId, productOptionId);
  const checkQuantity = await selectQuantity(userId, productOptionId);
  if (check[0].checkProduct == 0) {
    await insertProduct(userId, productOptionId);
    return true;
  }
  if (checkQuantity[0].quantity < 7) {
    await addQuantity(userId, productOptionId);
    return true;
  }
  const err = new Error('Can not add product more then 7');
  err.statusCode = 400;
  throw err;
};

const getCartsService = async (userId) => {
  return await getCarts(userId);
};

const modifyQuantityService = async (userId, quantity, productOptionId) => {
  if (quantity > 7) {
    const err = new Error('max quantity is 7');
    err.statusCode = 400;
    throw err;
  }

  const check = await checkIfSameProduct(userId, productOptionId);
  if (check[0].checkProduct == 0) {
    const err = new Error('no product in carts');
    err.statusCode = 400;
    throw err;
  }
  return await modifyQuantity(userId, quantity, productOptionId);
};

module.exports = {
  addItemToCartsService,
  getCartsService,
  modifyQuantityService,
};
