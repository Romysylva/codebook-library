import { useEffect } from "react";

export const useTitle = (title) => {

    useEffect(() => {
        document.title = `${title} - CodeBookLibrary`;
    }, [title]);

  return null;
}