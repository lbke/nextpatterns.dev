import { useEffect, useState } from "react";

/**
 * A data fetching function with proper cleaning logic
 * @see https://react.dev/learn/you-might-not-need-an-effect
 */
export function useData(url: string) {
    const [data, setData] = useState<any>({ data: null });
    useEffect(() => {
        let ignore = false;
        fetch(url)
            .then(response => response.json())
            .then(json => {
                if (!ignore) {
                    setData(json);
                }
            });
        return () => {
            ignore = true;
        };
    }, [url]);
    return data;
}