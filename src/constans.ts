import furnitue from "./assets/furniture.png";
import books from "./assets/books.png";
import travel from "./assets/travel.png";
import tech from "./assets/tech.png";
import handbag from "./assets/handbag.png";
import sneakers from "./assets/sneakers.png";
import homepod from "./assets/products/homePadMini.png";
import instax from "./assets/products/instaxCam.png";
import duffelBag from "./assets/products/duffleBag.png";
import toteBag from "./assets/products/toteBag.png";
import watch from "./assets/products/watch.png";

const navBarOptions = [
  { id: 0, title: "Deals" },
  { id: 1, title: "What's New" },
  { id: 2, title: "Delivery" },
];

const categories = [
  { id: 0, title: "Furnitue", backdrop: furnitue },
  { id: 1, title: "Hand Bag", backdrop: handbag },
  { id: 2, title: "Books", backdrop: books },
  { id: 3, title: "Tech", backdrop: tech },
  { id: 4, title: "Sneakers", backdrop: sneakers },
  { id: 5, title: "Travel", backdrop: travel },
];

const heroScreenText = {
  title: "Shopping And Department Store.",
  description:
    "Shopping is a bit of a relaxing hobby for me, which is sometimes troubling for the bank balance.",
};

const products = [
  {
    id: 0,
    ProductTitle: "HomePod mini",
    Description: "Table with air purifier, stained veneer/black",
    Rating: 4.5,
    RatedUsers: 121,
    Price: 239.0,
    currency: "dollars",
    ProductImage: homepod,
  },
  {
    id: 1,
    ProductTitle: "Instax Mini 9",
    Description: "Selfie mode and selfie mirror, Macro mode",
    Rating: 5,
    RatedUsers: 115,
    Price: 99.0,
    currency: "dollars",
    ProductImage: instax,
  },
  {
    id: 2,
    ProductTitle: "Base Camp Duffel M",
    Description: "Great for base camps",
    Rating: 4,
    RatedUsers: 160,
    Price: 159.2,
    currency: "dollars",
    ProductImage: duffelBag,
  },
  {
    id: 3,
    ProductTitle: "Tote Bag",
    Description: "Great for Shopping for BTS lovers",
    Rating: 3,
    RatedUsers: 60,
    Price: 20.0,
    currency: "dollars",
    ProductImage: toteBag,
  },
  {
    id: 4,
    ProductTitle: "Watch",
    Description: "Good for time checks",
    Rating: 5,
    RatedUsers: 20,
    Price: 50.0,
    currency: "dollars",
    ProductImage: watch,
  },
];

export { navBarOptions, heroScreenText, categories, products };
