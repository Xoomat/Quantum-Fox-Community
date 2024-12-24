document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    const closeButton = document.querySelector(".close-button");
    const moreDetailsButton = document.querySelector(".more-details-button");
    const modalInfo = document.querySelector(".modal-info");
    const modalImage = document.querySelector(".modal-image");

    fetch('./data/games.json')
        .then(response => response.json())
        .then(data => {
            const gamesData = data;

            document.querySelectorAll(".game-block").forEach(block => {
                block.addEventListener("click", () => {
                    const gameId = block.dataset.gameId;
                    const gameData = gamesData.find(game => game.id === gameId);

                    if (gameData) {
                        modalImage.src = gameData.image; // Устанавливаем изображение
                        modalInfo.querySelector("h2").textContent = gameData.name;
                        modalInfo.querySelector("h4").textContent = gameData.description;
                        moreDetailsButton.href = gameData.page;

                        modal.style.display = "flex";
                    }
                });
            });
        })
        .catch(error => console.error('Ошибка загрузки данных:', error));

    closeButton.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});