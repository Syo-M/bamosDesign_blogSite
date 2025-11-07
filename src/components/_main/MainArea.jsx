import BamosHeadings from "../_commons/BamosHeadings/BamosHeadings";
import BamosCardWrap from "./bamosCardLayout/BamosCardWrap";
import BamosModalWrap from "./bamosModal/BamosModalWrap";
import MainAreaSection from "./MainAreaSection";

export default function MainArea() {
    return (
        <main>
            <div className="mainWrap">
                <MainAreaSection headingText="Latest Blog Posts" sectionId="blog">
                    <BamosCardWrap />
                </MainAreaSection>

                <MainAreaSection headingText="We Value Your Feedback" sectionId="feedback">
                    {/* このpタグは独自の余白があるので、使い回ししづらいので、コンポーネントにせず、直書きしてます。 */}
                    <p
                        style={{
                            marginBlockEnd: 26,
                        }}
                    >
                        We’re gathering feedback from our customers at BAMOS DESIGN. Please take a moment to share your
                        thoughts — your input helps us make BAMOS DESIGN even better.
                    </p>
                    <BamosModalWrap />
                </MainAreaSection>
            </div>
        </main>
    );
}
