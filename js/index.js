document.addEventListener("DOMContentLoaded", function () {
  // Отримуємо посилання на всі кнопки у хедері
  var headerItems = document.querySelectorAll(".a-btn");

  // Встановлюємо клас "active" на перший елемент за замовчуванням
  headerItems[0].classList.add("active");

  // Додаємо слухача подій для кожної кнопки
  headerItems.forEach(function (item) {
    item.addEventListener("click", function () {
      // Видаляємо клас "active" з усіх елементів
      headerItems.forEach(function (el) {
        el.classList.remove("active");
      });

      // Додаємо клас "active" до натисканого елемента
      item.classList.add("active");
    });
  });
});

document.getElementById("currentYear").textContent = new Date().getFullYear();
