$(document).ready(function () {
    $('#phone-number').mask('(00) 00000-0000');
    $('#cep').mask('00000-000');

});

(() => {
    'use strict';
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation');
  
    // Loop over them and prevent submission
    Array.from(forms).forEach((form) => {
      form.addEventListener(
        'submit',
        (event) => {
          var checkbox_checked = false;
          const checkboxes = form.querySelectorAll('input[name="categories"]');
          checkbox_checked = Array.from(checkboxes).some(checkbox => checkbox.checked);

          event.preventDefault();
          event.stopPropagation();

          if (!form.checkValidity() || !checkbox_checked) {
            form.classList.add('was-validated');
          } else {
            form.classList.remove('was-validated');

            var id = localStorage.getItem('last_restaurant_id') ? parseInt(localStorage.getItem('last_restaurant_id')) + 1 : 1;
            var restaurant = {
              "id":          id,
              "name":        form.querySelector('#name-restaurant').value,
              "image":       "https://picsum.photos/200",
              "price":       Math.floor(Math.random() * 3) + 1,
              "description": form.querySelector('#description').value,
              "rating":      0,
              "address":     form.querySelector('#address').value,
              "verified":    false,
              "menu":        "menu_sample.pdf",
              "categories":  [],
              "comments":    []
            };

            Array.from(checkboxes).forEach((checkbox) => {
              if (checkbox.checked) {
                restaurant.categories.push(checkbox.id.split('-')[1]);
              }
            });

            // Save restaurant to local storage
            var data = localStorage.getItem('restaurants') ? JSON.parse(localStorage.getItem('restaurants')) : {};
            data[id] = restaurant;
            localStorage.setItem('restaurants', JSON.stringify(data));
            localStorage.setItem('last_restaurant_id', id);

            // Redirect to restaurant page
            window.location.href = `../restaurant_page/restaurant.html?id=${id}`;
          }
          
        },
        false
      );
    });
  })();
