var shopper = {
    firstName: "Janet",
    lastName: "Smith",
    age: 55,
    ShopsOnline: false,
    groceryCart: ["bananas", "bread", "basil", "butter", "brocolli"],
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}

 console.log (shopper.age);
 console.log(shopper.groceryCart);
 console.log(shopper.groceryCart.slice(2,4));
 console.log(shopper.fullName());

 console.log(shopper);