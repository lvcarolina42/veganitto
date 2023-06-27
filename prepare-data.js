// save restaunt data to local storage
fetch('./data/restaurants.json')
    .then(response => response.json())
    .then(data => {
        localStorage.setItem('last_restaurant_id', Object.values(data).pop().id);
        localStorage.setItem('restaurants', JSON.stringify(data));
    });

// save category data to local storage
fetch('./data/categories.json')
    .then(response => response.json())
    .then(data => {
        localStorage.setItem('categories', JSON.stringify(data));
    });

// save user data to local storage
fetch('./data/users.json')
    .then(response => response.json())
    .then(data => {
        localStorage.setItem('users', JSON.stringify(data));
    });