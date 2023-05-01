var filterButtons = document.querySelectorAll('.filter-button');
var filterItems = document.querySelectorAll('.filter-item');


function filterItemsByClass(className) {
  for (var i = 0; i < filterItems.length; i++) {
    if (filterItems[i].classList.contains(className)) {
      filterItems[i].classList.add('show');
    } else {
      filterItems[i].classList.remove('show');
    }
  }
}


for (var i = 0; i < filterButtons.length; i++) {
  filterButtons[i].addEventListener('click', function() {
    var filter = this.getAttribute('data-filter');
    if (filter === 'all') {
      for (var j = 0; j < filterItems.length; j++) {
        filterItems[j].classList.add('show');
      }
    } else {
      filterItemsByClass(filter);
    }
  });
}
