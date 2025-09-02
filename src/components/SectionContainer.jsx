import { Container } from "./Container";

export const SectionContainer = ({ children, className = "" }) => {
    return (
        <section className={`py-lg`}>
            <Container className={`${className}`}>{children}</Container>
        </section>
    );
};
