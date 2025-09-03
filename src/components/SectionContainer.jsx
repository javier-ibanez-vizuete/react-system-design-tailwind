import { Container } from "./Container";

export const SectionContainer = ({ children, className = "" }) => {
    return (
        <section className={`py-lg md:py-2xl`}>
            <Container className={`${className}`}>{children}</Container>
        </section>
    );
};
