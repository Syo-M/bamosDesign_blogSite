import styles from './Form.module.css';

export default function FormCheckMulti({ form, setForm }) {
    const handleFormMulti = (e) => {
        const fa = [...form.favorite];

        if (e.target.checked) {
            fa.push(e.target.value);
        } else {
            fa.splice(fa.indexOf(e.target.value), 1);
        }

        setForm({
            ...form,
            [e.target.name]: fa,
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