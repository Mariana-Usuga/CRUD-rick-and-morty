// export interface Product {
//   id: number,
//   name:string,
//   price: number,
//   description:string,
//   category:number,
//   stock:number
// }
// info: {
//   count: number,
//  pages: number,
//   next: string,
//   prev: null
// }
// results:[
export interface Product {
      // results: Product
      id: number,
      name: string,
      status: string,
      species: string,
      type: string,
      gender: string,
      origin: {
        name: string,
        url: string
      },
      location: {
        name: string,
        url: string
      },
      image: string,
      episode: [],
      url: string,
      created: string
}
