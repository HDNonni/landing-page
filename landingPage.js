//append to table in html

let = tableLabel = ["Pros", "Cons"];
let = build = {
    "Pros": ["Fresh New Home", "Quality Constructed", "Customization", "Energy Efficient", "No Immediate Repairs"],
    "Cons": ["Not much pricing negotiation", "post move costs,ie landscaping", "Time commitment", "Dealing with Planning and Zoning","Finding the right Contractor"]
}
function tableData() {
    for (const builds of Object.values(build.Pros)) {
        console.log("Builds Stuff:", builds);
        $("#table1").append(`<tr> <td>${builds}</td></tr>`)
    }
    for (const Builds of Object.values(build.Cons)) {
        console.log("Build More Stuff:", Builds);
        $("#table2").append(`<tr> <td>${Builds}</td></tr>`)
    }

}
tableData();

