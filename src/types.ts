export interface Indexable {
  id: number
}

export interface Product extends Indexable{
  name: string
  amount: string
  orderId: number
}

export type AddProduct = Omit<Product, 'id'>;

export type CreatedProduct = Omit<Product, 'orderId'>;

// export interface User extends Indexable{
//   username: string
//   classe: string
//   level: number
//   password: string
// }