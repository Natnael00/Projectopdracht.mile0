"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var readlineSync = require("readline-sync");
var companies = JSON.parse(fs.readFileSync("companies.json", "utf-8"));
var founders = JSON.parse(fs.readFileSync("founders.json", "utf-8"));
function displayCompanies() {
    console.log("\nLijst van bedrijven:");
    companies.forEach(function (company) {
        console.log("- ".concat(company.name, " (").concat(company.id, ")"));
    });
}
function searchCompanyById() {
    var companyId = readlineSync.question("\nVoer een bedrijf ID in: ").toUpperCase();
    var company = companies.find(function (c) { return c.id === companyId; });
    if (!company) {
        console.log("Bedrijf niet gevonden! Probeer opnieuw.");
        return;
    }
    var founder = founders.find(function (f) { return f.id === company.founder.id; });
    console.log("\nBedrijfsinformatie:");
    console.log("Naam: ".concat(company.name));
    console.log("Beschrijving: ".concat(company.description));
    console.log("Marktwaarde: $".concat(company.marketValue, " miljard"));
    console.log("Opgericht op: ".concat(company.foundedDate));
    console.log("Actief: ".concat(company.isActive ? "Ja" : "Nee"));
    console.log("Industrie: ".concat(company.industry));
    console.log("Vestigingen: ".concat(company.locations.join(", ")));
    console.log("Logo URL: ".concat(company.imageUrl));
    if (founder) {
        console.log("\nOprichter:");
        console.log("Naam: ".concat(founder.name));
        console.log("Geboortedatum: ".concat(founder.birthDate));
        console.log("Nationaliteit: ".concat(founder.nationality));
    }
    else {
        console.log("Oprichter niet gevonden in `founders.json`.");
    }
}
function mainMenu() {
    while (true) {
        console.log("\nJSON Data Viewer");
        console.log("1. Bekijk alle bedrijven");
        console.log("2. Zoek bedrijf op ID");
        console.log("3. Afsluiten");
        var keuze = readlineSync.question("Kies een optie: ");
        if (keuze === "1") {
            displayCompanies();
        }
        else if (keuze === "2") {
            searchCompanyById();
        }
        else if (keuze === "3") {
            console.log("Programma afgesloten!");
            break;
        }
        else {
            console.log("Ongeldige keuze, probeer opnieuw.");
        }
    }
}
mainMenu();
