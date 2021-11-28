import Filter from "./Filter";
import Tabs from "./Tabs";
import Checkbox from "./Checkbox";
import Logo from "./logo/Logo";

function Examples() {
  function callbackFuncFilter(option) {
    console.log("callback", option);
  }

  function callbackFuncTab(option) {
    console.log("callback", option);
  }

  function callbackFuncCheckbox(checked) {
    console.log("callback", checked);
  }

  return (
    <div>
      <div className="bg-dark">
        <br></br>
        <h1 className="h1-dark">Headline 1 für Überschriften</h1>
        <h2 className="h2-dark">Headline 2 für verschiedene Sektionen</h2>
        <h3 className="h3-dark">Headline für unterschiedliche Abschnitte</h3>
        <h4 className="h4-dark">
          Headline 4 als Definition bzw Subline von H1 oder H2
        </h4>
        <p className="p-dark">
          Fließtext: Weit hinten, hinter den Wortbergen, fern der Länder
          Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen
          sie in Buchstabhausen an der Küste des Semantik, eines großen
          Sprachozeans. Ein kleines Bächlein namens Duden fließt durch ihren Ort
          und versorgt sie mit den nötigen Regelialien
        </p>
        <br></br>
      </div>

      <div className="bg-light">
        <br></br>
        <h1>Headline 1 für Überschriften</h1>
        <h2>Headline 2 für verschiedene Sektionen</h2>
        <h3>Headline für unterschiedliche Abschnitte</h3>
        <h4>Headline 4 als Definition bzw Subline von H1 oder H2</h4>
        <p>
          Fließtext: Weit hinten, hinter den Wortbergen, fern der Länder
          Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen
          sie in Buchstabhausen an der Küste des Semantik, eines großen
          Sprachozeans. Ein kleines Bächlein namens Duden fließt durch ihren Ort
          und versorgt sie mit den nötigen Regelialien
        </p>
        <br></br>
      </div>
      <div className="bg-dark">
        <br></br>
        <button className="btn-primary-dark">PRIMARY</button>
        <button className="btn-secondary-dark">Secondary</button>
        <button className="btn-tertiary-dark">Tertiary</button>
        <br></br>{" "}
      </div>
      <div className="bg-light">
        <br></br>
        <button className="btn-primary-light">PRIMARY</button>
        <button className="btn-secondary-light">Secondary</button>
        <button className="btn-tertiary-light">Tertiary</button>
        <br></br>{" "}
      </div>

      <div className="bg-dark">
        <br></br>
        <Filter
          options={["Option 1", "Option 2", "Option 3", "Option 4"]}
          callbackFunc={callbackFuncFilter}
          defaultOption={0}
          resetOnReload={false}
          localStorageVar="filter1"
          theme={"dark"}
        ></Filter>
        <br></br> <br></br>{" "}
      </div>
      <div className="bg-light">
        <br></br>
        <Filter
          options={["Option 1", "Option 2", "Option 3", "Option 4"]}
          callbackFunc={callbackFuncFilter}
          defaultOption={0}
          resetOnReload={false}
          localStorageVar="filter2"
          theme={"light"}
        ></Filter>
        <br></br> <br></br>{" "}
      </div>
      <div className="bg-dark">
        <Logo theme="dark" width="200px" />
        <br></br>
        <Tabs
          options={["Option 1", "Option 2", "Option 3", "Option 4"]}
          callbackFunc={callbackFuncTab}
          defaultOption={0}
          resetOnReload={false}
          localStorageVar="tabs1"
          theme="dark"
        ></Tabs>
        <br></br> <br></br>
      </div>
      <div className="bg-light">
        <br></br>
        <Logo theme="light" width="100px" />
        <Tabs
          options={["Option 1", "Option 2", "Option 3", "Option 4"]}
          callbackFunc={callbackFuncTab}
          defaultOption={0}
          resetOnReload={false}
          localStorageVar="tabs1"
          theme="light"
        ></Tabs>
        <br></br> <br></br>
      </div>
      <div className="bg-dark">
        <input
          type="text"
          className="input-dark"
          placeholder="input field"
        ></input>
        <br></br>
        <br></br>
        <div className="checkbox-container">
          <Checkbox
            checked={true}
            label="Label"
            callbackFunc={callbackFuncCheckbox}
            resetOnReload={false}
            localStorageVar="checkbox1"
            theme="dark"
          />
          <Checkbox
            checked={false}
            label="Label2"
            callbackFunc={callbackFuncCheckbox}
            resetOnReload={false}
            localStorageVar="checkbox2"
            theme="dark"
          />
        </div>
      </div>
      <div className="bg-light">
        <input
          type="text"
          className="input-light"
          placeholder="input field"
        ></input>
        <br></br>
        <br></br>
        <div className="checkbox-container">
          <Checkbox
            checked={true}
            label="Label"
            callbackFunc={callbackFuncCheckbox}
            resetOnReload={false}
            localStorageVar="checkbox1"
            theme="light"
          />
          <Checkbox
            checked={false}
            label="Label2"
            callbackFunc={callbackFuncCheckbox}
            resetOnReload={false}
            localStorageVar="checkbox2"
            theme="light"
          />
        </div>
      </div>
      <br></br>

      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}

export default Examples;
