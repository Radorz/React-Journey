import ItemCounter from "./shopping-cart/ItemCounter";



interface ItemInCart {
  productName: string;
  quantity?: number;
}

const itemsInCart: ItemInCart[] = [
  { productName: "Manzana", quantity: 2 },
  { productName: "Pan", quantity: 1 },
  { productName: "Leche", quantity: 3 },
];



export function FirstStepsApp() {

    return (
      <>
        <h1>Hola mundo</h1>
        <p>Esto es un parrafo</p>
        <button>Click me</button>

        <h1>Carrito de compra</h1>

        {itemsInCart.map((item) => (
          <ItemCounter name={item.productName} quantity={item.quantity} />
        ))}
{/* 
        <ItemCounter name="Switch 2" quantity={12} />
        <ItemCounter name="PS5" quantity={2} />
        <ItemCounter name="Sword" quantity={3} /> */}
      </>
    );
}