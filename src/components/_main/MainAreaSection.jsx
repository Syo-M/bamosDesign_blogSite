import BamosHeadings from "../_commons/BamosHeadings/BamosHeadings";

export default function MainAreaSection({ children, headingText = "sectionTitle", sectionId = "section" }) {
    return (
        <section id={sectionId}>
            <BamosHeadings headingText={headingText} />
            {children}
        </section>
    );
}
