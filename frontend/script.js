const API_URL = "http://localhost:3000/api/notices";

const noticesContainer = document.getElementById("notices-container");
const loading = document.getElementById("loading");
const errorMessage = document.getElementById("error-message");

async function loadNotices() {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("Failed to fetch notices");
    }

    const notices = await response.json();

    loading.style.display = "none";

    noticesContainer.innerHTML = "";

    notices.forEach((notice) => {
      const card = document.createElement("article");

      card.className = "notice-card";

      const date = new Date(notice.created_at);

      const formattedDate = date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });

      card.innerHTML = `
        <span class="notice-category">
          ${escapeHTML(notice.category)}
        </span>

        <h3>
          ${escapeHTML(notice.title)}
        </h3>

        <p>
          ${escapeHTML(notice.description)}
        </p>

        <div class="notice-date">
          Published ${formattedDate}
        </div>
      `;

      noticesContainer.appendChild(card);
    });
  } catch (error) {
    console.error(error);

    loading.style.display = "none";

    errorMessage.textContent =
      "Unable to load campus notices. Please make sure the API server is running.";
  }
}

/*
  Prevent HTML injection when displaying
  database values inside the page.
*/
function escapeHTML(value) {
  const div = document.createElement("div");

  div.textContent = value;

  return div.innerHTML;
}

loadNotices();
