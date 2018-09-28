let = tableLabel = ["Pros" ,"Cons"];
let = build = {
    "Pros":["Fresh New Home", "Quality Constructed", "Customization","Energy Efficient","No Immediate Repairs"],
    "Cons":["Not much pricing negotiation","post move costs,ie landscaping","Time commitment","Dealing with Planning and Zoning"]
}
    //buildTable("#table1",tableLabel,build);

/*function buildTable(){
    let sel = document.querySelector("#table1").innerHTML()
    console.log (build);

}*/
let columns = ["pros","cons"]
for (let i = 0; i < build.length; i++ ){
    $("#table1").append("<tr></tr>");
    
    for(let j = 0; j< columns.length; j++){
        $("#table1").append("<td>" + build[i][columns[j]+ "</td>"])
        console.log(build[i]);
    }
}
//$("table1").append("<td>"+build.pros[0]+"</td>")