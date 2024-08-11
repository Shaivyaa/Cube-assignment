import { useEffect, useState } from "react";
import axios from "axios";

const UNSPLASH_ACCESS_KEY = "BG1X36wLXxkcEaHvtXN5mxA2Y9sBy7JNmhtnlART9oU";

const useFetchPhotos = (customerId: number | null) => {
  const [photos, setPhotos] = useState<string[]>([]);

  const fetchPhotos = async () => {
    try {
      const response = await axios.get(
        `https://api.unsplash.com/photos/random?count=9&client_id=${UNSPLASH_ACCESS_KEY}`
      );
      setPhotos(
        response.data.map(
          (photo: { urls: { regular: string } }) => photo.urls.regular
        )
      );
    } catch (error) {
      console.error("Error fetching photos:", error);
    }
  };

  useEffect(() => {
    if (customerId !== null) {
      fetchPhotos();
    }

    const interval = setInterval(fetchPhotos, 10000);

    return () => clearInterval(interval);
  }, [customerId]);

  return photos;
};

export default useFetchPhotos;
