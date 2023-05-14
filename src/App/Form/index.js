import "./style.css";


const Form = () => (
    <div className="container">
      <form className="form ">
        <fieldset className="form__fieldset">
          <legend className="form__legend">Kalkulator walut</legend>
          <p>
            <label>
              <span className="form__labelText"> Kwota w zł*: </span>
              <input
             
                placeholder="Wpisz kwotę"
                name="name"
                type="number"
                className="form__field "
                min="0"
                step="any"
                max="1000000"
                required
              />
            </label>
          </p>
          <p>
            <label>
              <span className="form__labelText"> Waluta: </span>
              <select
             
              className="form__field " name="exchange">
                <option value="EUR">EUR</option>
                <option value="USD">USD</option>
                <option value="CHF">CHF</option>
              </select>
            </label>
          </p>
          <button className="form__button">Przelicz</button>
          <p className="">Wynik:</p>
        </fieldset>
      </form>
    </div>
)

export default Form;