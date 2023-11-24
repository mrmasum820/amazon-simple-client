import { getShoppingCart } from "../utilities/fakedb"

const cartProductsLoader = async () => {
    //if data is in database we have to use async await
    const storedCart = getShoppingCart()
    const ids = Object.keys(storedCart)
    // console.log(ids);

    const loadedProducts = await fetch(`https://ema-john-server-bay.vercel.app/productsByIds`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(ids)
    })
    const products = await loadedProducts.json()
    console.log('products by ids', products);

    const savedCart = []

    for (const id in storedCart) {
        const addedProduct = products.find(pd => pd._id === id)
        if (addedProduct) {
            const quantity = storedCart[id]
            addedProduct.quantity = quantity
            savedCart.push(addedProduct)
        }
    }

    return savedCart;
}

export default cartProductsLoader