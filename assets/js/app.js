const sidebar = document.querySelector('.sidebar');
const userDropdown = document.querySelector('.dropdown_content_wrapper');
const menuLinks = document.querySelectorAll('.menu_link');
const menuLis = document.querySelectorAll('.menu_wrapper li');

//sidebar toggle
function sidebarToggle() {
    sidebar.classList.toggle('show');
}

//nav user dropdown toggle
function userDropdownToggle() {
    userDropdown.classList.toggle('show');
}

//menu active and submenu show
for (var i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener("click", function (e) {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";

        menuLis.forEach(menuLi => {
            menuLi.classList.remove('show');
        })
        if (this.closest('.is_submenu')) {
            e.preventDefault();
            this.closest('.is_submenu').classList.toggle('show');
        }
    });
}



