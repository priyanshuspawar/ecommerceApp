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
import deal1 from "./assets/deal1.png";
import deal2 from "./assets/deal2.png";
import deal3 from "./assets/deal3.png";
import deal4 from "./assets/deal4.png";
import BevMo from "./assets/BevMO.png";
import Staples from "./assets/staples.png";
import Sprouts from "./assets/sprouts.png";
import MollieStone from "./assets/MolllieStone.png";
import Sports from "./assets/Sports.png";
import Target from "./assets/target.png";
import grocery from "./assets/grocery.png";
import blueBrand from "./assets/blueBrand.png";
import bag from "./assets/bag.png";
import shoes from "./assets/shoes.png";
import skincare from "./assets/skincare.png";
import phone from "./assets/phone.png";
import nowDeliver from "./assets/nowDeliver.png";
import Q from "./assets/Q.png";
import descImg from "./assets/desimg.png";
import QnA from "./assets/QnA.png";
import onlinePayment from "./assets/onlinePayment.png";
import homeDelivery from "./assets/HomeDelivery.png";

import Stripe from "./assets/stripe.png";
import Visa from "./assets/Visa.png";
import MCard from "./assets/masterCard.png";
import Amazon from "./assets/amazon.png";
import klarna from "./assets/klarna.png";
import paypal from "./assets/payPal.png";
import applepay from "./assets/applePay.png";
import Gpay from "./assets/GPay.png";
import becomeSeller from "./assets/becomeSeller.png";
import GiftCard from "./assets/giftCard.png";
import HelpCenter from "./assets/helpCenter.png";

import bp1 from "./assets/bestProducts/bp1.png";
import bp2 from "./assets/bestProducts/bp2.png";
import bp3 from "./assets/bestProducts/bp3.png";
import bp4 from "./assets/bestProducts/bp4.png";
import bp5 from "./assets/bestProducts/bp5.png";
import bp6 from "./assets/bestProducts/bp6.png";
import bp7 from "./assets/bestProducts/bp7.png";
import bp8 from "./assets/bestProducts/bp8.png";

import airPodsPink from "../src/assets/products/airpods-max-pink.png";
import airPodsgreen from "../src/assets/products/airpods-max-green.png";
import airPodsSpaceGray from "../src/assets/products/airpods-max-spacegray.png";
import airPodsSilver from "../src/assets/products/airpods-max-silver.png";
import airPodsSkyBlue from "../src/assets/products/airpods-max-skyblue.png";

const productsDetails = [
  {
    id: 0,
    title: "AirPods Max",
    description:"AirPods Max reimagine over-ear headphones. An Apple designed dynamic driver provides immersive high fidelity audio. Every detail, from canopy to cushions, has been designed for an exceptional fit. Industry leading Active Noise Cancellation blocks outside noise, while Transparency mode lets it in. And spatial audio with dynamic head tracking provides theatre like sound that surrounds you.",
    price:"$549 or $99/ month",
    variants: [
      { id: 0, subTitle: "Pink", color: ["#E4544D", "#D8A097"],image:airPodsPink },
      { id: 1, subTitle: "Green", color: ["#E7ECE3", "#AFBFAB"] ,image:airPodsgreen},
      { id: 1, subTitle: "Sky Blue", color: ["#2F506C", "#91A6BB"],image:airPodsSkyBlue },
      { id: 1, subTitle: "Silver", color: ["#F5F4F0", "#D2D3D4"],image:airPodsSilver },
      { id: 1, subTitle: "Space Gray", color: ["#3C3D3A", "#595759"],image:airPodsSpaceGray },
    ],
  },
];

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

