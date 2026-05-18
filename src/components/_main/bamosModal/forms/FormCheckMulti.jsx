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

    const checkboxList = [
        { id: 'music', value: 'music', label: 'Music' },
        { id: 'art', value: 'art', label: 'Art' },
        { id: 'design', value: 'design', label: 'Design' },
        { id: 'programing', value: 'programing', label: 'Programing' },
    ];

    return (
        <fieldset>
            <legend>What is your favorite field or area of interest?</legend>

            <div className={styles.formBlock}>

                {checkboxList.map((checkbox) => (
                    <span key={checkbox.id}>
                        <input
                            id={checkbox.id}
                            name="favorite"
                            type="checkbox"
                            value={checkbox.value}
                            checked={form.favorite.includes(checkbox.value)}
                            onChange={handleFormMulti}
                        />
                        <label htmlFor={checkbox.id}>{checkbox.label}</label>
                    </span>
                ))}

            </div>
        </fieldset>
    );
}