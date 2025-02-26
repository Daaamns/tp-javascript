let content = {
  name: "Google",
  headquarters: " Googleplex, Mountain View, California, United States ",

  founders: [
    "Larry Page, né le 26/03/1973 à East Lansing, Michigan",
    "Sergey Brin, né le 21/08/1973 à Moscou, Union Soviétique ",
  ],
  revenue: ["2008, 16.49", "2012, 37.97", "2016, 89.46", "2018, 136.2"],
};

console.log("Fondateurs de " + content.name + ":");
for (let i = 0; i < content.founders.length; i++) {
  console.log("- " + content.founders[i]);
}

console.log("\nChiffre d'affaires en milliards de $ :");
for (let j = 0; j < content.revenue.length; j++) {
  console.log(content.revenue[j]);
}
