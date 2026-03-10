// ===============================================================
// COMPLETE NAVBAR JS
// Add this to ALL your page JS files
// Handles: hamburger + mobile dropdown + mobile sub-menu
// ===============================================================

// ---- Hamburger toggle ----
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });
}

// ---- Mobile: primary dropdown accordion ----
document.querySelectorAll('.has-dropdown').forEach(function (item) {
    const toggle = item.querySelector(':scope > .drop-toggle');

    if (toggle) {
        toggle.addEventListener('click', function (e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();

                // Close other open dropdowns (not sub-menus)
                document.querySelectorAll('.has-dropdown.open').forEach(function (other) {
                    if (other !== item) {
                        other.classList.remove('open');
                        // Also close any sub-menus inside
                        other.querySelectorAll('.has-submenu.open').forEach(function (sub) {
                            sub.classList.remove('open');
                        });
                    }
                });

                item.classList.toggle('open');
            }
        });
    }
});

// ---- Mobile: sub-menu accordion (Shop By Concern children) ----
document.querySelectorAll('.has-submenu').forEach(function (item) {
    const link = item.querySelector(':scope > a');

    if (link) {
        link.addEventListener('click', function (e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();

                // Close other open sub-menus
                document.querySelectorAll('.has-submenu.open').forEach(function (other) {
                    if (other !== item) other.classList.remove('open');
                });

                item.classList.toggle('open');
            }
        });
    }
});

// ---- Close everything when clicking outside ----
document.addEventListener('click', function (e) {
    if (!e.target.closest('.navbar')) {
        // Close hamburger menu
        if (navLinks) navLinks.classList.remove('active');
        // Close all dropdowns
        document.querySelectorAll('.has-dropdown.open, .has-submenu.open').forEach(function (item) {
            item.classList.remove('open');
        });
    }
});

// ---- Reset on resize to desktop ----
window.addEventListener('resize', function () {
    if (window.innerWidth > 768) {
        if (navLinks) navLinks.classList.remove('active');
        document.querySelectorAll('.has-dropdown.open, .has-submenu.open').forEach(function (item) {
            item.classList.remove('open');
        });
    }
});