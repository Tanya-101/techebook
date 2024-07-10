import { useEffect } from "react";

export const useTitle = (title) => {

    useEffect(() => {
        document.title = `${title} - TecheBook`;
    },[title]);

  return null;
}
