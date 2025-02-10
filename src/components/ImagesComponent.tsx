import { useGetImagesQuery } from "../services/api";

interface Image {
  id: number;
  src: string;
  alt?: string;
  link: string;
  width: number;
  height: number;
  coords: [number, number];
}

const ImagesComponent: React.FC = () => {
  const { data, isLoading } = useGetImagesQuery(undefined);

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  const GRID_SIZE = 18;

  return (
    <div className="images">
      {data?.map((image: Image) => {
        const width = image.width; // Оставляем оригинальный размер
        const height = image.height; // Оставляем оригинальный размер
        return (
          <div
            key={image.id}
            className="image-container"
            style={{
              position: "absolute",
              left: `${image.coords[0] * GRID_SIZE}px`, // Координаты по X
              top: `${image.coords[1] * GRID_SIZE}px`, // Координаты по Y
              width: `${width}px`, // Оставляем исходную ширину
              height: `${height}px`, // Оставляем исходную высоту
              zIndex: image.id,
              display: "flex", // Используем flex для центрации
              justifyContent: "center", // Центрируем изображение по горизонтали
              alignItems: "center", // Центрируем изображение по вертикали
            }}
          >
            <a
              title={image.link}
              href={image.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                cursor: "pointer",
                display: "block", // Убираем нежелательные отступы
                width: "100%", // Делает ссылку на всю область контейнера
                height: "100%", // Делает ссылку на всю область контейнера
              }}
            >
              <img
                style={{
                  width: "100%", // Сжимаем изображение по ширине контейнера
                  height: "100%", // Сжимаем изображение по высоте контейнера
                  objectFit: "cover", // Обеспечиваем обрезку и пропорциональность изображения
                }}
                src={image.src}
                alt={image.alt || "Image"}
              />
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default ImagesComponent;