const genre = [
  { id: 0, title: "Gadgets" },
  { id: 1, title: "Fashion" },
  { id: 2, title: "Toys" },
  { id: 3, title: "Education" },
  { id: 4, title: "Beauty" },
  { id: 5, title: "Fitness" },
  { id: 6, title: "Furniture" },
  { id: 7, title: "Sneakers" },
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
    Price: 99,
    currency: "dollars",
    ProductImage: instax,
  },
  {
    id: 2,
    ProductTitle: "Base Camp Duffel M",
    Description: "Great for base camps",
    Rating: 4,
    RatedUsers: 160,
    Price: 159,
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
    Price: 50,
    currency: "dollars",
    ProductImage: watch,
  },
  // {
  //   id: 5,
  //   ProductTitle: "Watch",
  //   Description: "Good for time checks",
  //   Rating: 5,
  //   RatedUsers: 20,
  //   Price: 50,
  //   currency: "dollars",
  //   ProductImage: watch,
  // },
];

const bestSellingProducts = [
  {
    id: 0,
    ProductTitle: "Laptop sleeve MacBook",
    Description: "Organic Cotton, fairtrade certified",
    Rating: 4,
    RatedUsers: 151,
    Price: 59,
    currency: "dollars",
    ProductImage: bp1,
  },
  {
    id: 1,
    ProductTitle: "AirPods Max",
    Description: "A perfect balance of high-fidelity audio",
    Rating: 3,
    RatedUsers: 100,
    Price: 459,
    currency: "dollars",
    ProductImage: bp2,
  },
  {
    id: 2,
    ProductTitle: "Flower Laptop Sleeve",
    Description: "15 in. x 10 in. -Flap top closure",
    Rating: 2,
    RatedUsers: 40,
    Price: 39,
    currency: "dollars",
    ProductImage: bp3,
  },
  {
    id: 3,
    ProductTitle: "Supreme Water Bottle",
    Description: "Table with air purifier, stained veneer/black",
    Rating: 4,
    RatedUsers: 200,
    Price: 19,
    currency: "dollars",
    ProductImage: bp4,
  },
  {
    id: 4,
    ProductTitle: "Laptop sleeve MacBook",
    Description: "Organic Cotton, fairtrade certified",
    Rating: 5,
    RatedUsers: 121,
    Price: 69,
    currency: "dollars",
    ProductImage: bp5,
  },
  {
    id: 5,
    ProductTitle: "MacBook pro 13",
    Description: "256, 8 core GPU, 8 GB",
    Rating: 5,
    RatedUsers: 36,
    Price: 1099,
    currency: "dollars",
    ProductImage: bp6,
  },
  {
    id: 6,
    ProductTitle: "HomePod mini",
    Description: "5 Colors Available",
    Rating: 2.5,
    RatedUsers: 10,
    Price: 59,
    currency: "dollars",
    ProductImage: bp7,
  },
  {
    id: 7,
    ProductTitle: "Ipad mini",
    Description: "Mini but powerful",
    Rating: 4,
    RatedUsers: 90,
    Price: 593,
    currency: "dollars",
    ProductImage: bp8,
  },
];

const Brands = [
  {
    id: 0,
    title: "Staples",
    Description: "Delivery with in 24 hours",
    Img: Staples,
  },
  {
    id: 1,
    title: "Sprouts",
    Description: "Delivery with in 24 hours",
    Img: Sprouts,
  },
  {
    id: 2,
    title: "Grocery Outlet",
    Description: "Delivery with in 24 hours",
    Img: grocery,
  },
  {
    id: 3,
    title: "Mollie Stone's",
    Description: "Delivery with in 24 hours",
    Img: MollieStone,
  },
  {
    id: 4,
    title: "Sports Basement",
    Description: "Delivery with in 24 hours",
    Img: Sports,
  },
  {
    id: 5,
    title: "Container Store",
    Description: "Delivery with in 24 hours",
    Img: blueBrand,
  },
  {
    id: 6,
    title: "Target",
    Description: "Delivery with in 24 hours",
    Img: Target,
  },
  {
    id: 7,
    title: "BevMo!",
    Description: "Delivery with in 24 hours",
    Img: BevMo,
  },
];

