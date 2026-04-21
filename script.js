function showSchemes() {
    let sector = document.getElementById("sector").value;
    let result = document.getElementById("results");

    let data = {
        agri: "RKVY, Agri Infra Fund, NABARD schemes",
        manufacturing: "CLCSS, MSME Scheme, CGTMSE",
        startup: "Startup India, TIDE 2.0, SAMRIDH",
        food: "PMFME, Food Processing Subsidy"
    };

    if (sector in data) {
        result.innerHTML = "<p><b>Available Schemes:</b><br>" + data[sector] + "</p>";
    } else {
        result.innerHTML = "";
    }
}
