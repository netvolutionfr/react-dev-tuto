import {useState} from "react";

export default function Test() {
    const [compteur, setCompteur] = useState(0);

    function incrementer() {
        setCompteur(compteur + 1);
    }

    return (
      <div>
          <h1>Test</h1>
          <button onClick={incrementer}>Cliquez ici</button>
          <div>{compteur}</div>

      </div>
    )
}