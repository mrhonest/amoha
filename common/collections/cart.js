/**
 * Created by sanathshetty on 11/13/14.
 */
/**
/** Carts

*/

AmohaCore = {};
AmohaCore.Schemas = {};
AmohaCore.Collections = {};

AmohaCore.Schemas.CartItem = new SimpleSchema({
    _id: {
        type: String,
        label: "Cart ID"
    },
    productId: {
        type: String,
        label: "Product ID"
    },
    quantity: {
        type: Number,
        min: 0,
        label: "Quantity"
    },
    product: {
      type: AmohaCore.Schemas.Products,
        label: "Product"

    }
});

AmohaCore.Schemas.Cart = new SimpleSchema({
    sessionId: {
        type: String,
        label: "Session ID",
        optional: true
    },
    userId: {
        type: String,
        optional: true
    },
    customer: {
      type: AmohaCore.Schemas.Customer
    },
    items: {
        type: [AmohaCore.Schemas.CartItem],
        label: "Cart Items",
        optional: true
    },
    totalPrice: {
        type: Number,
        label: "Total Price",
        optional: true
    },
    createdAt: {
        type: Date,
        label: "Created At",
        optional: true
    }
})

AmohaCore.Collections.Cart = Cart = new Meteor.Collection("cart");
AmohaCore.Collections.Cart.attachSchema(AmohaCore.Schemas.Cart);
