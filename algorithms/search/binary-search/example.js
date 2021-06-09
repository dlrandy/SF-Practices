import binarySearch from "./binarySearch";

const sortedArrayOfStars = [
  { name: "Alpha Centauri A", position: {} },
  { name: "Alpha Centauri B", position: {} },
  { name: "Betelgeuse", position: {} },
  { name: "Polaris", position: {} },
  { name: "Rigel", position: {} },
  { name: "Sirius", position: {} },
];

const comparator = (star1, star2) => {
  if (star1.name === star2.name) {
    return 0;
  }
  return star1.name < star2.name ? -1 : 1;
};

binarySearch(sortedArrayOfStars, { name: "Not Existing Name" }, comparator); // -> -1
binarySearch(sortedArrayOfStars, { name: "Alpha Centauri A" }, comparator); // -> 0
binarySearch(sortedArrayOfStars, { name: "Alpha Centauri B" }, comparator); // -> 1
binarySearch(sortedArrayOfStars, { name: "Polaris" }, comparator);
