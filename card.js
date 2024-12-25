// No JavaScript is needed for functionality, 
// but if you want to add some interactive effects or logging, you can use this

document.querySelectorAll('.checkbox-heart').forEach(checkbox => {
          checkbox.addEventListener('change', function () {
                    if (this.checked) {
                              console.log('Product added to favorites');
                    } else {
                              console.log('Product removed from favorites');
                    }
          });
});
