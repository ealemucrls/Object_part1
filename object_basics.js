// Map to names
let names = users.map(item => item.name);

// Map to Objects
let usersMapped = users.map((user) => ({
    fullName: `${user.name} ${user.surname}`, id: user.id
}));

// Sort by age
function sortByAge(arr){
    return arr.sort((a, b) => a.age - b.age);
};
 

// Get average age 
function getAverageAge(users){
    let averageAge = users.reduce((prev, user) => prev + user.age, 0) / users.length;
}

// Create Keyed Object from Array
function groupById(arr){
    return arr.reduce((obj, item) => {
        obj[item.id] = item;
        return obj;
    }, {});
}