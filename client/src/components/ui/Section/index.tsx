import type { SectionProps } from './Section.types';

const Section = ({ children }: SectionProps) => {
    return (
        <section className="py-24">
            {children}
        </section>
    );
};

export default Section;