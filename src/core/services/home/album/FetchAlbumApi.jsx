import axios from "axios";
import { AlbumData } from "../../../json/data/album"; // Mock Data

const api = axios.create({
    baseURL: "http://zen/R50B3/UFS/demostoreQI9S5BDATC0M1KYJH",
    timeout: 5000,
    headers: {
        "Content-Type": "application/json",
    },
});

const fetchAlbums = async () => {
    try {
        // const response = await api.get("/AlbumImages");
        // return response.data; 
        return new Promise((resolve) => {
            setTimeout(() => resolve(AlbumData), 2000);
        });
    } catch (error) {
        console.error("API Error: Fetching albums failed", error);
        return new Promise((resolve) => {
            setTimeout(() => resolve(AlbumData), 2000);
        });
    }
};

export default fetchAlbums;
