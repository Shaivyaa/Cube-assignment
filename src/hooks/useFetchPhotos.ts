import { useEffect, useState } from "react";
import axios from "axios";

const useFetchPhotos = () => {
  const [photos, setPhotos] = useState<string[]>([]);

  const fetchPhotos = async () => {
    try {
      const response = await axios.get(
        "https://picsum.photos/v2/list?page=1&limit=9"
      );
      setPhotos(
        response.data.map(
          (photo: { download_url: string }) => photo.download_url
        )
      );
    } catch (error) {
      console.error("Error fetching photos:", error);
    }
  };

  useEffect(() => {
    fetchPhotos();

    const interval = setInterval(fetchPhotos, 10000);

    return () => clearInterval(interval);
  }, []);

  return photos;
};

export default useFetchPhotos;
