import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    id: uuid(),
    categoryName: "Men",
  },
  {
    id: uuid(),
    categoryName: "Women",
  },
  {
    id: uuid(),
    categoryName: "Kids",
  },
];
