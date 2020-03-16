$(function() {
  "use strict";
  $(".toggle-sidebar").on("click", function() {
    $(".content-area, .sidebar").toggleClass("no-sidebar");
  });
});

const myMap = new Map();
const mySet = new Set();