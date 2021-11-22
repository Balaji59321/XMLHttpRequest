let req = new XMLHttpRequest();

req.open("GET", "https://jsonplaceholder.typicode.com/users");

req.send();

req.onload = function () {
  // console.log(this.response[0]);
  let id_Arr = [];
  let res = JSON.parse(this.response);
  for (let i = 0; i < res.length; i++) {
    console.log(res[i]["id"]);
    id_Arr.push(res[i]["id"]);
  }
  document.body.textContent = id_Arr;
};
