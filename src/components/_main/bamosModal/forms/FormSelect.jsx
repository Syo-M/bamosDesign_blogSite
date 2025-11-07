export default function FormSelect({ form, setForm }) {
    const handleForm = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <fieldset>
            <legend>How did you hear about BAMOS DESIGN?</legend>
            <select name="media" id="media" value={form.media} onChange={handleForm}>
                <option value="noSelect">--１つ選択してください--</option>
                <option value="friend">友人の紹介</option>
                <option value="sns">SNS</option>
                <option value="banner">Webバナー</option>
                <option value="movie">動画配信サイト</option>
                <option value="poster">広告・ポスター</option>
                <option value="other">その他</option>
            </select>
        </fieldset>
    );
}
