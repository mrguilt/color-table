//colortable.js
//
//Functions to create color tables from files for my stash.
//
//Current update: 2022-01-31
//Version 1.1
//
// 2022-01-31: Updated to detect if there is a link or not, and not make it a hyperlink
// 2022-01-29: Initial Version
// File Reading Function--Loads text file from server
function loadFile(filePath) {
    var result = null;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", filePath, false);
    xmlhttp.send();
    if (xmlhttp.status==200) {
	result = xmlhttp.responseText;
    }
    return result;
}

//Prints Color Table from File Data
function PrintTable(myData) {

//Takes data from myData, and creates an array, each line an element.
    var dalines=myData.split("\n");

    document.write("<table width=700px>\n");
    document.write("<tr><th width=20%>Color</th><th width=30%>Description</th><th width=20%>Color</th><th width=30%>Description</th></tr>");

//Puts the lines into a table (with formatting) and outputs it.
    var count=0;

    while(count<dalines.length-1) {

//Splits the line on the commas
	var davalues=dalines[count].split(",");
	const regex2 = /\"/g;
	colorname=davalues[1].replace(regex2,"");
	const regex = /\'/g;
	colorname=colorname.replace(regex,"");
	if(isOdd(count)==0) {
	    document.write("<tr height=60px>\n");
	}
//Cell for the color. Background is the color, with the color code
//as the data (printed in both black and whilte for compraison.
	document.write("<td align=center bgcolor=",davalues[0]," onclick='ColorDemoTable(\"",colorname,"\",\"",davalues[0],"\");'><b><font color=FFFFFF>",davalues[0],"</font></b><br><b><font color=000000>",davalues[0],"</font></td>\n");

//Color name, with a hyperlink to the source. 
	if(davalues.length==3) {
	    document.write("<td><a href=\"",davalues[2],"\">",davalues[1],"</a></td>\n");
	} else {
    	    document.write("<td>",davalues[1],"</td>\n");
	}
	

	if(isOdd(count)!=0) {
	    document.write("</tr>\n");
	}
	count++;
    }
    document.write("</table>\n");				
}
	  


function isOdd(num) { return num % 2;}

function ColorDemoTable(myComment,myColor) {
    var myText="<table width=700px><tr>";
    myText=myText+"<th>Color on Black</th><th>Color on White</th><th>Black on Color</th><th>White on Color</th></tr><tr height=60px>";
    myText=myText+"<td align=center width=25% bgcolor=000000><font color="+myColor+" style=\"font-size:120%\">"+myComment+"</font></td>";
    myText=myText+"<td align=center width=25% bgcolor=ffffff><font color="+myColor+" style=\"font-size:120%\">"+myComment+"</font></td>";
    myText=myText+"<td align=center width=25% bgcolor="+myColor+"><font color=000000 style=\"font-size:120%\">"+myComment+"</font></td>";
    myText=myText+"<td align=center width=25% bgcolor="+myColor+"><font color=ffffff style=\"font-size:120%\">"+myComment+"</font></td>";
    myText=myText+"</tr></table>";
    document.getElementById("colorsample").innerHTML = myText;
}
