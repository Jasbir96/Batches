//find output:
let p = new Promise(function (resolve, reject) {
  reject(new Error("some error"));
  setTimeout(function () {
    reject(new Error("some error"));
  }, 1000)
  reject(new Error("some error"));
});
// p.then(null,fcb); -> p.catch(fcb);
p.then(null, function (err) {
  console.log(1);
  console.log(err);
})
// fcb
.catch(function (err) {
  console.log(2);
  console.log(err);
});
// p.then(scb, fcb);
// p.then(scb)
p.then(scb);
p.catch(fcb)








