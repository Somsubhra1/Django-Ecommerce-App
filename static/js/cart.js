console.log("Hello world");

var updateBtns = document.getElementsByClassName("update-cart");

for (let i = 0; i < updateBtns.length; i++) {
  updateBtns[i].addEventListener("click", function () {
    var productId = this.dataset.product;
    var action = this.dataset.action;
    console.log("Product Id", productId, "Action", action);
    console.log(user);

    if (user == "AnonymousUser") {
      console.log("Not logged in");
    } else {
      updateUserOrder(productId, action);
    }
  });
}

function updateUserOrder(productId, action) {
  // console.log("User is logged in");

  var url = "/update_item/";

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ productId, action }),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => console.log(data))
    .catch((err) => {});
}
