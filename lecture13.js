// subsets of array

// filter

const restaurants = [
    {name: "Cap City Diner", milesAway: 2.2},
    {name: "Chop Shop", milesAway: 4.1},
    {name: "Northstar Cafe", milesAway: 0.9},
    {name: "City Tavern", milesAway: 0.5},
    {name: "Shake Shack", milesAway: 5.3}
]

const filteredRestuarants = restaurants.filter(restaurant => 
    restaurant.name.startsWith("C") && restaurant.milesAway < 3
);

console.log(filteredRestuarants);

// find -- returns only the first element matching the filter criteria

const filteredRestuarantsFind = restaurants.find(restaurant => 
    restaurant.name.startsWith("C") && restaurant.milesAway < 3
);

console.log(filteredRestuarantsFind);
