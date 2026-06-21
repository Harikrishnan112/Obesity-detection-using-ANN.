console.log("script.js loaded");
async function predictObesity() {

    document.getElementById("loader").style.display = "block";

    const body = {
        Age: Number(document.getElementById("Age").value),
        Gender: document.getElementById("Gender").value,
        Height: Number(document.getElementById("Height").value),
        Weight: Number(document.getElementById("Weight").value),

        CALC: document.getElementById("CALC").value,
        FAVC: document.getElementById("FAVC").value,
        FCVC: Number(document.getElementById("FCVC").value),
        NCP: Number(document.getElementById("NCP").value),

        SCC: document.getElementById("SCC").value,
        SMOKE: document.getElementById("SMOKE").value,

        CH2O: Number(document.getElementById("CH2O").value),

        family_history_with_overweight:
            document.getElementById("family_history_with_overweight").value,

        FAF: Number(document.getElementById("FAF").value),
        TUE: Number(document.getElementById("TUE").value),

        CAEC: document.getElementById("CAEC").value,
        MTRANS: document.getElementById("MTRANS").value
    };

    try {

        const response = await fetch("/predict", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        });

        const result = await response.json();

        document.getElementById("loader").style.display = "none";

        if (result.error) {

            document.getElementById("result").innerHTML =
                "Error: " + result.error;

        } else {

            document.getElementById("result").innerHTML =
                `<h3>${result.prediction}</h3>
                 <p>Confidence: ${result.confidence.toFixed(2)}%</p>`;
        }

    } catch (error) {

        document.getElementById("loader").style.display = "none";

        document.getElementById("result").innerHTML =
            "Connection Error";

        console.log(error);
    }
}
