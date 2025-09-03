import { Container } from "./Container";
import { ImageContainer } from "./ImageContainer";

import heroImage from "../assets/pictures/home-page/image-preview.png";

export const Hero = () => {
    return (
        <div className="py-lg">
            <Container>
                <ImageContainer>
                    <img className="w-full -ml-4 object-cover md:-ml-10" src={heroImage} alt="Hero Image" />
                </ImageContainer>
            </Container>
        </div>
    );
};
