import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { albumState } from "../store/index";
import { FetchAlbumData } from "../services/index";

const useAlbumData = () => {
    const [albums, setAlbums] = useRecoilState(albumState);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getAlbums = async () => {
            setLoading(true);
            setError(null);
            try {
                const data = await FetchAlbumData();
                setAlbums(data);
            } catch (err) {
                setError("Failed to fetch albums");
            } finally {
                setLoading(false);
            }
        };

        if (albums?.length === 0) getAlbums();
    }, [albums, setAlbums]);

    return { albums, loading, error };
};

export default useAlbumData;
