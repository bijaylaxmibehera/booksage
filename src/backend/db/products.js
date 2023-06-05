import { v4 as uuid } from 'uuid'

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    img: 'https://rukminim1.flixcart.com/image/832/832/xif0q/book/h/l/7/the-hidden-hindu-original-imagjvn37ythf2z3.jpeg?q=70',
    name: 'The Hidden Hindu',
    author: 'Akshat Gupta',
    price: '205',
    originalPrice: '250',
    isBestSeller: true,
    category: 'fiction',
    rating: 4.7
  },
  {
    _id: uuid(),
    img:"https://rukminim1.flixcart.com/image/832/832/kwnv6a80/book/z/m/6/magic-is-inside-the-crystal-original-imag9afpmpbuqz6c.jpeg?q=70",
    name: "Magic is inside the crystal",
    author: "Neeta Ravariya",
    price: "99",
    originalPrice:"200",
    isBestSeller:false,
    category: "horror",
    rating:1.5,
  },
  {
    _id: uuid(),
    img: 'https://rukminim1.flixcart.com/image/832/832/khtghow0-0/book/1/9/o/think-like-a-monk-original-imafxr36mwua29uj.jpeg?q=70',
    name: 'Think Like a Monk',
    author: 'Jay Shetty',
    price: '289',
    originalPrice: '459',
    isBestSeller: false,
    category: 'self-help',
    rating: 4.0
  },
  {
    _id: uuid(),
    img: 'https://rukminim1.flixcart.com/image/832/832/book/2/1/4/500-pasta-recipes-delicious-pasta-sauces-for-every-kind-of-original-imadqdmygaq2hhhs.jpeg?q=70',
    name: '500 Pasta Recipes',
    author: 'Valerie Ferguson',
    price: '399',
    originalPrice: '659',
    isBestSeller: false,
    category: 'recipe book',
    rating: 3.2
  },
  {
    _id: uuid(),
    img: 'https://rukminim1.flixcart.com/image/832/832/kkec4280/book/2/b/8/the-girl-in-room-105-original-imafzr6nczgggedw.jpeg?q=70',
    name: 'The girl in room 105',
    author: 'Chetan Bhagat',
    price: '189',
    originalPrice: '199',
    isBestSeller: false,
    category: 'fiction',
    rating: 3.5
  },
  {
    _id: uuid(),
    img: 'https://rukminim1.flixcart.com/image/832/832/ku5ufm80/book/l/0/j/amar-shaheed-bhagat-singh-original-imag7c8ayf9twzhh.jpeg?q=70',
    name: 'Amar Shaheed Bhagat Singh ',
    author: 'Mahesh Sharma',
    price: '187',
    originalPrice: '250',
    isBestSeller: true,
    category: 'non-fiction',
    rating: 4.5
  },
  {
    _id: uuid(),
    img: 'https://rukminim1.flixcart.com/image/832/832/kqidx8w0/book/y/x/s/the-secret-garden-original-imag4gf7gt6dkxrm.jpeg?q=70',
    name: 'The Secret Garden',
    author: ' Burnett Frances Hodgson',
    price: '139',
    originalPrice: '199',
    isBestSeller: false,
    category: 'fiction',
    rating: 1.5
  },
  {
    _id: uuid(),
    img: 'https://rukminim1.flixcart.com/image/832/832/xif0q/regionalbooks/u/1/w/the-psychology-of-money-paperback-15-july-2021-original-imag6z2zzvjrgtn6.jpeg?q=70',
    name: 'The Psychology of Money',
    author: 'Morgan Housel',
    price: '165',
    originalPrice: '388',
    isBestSeller: true,
    category: 'self-help',
    rating: 4.8
  },
  {
    _id: uuid(),
    img: 'https://rukminim1.flixcart.com/image/832/832/xif0q/book/x/d/z/the-blue-umbrella-original-imagmpj4ycrhc3xe.jpeg?q=70',
    name: 'The Blue Umbrella',
    author: 'Bond Ruskin',
    price: '95',
    originalPrice: '150',
    isBestSeller: false,
    category: 'fiction',
    rating: 3.2
  },

  {
    _id: uuid(),
    img: 'https://rukminim1.flixcart.com/image/832/832/kqidx8w0/book/x/n/y/the-diary-of-a-young-girl-original-imag4gg9afh4zw6f.jpeg?q=70',
    name: 'The Diary of a Young Girl ',
    author: 'Anne Frank',
    price: '97',
    originalPrice: '185',
    isBestSeller: false,
    category: 'non-fiction',
    rating: 2.7
  },
  {
    _id: uuid(),
    img: 'https://rukminim1.flixcart.com/image/832/832/kufuikw0/book/x/b/y/three-thousand-stitches-original-imag7jpzffnzr3wb.jpeg?q=70',
    name: 'Three Thousand Stitches',
    author: 'Sudha Murty',
    price: '190',
    originalPrice: '250',
    isBestSeller: false,
    category: 'non-fiction',
    rating: 4.6
  },
  {
    _id: uuid(),
    img:"https://rukminim1.flixcart.com/image/832/832/l45xea80/book/o/o/g/trollhunters-original-imagf439bywhf6fs.jpeg?q=70",
    name: "Trollhunters",
    author: "Guillermo Del Toro",
    price: "450",
    originalPrice:"500",
    isBestSeller:false,
    category: "horror",
    rating:2.1,
  },

  // {
  //   _id: uuid(),
  //   img:"",
  //   name: "",
  //   author: "",
  //   price: "",
  //   originalPrice:"",
  //   isBestSeller:,
  //   category: "",
  //   rating:,
  // },
]
