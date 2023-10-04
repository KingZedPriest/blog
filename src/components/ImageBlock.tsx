import Image from "next/image";

const ImageBlock = ({ node } : {node : any}) => {
  const { alt, url, caption } = node;

  return (
    <figure>
      <Image src={url} alt={alt} />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
};

export default ImageBlock;
