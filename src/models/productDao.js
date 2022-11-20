const { appDataSource } = require('./dataSource');

const readProductInfo = async (productId) => {
  const productInfo = await appDataSource.query(
    `
    SELECT
    p.name name,
    p.desc desc,
    p.thumbnail_image_url image,
    po.price price,
    JSON_ARRAYAGG(po.size_id) size
  FROM products AS p
  LEFT JOIN product_options AS po
    ON p.id = po.product_id
  WHERE p.id = ?
  GROUP BY p.name, p.desc, p.thumbnail_image_url, po.price
  `,
    [productId]
  );
  return productInfo;
};

module.exports = { readProductInfo };
