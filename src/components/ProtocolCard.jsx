import { ImageContainer } from "./ImageContainer";

export const ProtocolCard = ({ title = "", content = "", imgSize = "", img = "", direction = "" }) => {
    return (
        <article className={`flex gap-5 md:gap-6 flex-col items-center ${direction ? direction : ""}`}>
            <div className="flex flex-1 flex-col gap-5 md:gap-6">
                <h3 className="text-lg md:text-2xl">{title}</h3>
                <p className="text-md">{content}</p>
            </div>
            {img && (
                <ImageContainer className={imgSize}>
                    <img className={`w-full`} src={img} alt={`Image of ${title}`} />
                </ImageContainer>
                // <picture className={`flex justify-center items-center ${imgSize ? imgSize : ""}`}>
                // <img className={`w-full`} src={img} alt={`Image of ${title}`} />
                // </picture>
            )}
        </article>
    );
};
