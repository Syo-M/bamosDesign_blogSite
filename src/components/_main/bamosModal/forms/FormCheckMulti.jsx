import styles from './Form.module.css';

export default function FormCheckMulti({ form, setForm }) {
    const handleFormMulti = (e) => {
        const { name, value, checked } = e.target;

        const nextFavorite = checked
            ? [...form.favorite, value]
            : form.favorite.filter((item) => item !== value);

        setForm({
            ...form,
            [name]: nextFavorite,
        });
    };

    return (
        <fieldset>
            <legend>What is your favorite field or area of interest?</legend>

            <div className={styles.formBlock}>
                <span>
                    <input
                        id="music"
                        name="favorite"
                        type="checkbox"
                        value="music"
                        checked={form.favorite.includes('music')}
                        onChange={handleFormMulti}
                    />
                    <label htmlFor="music">Music</label>
                </span>

                <span>
                    <input
                        id="art"
                        name="favorite"
                        type="checkbox"
                        value="art"
                        checked={form.favorite.includes('art')}
                        onChange={handleFormMulti}
                    />
                    <label htmlFor="art">Art</label>
                </span>

                <span>
                    <input
                        id="design"
                        name="favorite"
                        type="checkbox"
                        value="design"
                        checked={form.favorite.includes('design')}
                        onChange={handleFormMulti}
                    />
                    <label htmlFor="design">Design</label>
                </span>

                <span>
                    <input
                        id="programing"
                        name="favorite"
                        type="checkbox"
                        value="programing"
                        checked={form.favorite.includes('programing')}
                        onChange={handleFormMulti}
                    />
                    <label htmlFor="programing">Programing</label>
                </span>
            </div>
        </fieldset>
    );
}