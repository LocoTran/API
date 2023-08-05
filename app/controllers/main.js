axios({
  url: "https://64cde6de0c01d81da3ee5a2f.mockapi.io/product",
  method: "GET",
})
  .then(function (res) {
    console.log("🚀 ~ file: main.js:7 ~ res:", res);
  })
  .catch(function (err) {
    console.log("🚀 ~ file: main.js:12 ~ err:", err);
  });
