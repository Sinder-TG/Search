// Пример данных (в реальной ситуации данные будут приходить с сервера)
const data = [
  { title: "Карточка 1", description: "Описание карточки 1" },
  { title: "Карточка 2", description: "Описание карточки 2" },
  { title: "Карточка 3", description: "Описание карточки 3" },
  // Добавьте больше данных, если нужно
];

function performSearch() {
  // Получаем значение из текстового поля
  const searchTerm = document.getElementById("searchInput").value.toLowerCase();

  // Очищаем предыдущие результаты
  document.getElementById("searchResults").innerHTML = "";

  // Фильтруем данные в соответствии с поисковым запросом
  const filteredData = data.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm) ||
      item.description.toLowerCase().includes(searchTerm)
  );

  // Отображаем результаты в виде карточек
  const resultsContainer = document.getElementById("searchResults");
  filteredData.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `<h2>${item.title}</h2><p>${item.description}</p>`;
    resultsContainer.appendChild(card);
  });
}
