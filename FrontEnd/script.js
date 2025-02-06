document.addEventListener("DOMContentLoaded", async function () {
  const container = document.querySelector(".gallery");

  try {
    const response = await fetch("http://localhost:5678/api/works");
    if (!response.ok) {
      throw new Error("Erreur lors de la récupération des données");
    }
    const works = await response.json();

    works.forEach((work) => {
      const workCard = document.createElement("figure");
      workCard.classList.add("card");

      workCard.innerHTML = `
                  <img src="${work.imageUrl}" alt="${work.title}">
                  <figcaption class="info"> 
                      ${work.title}
                  </figcaption>
              `;

      container.appendChild(workCard);
    });
  } catch (error) {
    console.error("Erreur:", error);
    container.innerHTML = "<p>Impossible de charger les données.</p>";
  }
});
