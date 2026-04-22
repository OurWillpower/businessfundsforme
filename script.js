function findFunding() {

    let sector = document.getElementById("sector").value;
    let stage = document.getElementById("stage").value;
    let output = document.getElementById("results");

    let data = {
        startup: "Startup India Seed Fund, TIDE 2.0, SAMRIDH",
        msme: "MSME Scheme, CGTMSE Loan, CLCSS Subsidy",
        agri: "RKVY, NABARD, Agri Infra Fund",
        food: "PMFME, Food Processing Subsidy"
    };

    if (sector in data) {
        output.innerHTML = "<h3>Relevant Funding:</h3><p>" + data[sector] + "</p><br><b>Need help applying? Contact us.</b>";
    } else {
        output.innerHTML = "Select a sector to view funding options.";
    }
}
