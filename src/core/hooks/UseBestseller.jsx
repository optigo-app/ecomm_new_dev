import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { bestsellerState } from "../store/index";
import { FetchBestsellers } from "../services/index";

const UseBestsellerData = () => {
    const [bestsellers, setBestsellers] = useRecoilState(bestsellerState);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getBestsellers = async () => {
            setLoading(true);
            setError(null);
            try {
                const data = await FetchBestsellers();
                setBestsellers(data);
            } catch (err) {
                setError("Failed to fetch bestsellers");
            } finally {
                setLoading(false);
            }
        };

        if (bestsellers?.length === 0) getBestsellers();
    }, [bestsellers, setBestsellers]);

    return { bestsellers, loading, error };
};

export default UseBestsellerData;
