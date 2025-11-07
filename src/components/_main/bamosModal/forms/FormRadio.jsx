export default function FormRadio({ form, setForm }) {
    const handleForm = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <fieldset>
            <legend>Age</legend>
            <p className="formBlock">
                <span>
                    <input
                        type="radio"
                        name="age"
                        id="age0_10"
                        value="0-10"
                        checked={form.age === "0-10"}
                        onChange={handleForm}
                    />
                    <label htmlFor="age0_10">0 - 10</label>
                </span>

                <span>
                    <input
                        type="radio"
                        name="age"
                        id="age10_20"
                        value="10-20"
                        checked={form.age === "10-20"}
                        onChange={handleForm}
                    />
                    <label htmlFor="age10_20">10 - 20</label>
                </span>

                <span>
                    <input
                        type="radio"
                        name="age"
                        id="age20_30"
                        value="20-30"
                        checked={form.age === "20-30"}
                        onChange={handleForm}
                    />
                    <label htmlFor="age20_30">20 - 30</label>
                </span>

                <span>
                    <input
                        type="radio"
                        name="age"
                        id="age30_40"
                        value="30-40"
                        checked={form.age === "30-40"}
                        onChange={handleForm}
                    />
                    <label htmlFor="age30_40">30 - 40</label>
                </span>

                <span>
                    <input
                        type="radio"
                        name="age"
                        id="age40_50"
                        value="40-50"
                        checked={form.age === "40-50"}
                        onChange={handleForm}
                    />
                    <label htmlFor="age40_50">40 - 50</label>
                </span>

                <span>
                    <input
                        type="radio"
                        name="age"
                        id="age50AndAbove"
                        value="50AndAbove"
                        checked={form.age === "50AndAbove"}
                        onChange={handleForm}
                    />
                    <label htmlFor="age50AndAbove">50 and above</label>
                </span>
            </p>
        </fieldset>
    );
}
