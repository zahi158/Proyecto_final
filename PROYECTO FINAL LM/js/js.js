document.addEventListener('DOMContentLoaded', function() {
    var navItems = document.querySelectorAll('nav ul li');

    navItems.forEach(function(item) {
        item.addEventListener('click', function() {
            navItems.forEach(function(item) {
                item.classList.remove('active');
            });

            this.classList.add('active');
        });
    });
});
