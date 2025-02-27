import * as fs from "fs";
import * as readlineSync from "readline-sync";
import { Company, Founder } from "./interface"; 






const companies: Company[] = JSON.parse(fs.readFileSync("companies.json", "utf-8"));
const founders: Founder[] = JSON.parse(fs.readFileSync("founders.json", "utf-8"));



function displayCompanies() {
    console.log("\nLijst van bedrijven:");
    companies.forEach(company => {
        console.log(`- ${company.name} (${company.id})`);
    });
}



function searchCompanyById() {
    const companyId = readlineSync.question("\nVoer een bedrijf ID in: ").toUpperCase();
    const company = companies.find(c => c.id === companyId);

    if (!company) {
        console.log("Bedrijf niet gevonden! Probeer opnieuw.");
        return;
    }


    const founder = founders.find(f => f.id === company.founder.id);



    console.log("\nBedrijfsinformatie:");
    console.log(`Naam: ${company.name}`);
    console.log(`Beschrijving: ${company.description}`);
    console.log(`Marktwaarde: $${company.marketValue} miljard`);
    console.log(`Opgericht op: ${company.foundedDate}`);
    console.log(`Actief: ${company.isActive ? "Ja" : "Nee"}`);
    console.log(`Industrie: ${company.industry}`);
    console.log(`Vestigingen: ${company.locations.join(", ")}`);
    console.log(`Logo URL: ${company.imageUrl}`);
    



    if (founder) {
        console.log("\nOprichter:");
        console.log(`Naam: ${founder.name}`);
        console.log(`Geboortedatum: ${founder.birthDate}`);
        console.log(`Nationaliteit: ${founder.nationality}`);
    } else {
        console.log("Oprichter niet gevonden in `founders.json`.");
    }
}



function mainMenu() {
    while (true) {
        console.log("\nJSON Data Viewer");
        console.log("1. Bekijk alle bedrijven");
        console.log("2. Zoek bedrijf op ID");
        console.log("3. Afsluiten");
        
        const keuze = readlineSync.question("Kies een optie: ");

        if (keuze === "1") {
            displayCompanies();
        } else if (keuze === "2") {
            searchCompanyById();
        } else if (keuze === "3") {
            console.log("Programma afgesloten!");
            break;
        } else {
            console.log("Ongeldige keuze, probeer opnieuw.");
        }
    }
}

mainMenu();
