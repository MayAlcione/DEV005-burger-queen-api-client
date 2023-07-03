import { Product } from "./product"

export interface CreateOrder {
  userId:number,
  client:string,
  products:Array<OneOrder>,
  status:string,
  dateEntry:string
}

export interface OneOrder {
  qty: number,
  product: Product
}

// {
//   "userId": 15254,
//   "client": "Carol Shaw",
//   "products": [
//     {
//       "qty": 5,
//       "product": {
//         "id": 1214,
//         "name": "Sandwich de jamón y queso",
//         "price": 1000,
//         "image": "https://github.com/Laboratoria/bootcamp/tree/main/projects/04-burger-queen-api/resources/images/sandwich.jpg",
//         "type": "Desayuno",
//         "dateEntry": "2022-03-05 15:14:10"
//       }
//     }
//   ],
//   "status": "pending",
//   "dateEntry": "2022-03-05 15:14:10"
// }
