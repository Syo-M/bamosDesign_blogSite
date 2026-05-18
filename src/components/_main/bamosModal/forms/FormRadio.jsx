import styles from './Form.module.css';

export default function FormRadio({ form, setForm }) {
    const handleForm = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const radioList = [
        { id: 'age0_10', value: '0-10', label: '0 - 10' },
        { id: 'age10_20', value: '10-20', label: '10 - 20' },
        { id: 'age20_30', value: '20-30', label: '20 - 30' },
        { id: 'age30_40', value: '30-40', label: '30 - 40' },
        { id: 'age40_50', value: '40-50', label: '40 - 50' },
        { id: 'age50AndOver', value: '50AndOver', label: '50 & over' },
    ]

    return (
        <fieldset>
            <legend>Age</legend>
            <p className={styles.formBlock}>
                {radioList.map((radio) => (
                    <span key={radio.id}>
                        <input
                            type="radio"
                            name="age"
                            id={radio.id}
                            value={radio.value}
                            checked={form.age === radio.value}
                            onChange={handleForm}
                        />
                        <label htmlFor={radio.id}>{radio.label}</label>
                    </span>
                ))}
            </p>
        </fieldset>
    );
}
