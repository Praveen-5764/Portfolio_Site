"use strict";

function menuClick() {
  console.log("TEST");
  var menu = document.getElementById('mobileMenu');

  if (menu.classList.contains('hidden')) {
    menu.classList.remove('hidden');
  } else {
    menu.classList.add('hidden');
  }
}