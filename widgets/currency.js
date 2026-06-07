import { CONFIG } from "../config.js";

export async function loadCurrency() {

    const block = document.getElementById("currency");

    try {

        const res = await fetch(CONFIG.CURRENCY_URL);

        if (!res.ok)
            throw new Error();

        const data = await res.json();

        const rate = data.rates.KGS;

        block.textContent = rate.toFixed(2);

        localStorage.setItem(
            "currency",
            rate
        );

        return rate;

    } catch {

        block.textContent =
            localStorage.getItem("currency")
            || "Ошибка";

        return null;
    }
}