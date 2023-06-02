import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const homecard = [
  {id:1,category: "Indoor Plant",img:"https://i.postimg.cc/SNvQkWMH/Jade-Plant.jpg"},
  {id:2,category:"Fruit Plant",img:"https://i.postimg.cc/HxTWLz16/Kesar-mango-plant.jpg"},
  {id:3,category:"Pots and Planters",img:"https://i.postimg.cc/XJ1Jxmyh/Football-ceramic.png"},
  {id:4,category:"Tool Kit",img:"https://i.postimg.cc/mrdKqRgT/spinachkit.jpg"},
  {id:5,category:"Flowers PLant", img:"https://i.postimg.cc/Y0JYjJXY/Rugmini-plant-red.jpg"}
]

export const categories = [
  {
    _id: uuid(),
    categoryName: "indoor",
    img:"https://i.postimg.cc/SNvQkWMH/Jade-Plant.jpg",
  },
  {
    _id: uuid(),
    categoryName: "fruit",
    img:"https://i.postimg.cc/HxTWLz16/Kesar-mango-plant.jpg",
  },
  {
    _id: uuid(),
    categoryName: "flower",
    img:"https://i.postimg.cc/XJ1Jxmyh/Football-ceramic.png",
  },
  {
    _id: uuid(),
    categoryName: "tool kit",
    img:"https://i.postimg.cc/mrdKqRgT/spinachkit.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Flower Plant",
    img:"https://i.postimg.cc/Y0JYjJXY/Rugmini-plant-red.jpg",
  },
];
