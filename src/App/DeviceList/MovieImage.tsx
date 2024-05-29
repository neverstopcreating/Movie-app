interface MovieImageProps {
  imageUrl: string;
  title: string;
}

export function MovieImage({ imageUrl, title }: MovieImageProps) {
  return (
      <div>
        {imageUrl && <img src={imageUrl} alt={title} />}
      </div>
  );
}
