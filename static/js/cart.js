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
      console.log("User is logged in");
    }
  });
}
