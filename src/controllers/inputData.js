// const fs = require('fs');
// const path = require('path');
// // const filename = 'product_options';
// const filename = 'product_options';
// const productDB = require('./productConnect');

// const getCsvData = () => {
//   const csvPath = path.join(__dirname, '/csv/', filename + '.csv');
//   const csv = fs.readFileSync(csvPath, 'utf-8');
//   let allRows = csv.split(/\r\n/);
//   // console.log(allRows);
//   const resultData = [];
//   let columnNameData = allRows.shift();

//   for (let i = 0; i < allRows.length; i++) {
//     resultData.push(allRows[i].split(','));
//   }
//   // console.log(resultData);
//   for (let i = 0; i < resultData.length; i++) {
//     productDB.query(
//       `INSERT INTO naweke.product_options(product_id, size_id, color_id, price, stock) values ('${resultData[i][1]}','${resultData[i][2]}','${resultData[i][3]}','${resultData[i][4]}','${resultData[i][5]}');`,
//       (err, data) => {
//         console.log(err);
//         console.log(data);
//       }
//     );
//   }
// };

// getCsvData();
