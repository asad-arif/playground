const http = require('http');
const fs = require('fs');
const url = require('url');

// const data = fs.readFileSync(`${__dirname}/data/products.js`);

// const server = http.createServer((req, res) => {
//   if (pathname === '/overview') {
//     res.end('Overview request');
//   } else if (pathname === '/products') {
//     res.end('Products page');
//   } else if (pathname === '/api') {
//     res.writeHead(200, {
//       'Content-type': 'application/json'
//     });
//     res.end(data);
//   } else {
//     res.writeHead(404, {
//       'Content-type': 'text/html',
//       'custom-head': 'This is hello',
//     });
//     res.end('<h1>Page not found</h1>');
//   }
// });

const overviewTemp = fs.readFileSync(`${__dirname}/template/template-overview.html`, 'utf-8');
const cardTemp = fs.readFileSync(`${__dirname}/template/template-card.html`, 'utf-8');

const productTemp = fs.readFileSync(`${__dirname}/template/template-product.html`, 'utf-8');

const products = fs.readFileSync(`${__dirname}/data/products.js`, 'utf-8');

const replaceTemplate = (product, cardTemp) => {
  let output = cardTemp.replace('{%PRODUCT_IMAGE%}', product.image);
  output = output.replace(/{%PRODUCT_NAME%}/g, product.name);
  output = output.replace('{%PRODUCT_PRICE%}', product.price);
  output = output.replace('{%IS_ORGANIC%}', product.isOrganic ? 'Organic' : 'Not organic');
  output = output.replace('{%ID%}', product.id);
  output = output.replace('{%PRODUCT_QUANTITY%}', product.quantity);
  output = output.replace('{%PRODUCT_DESCRIPTION%}', product.description);
  output = output.replace('{%PRODUCT_CATEGORY%}', product.category);
  output = output.replace('{%PRODUCT_SIZE%}', product.size);
  output = output.replace('{%PRODUCT_MATERIAL%}', product.material);
  output = output.replace('{%PRODUCT_COLOR%}', product.color);
  output = output.replace('{%PRODUCT_BRAND%}', product.brand);
  output = output.replace('{%PRODUCT_WEIGHT%}', product.weight);
  output = output.replace('{%PRODUCT_RATING%}', product.rating);
  return output;
};

const server = http.createServer((req, res) => {
  const { pathname, query } = url.parse(req.url, true);
  if (pathname === '/' || pathname === '/overview') {
    const productsDataObj = JSON.parse(products);
    const ProductCards = productsDataObj.map((el) => replaceTemplate(el, cardTemp)).join('');

    res.writeHead(200, {
      'Content-type': 'text/html',
    });
    const result = overviewTemp.replace('%CARD%', ProductCards);
    res.end(result);
  } else if (pathname === '/product') {
    const productsObj = JSON.parse(products);
    const productData = productsObj[parseInt(query?.id)];
    console.log(productData);
    const result = replaceTemplate(productData, productTemp);
    res.writeHead(200, {
      'Content-type': 'text/html',
    });
    res.end(result);
  } else if (pathname === '/api') {
    res.writeHead(200, {
      'Content-type': 'html/text',
    });
    res.end(data);
  } else {
    res.writeHead(404, {
      'Content-type': 'text/html',
      'custom-head': 'This is hello',
    });
    res.end('<h1>Page not found</h1>');
  }
});

server.listen(8000, '127.0.0.1', () => {
  console.log('Server is running');
});
