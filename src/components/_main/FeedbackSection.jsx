export default function FeedbackSection({ children }) {
    return (
        <section className="feedback">
            <p style={{
                marginBlockEnd:26,
            }}>
                We’re gathering feedback from our customers at BAMOS DESIGN.
                Please take a moment to share your thoughts — your input helps us make BAMOS DESIGN even better.
            </p>
            {children}
        </section>
    )
}