const deals = [
  {
    id: 0,
    title: "Explore Our Furniture & Home Furnishing Range",
    discount: "100",
    currency: "dollars",
    imgPath: deal1,
    bgColor: "#F2E4D9",
    textColor: "#CB9917",
  },
  {
    id: 1,
    title: "Explore Our Furniture & Home Furnishing Range",
    discount: "67",
    currency: "dollars",
    imgPath: deal2,
    bgColor: "#F9DCDC",
    textColor: "#961F1F",
  },
  {
    id: 2,
    title: "Explore Our Furniture & Home Furnishing Range",
    discount: "29",
    currency: "dollars",
    imgPath: deal3,
    bgColor: "#F2E4D9",
    textColor: "#94623C",
  },
  {
    id: 3,
    title: "Explore Our Furniture & Home Furnishing Range",
    discount: "59",
    currency: "dollars",
    imgPath: deal4,
    bgColor: "#D2F7EC",
    textColor: "#003D29",
  },
];

const bestSell = [
  {
    id: 0,
    storeImg: Staples,
    Img: bag,
    title: "Staples",
    category: " Bag • Perfume",
    desImg: descImg,
    description: "Delivery within 24 hours",
  },
  {
    id: 1,
    storeImg: nowDeliver,
    Img: phone,
    title: "Now Delivery",
    category: " Bag • Perfume",
    desImg: descImg,
    description: "Delivery within 24 hours",
  },
  {
    id: 2,
    storeImg: BevMo,
    Img: skincare,
    title: "BevMo",
    category: " Bag • Perfume",
    desImg: descImg,
    description: "Delivery within 24 hours",
  },
  {
    id: 3,
    storeImg: Q,
    Img: shoes,
    title: "Quicklly",
    category: " Bag • Perfume",
    desImg: descImg,
    description: "Delivery within 24 hours",
  },
];

const services = [
  {
    id: 0,
    title: "Frequently Asked ",
    title2: "Questions",
    description: "Updates on safe Shopping in our Stores",
    Img: QnA,
  },
  {
    id: 1,
    title: "Online Payment",
    title2: "Process",
    description: "Updates on safe Shopping in our Stores",
    Img: onlinePayment,
  },
  {
    id: 2,
    title: "Home Delivery",
    title2: "Options",
    description: "Updates on safe Shopping in our Stores",
    Img: homeDelivery,
  },
];

const footer = {
  ShopCartDescription: 
    "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
  ,
    Department: [
    "Fashion",
    "Education Product",
    "Frozen Food",
    "Beverages",
    "Organic Grocery",
    "Office Supplies",
    "Beauty Products",
    "Books",
    "Electronics & Gadget",
    "Travel Accessories",
    "Fitness",
    "Sneakers",
    "Toys",
    "Furniture",
  ],
  "About Us": [
    "About Shopcart",
    "Careers",
    "News & blog",
    "Help",
    "Press Center",
    "Shop By Location",
    "Shopcart Brands",
    "Affiliate & Partners",
    "Ideas & Guides",
  ],
  Services: [
    "Gift Card",
    "Mobile App",
    "Shipping & Delivery",
    "Order Pickup",
    "Account Signup",
  ],
  Help: [
    "Shopcart Help",
    "Returns",
    "Track Orders",
    "Contact Us",
    "Feedback",
    "Security & Fraud",
  ],
};
const Payment = [
  {
    Img: Stripe,
  },
  {
    Img: Visa,
  },
  {
    Img: MCard,
  },
  {
    Img: Amazon,
  },
  {
    Img: klarna,
  },
  {
    Img: paypal,
  },
  {
    Img: applepay,
  },
  {
    Img: Gpay,
  },
];
const Last = [
  {
    id: 0,
    Img: becomeSeller,
    title: "Become Seller",
  },
  {
    id: 2,
    Img: GiftCard,
    title: "Gift Cards",
  },
  {
    id: 2,
    Img: HelpCenter,
    title: "Help Center",
  },
];

export {
  navBarOptions,
  heroScreenText,
  categories,
  products,
  Brands,
  deals,
  bestSell,
  services,
  bestSellingProducts,
  footer,
  Payment,
  genre,
  Last,
  productsDetails
};
