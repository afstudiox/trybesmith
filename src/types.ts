// tipo para id(PK) com autcoincremento
export interface Indexable {
  id: number
}

// tipo completo do produto
export interface Product extends Indexable{
  name: string
  amount: string
  orderId: number
}

// tipo para para adicionar produtos ao banco sem o id
export type AddProduct = Omit<Product, 'id'>;

// tipo para buscar produtos criados sem o campo orderId
export type CreatedProduct = Omit<Product, 'orderId'>;

// tipo completo de usuário
export interface User extends Indexable{
  username: string
  classe: string
  level: number
  password: string
}

// tipo para adicionar usuário sem o id
export type AddUser = Omit<User, 'id'>;