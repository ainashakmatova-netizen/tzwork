import { CONFIG } from "../config.js";

export async function loadNews() {

    const list = document.getElementById("news");

    try {

        const res = await fetch(CONFIG.NEWS_URL);

        if (!res.ok)
            throw new Error();

        const data = await res.json();

        list.innerHTML = "";

        data.results.forEach(item => {

            const li = document.createElement("li");

            li.textContent = item.title;

            list.appendChild(li);
        });

    } catch {

        list.innerHTML =
            "<li>Новости недоступны</li>";
    }
}