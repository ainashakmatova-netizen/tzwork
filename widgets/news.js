import { CONFIG } from "../config.js";

export async function loadNews() {

    const block = document.getElementById("news");

    try {

        const res = await fetch(CONFIG.NEWS_URL);

        if (!res.ok)
            throw new Error();

        const data = await res.json();

        block.innerHTML = "";

        data.results.forEach(item => {

            const li = document.createElement("li");

            const a = document.createElement("a");
            a.href = item.url;
            a.target = "_blank";
            a.textContent = item.title;

            li.appendChild(a);
            block.appendChild(li);
        });

        localStorage.setItem(
            "news",
            block.innerHTML
        );

    } catch {

        const cached = localStorage.getItem("news");

        if (cached) {
            block.innerHTML = cached;
        } else {
            block.innerHTML =
                "<li>Новости недоступны</li>";
        }
    }
}
