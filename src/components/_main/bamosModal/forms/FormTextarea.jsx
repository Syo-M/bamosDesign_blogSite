export default function FormTextarea({ form, setForm }) {
    const handleForm = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <fieldset>
            <legend>
                What kind of special features or topics would you like to read on BAMOS DESIGN in the future?
            </legend>
            <textarea
                name="comment"
                id="comment"
                cols="30"
                rows="2"
                value={form.comment}
                onChange={handleForm}
            ></textarea>
        </fieldset>
    );
}
