export default function FormSelect({ form, setForm, name }) {
    const handleForm = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const optionList = [
        { value: 'noSelect', label: '--１つ選択してください--' },
        { value: 'friend', label: '友人の紹介' },
        { value: 'sns', label: 'SNS' },
        { value: 'banner', label: 'Webバナー' },
        { value: 'movie', label: '動画配信サイト' },
        { value: 'poster', label: '広告・ポスター' },
        { value: 'other', label: 'その他' },
    ];

    return (
        <fieldset>
            <legend>How did you hear about BAMOS DESIGN?</legend>
            <select name={name} id={name} value={form[name]} onChange={handleForm}>
                {optionList.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </fieldset>
    );
}