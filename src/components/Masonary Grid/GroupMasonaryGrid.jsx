import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GridImage from "./GridImage";
import ImagePreview from "../ImagePreview";

function useColumnCount() {
  // Responsive Scaling
  const getColumns = () => {
    if (window.innerWidth >= 1536) return 4;
    if (window.innerWidth >= 1280) return 3;
    if (window.innerWidth >= 768) return 2;
    if (window.innerWidth >= 640) return 2;
    return 1;
  };

  const [columns, setColumns] = useState(getColumns);

  useEffect(() => {
    const handleResize = () => setColumns(getColumns());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return columns;
}

// Grid
export default function MasonaryGrid({ images }) {
  // Image Preview useState
  const [selectedIndex, setSelectedIndex] = useState(null);

  const numColumns = useColumnCount();

  const columns = Array.from({ length: numColumns }, () => []);
  images.forEach((url, i) => columns[i % numColumns].push(url));

  return (
    <>
      <div className="flex gap-2 px-5 sm:px-20 pt-5" aria-label="Photo gallery">
        {columns.map((colImages, colIndex) => (
          <div key={colIndex} className="flex-1 flex flex-col gap-2">
            {colImages.map((url, index) => (
              <GridImage
                key={url}
                url={url}
                index={index}
                onClick={() => setSelectedIndex(images.indexOf(url))}
              />
            ))}
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <ImagePreview
            images={images}
            initialIndex={selectedIndex}
            onClose={() => setSelectedIndex(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
