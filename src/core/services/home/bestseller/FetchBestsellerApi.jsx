import axios from "axios";
import { BestsellerData } from "../../../json/data/bestseller"; // Mock Data

const api = axios.create({
    baseURL: "http://zen/R50B3/UFS/demostoreQI9S5BDATC0M1KYJH",
    timeout: 5000,
    headers: {
        "Content-Type": "application/json",
    },
});

const fetchBestsellers = async () => {
    try {
        return new Promise((resolve) => {
            setTimeout(() => resolve(BestsellerData), 2000);
        });
    } catch (error) {
        console.error("API Error: Fetching bestsellers failed", error);
        return new Promise((resolve) => {
            setTimeout(() => resolve(BestsellerData), 2000);
        });
    }
};

export default fetchBestsellers;
