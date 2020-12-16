////////////////////////////////////////////////////////////
//////////////////////// Set-Up ////////////////////////////
////////////////////////////////////////////////////////////

var margin = {left:150, top:100, right:90, bottom:90},
	width = Math.min(window.innerWidth, 700) - margin.left - margin.right,
    height = Math.min(window.innerWidth, 700) - margin.top - margin.bottom,
    innerRadius = Math.min(width, height) * .39,
    outerRadius = innerRadius * 1.1;
	
//var Names = ["Black Widow","Captain America","Hawkeye","the Hulk","Iron Man","Thor"],
//	colors = ["#301E1E", "#083E77", "#342350", "#567235", "#8B161C", "#DF7C00"],
//	opacityDefault = 0.8;

//var matrix = [
//	[0,4,3,2,5,2], //Black Widow
//	[4,0,3,2,4,3], //Captain America
//	[3,3,0,2,3,3], //Hawkeye
//	[2,2,2,0,3,3], //The Hulk
//	[5,4,3,3,0,2], //Iron Man
//	[2,3,3,3,2,0], //Thor
//];



var Names = ["Ahmed","Arif","Badcock","Bailey","Bioletti","Bjareborn","Brooks","Buckley","Bumby","Butler","Chong","Crump","Davies","Geng","Glowacki","Goddard-Winchester","Granville","Hamilton","Jiang","Long","Mataira","Olatunji","Pantoja","Parkinson","Robinson","Sidorov","Sifat","Song","Staines","Stevens McFadden","Storey","Sun","Szmigiel","Tallon","Uhrig","Wimbush","Yazdani-Asrami","You","Zhang","Zhang"],

numPapers = [
1,1,19,1,1,1,2,2,11,1,5,1,1,3,1,1,5,5,11,3,6,1,2,1,1,3,1,2,4,2,3,1,1,2,1,4,1,1,1,1],

	/*
	colors = [
		"#B71C1C", 
		"#880E4F", 
		"#4A148C", 
		"#311B92",
	"#1A237E",
"#0D47A1",
"#01579B",
"#006064",
"#004D40",
"#1B5E20",
"#33691E",
"#827717",
"#F57F17",
"#FF6F00",
"#E65100",
"#BF360C",
"#C62828",
"#AD1457",
"#6A1B9A",
"#4527A0",
"#283593",
"#1565C0",
"#0277BD",
"#00838F",
"#00695C",
"#2E7D32",
"#558B2F",
"#9E9D24",
"#F9A825",
"#FF8F00",
"#FF8F00",
"#FF8F00",
"#FF8F00",
"#FF8F00",
"#FF8F00",
"#FF8F00",
"#FF8F00",
"#FF8F00",
"#FF8F00",
"#FF8F00"
],*/

colors = ["#6b97d6",
"#5fd54d",
"#d354dc",
"#adce44",
"#9e68ec",
"#ddc535",
"#707ee2",
"#60a239",
"#e34cb7",
"#62d68e",
"#e6498a",
"#4e9a5d",
"#eb3f56",
"#66d7c5",
"#eb491f",
"#69cbe8",
"#e36146",
"#4c99ba",
"#d67b30",
"#c975cc",
"#909232",
"#c5a4e6",
"#d59e31",
"#a672a4",
"#a3c985",
"#d96980",
"#439f84",
"#e793bc",
"#d2be68",
"#888aaa",
"#e9aa76",
"#589598",
"#d47767",
"#97c9c3",
"#aa8047",
"#cfb9d7",
"#7f8e66",
"#ae7977",
"#c3c095",
"#deab9c"],



opacityDefault = 1.0;


var matrix = [
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,2,0,6,0,0,0,1,1,1,1,0,4,8,3,3,0,2,0,1,2,0,2,3,0,2,1,1,0,0,4,0,1,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],
	[0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,2,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,2,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0],
	[0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,1,6,0,0,1,2,0,1,0,0,0,0,2,0,0,0,1,2,0,5,0,2,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,1,0,0,1,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,1,0,0,0,0,0,2,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[0,0,4,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
	[0,0,8,0,0,0,2,0,2,0,0,0,0,0,0,0,0,0,3,2,0,0,1,0,0,2,0,2,3,0,0,1,0,0,0,3,0,1,0,0],
	[0,0,3,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,2,0,0,0,0,0,0,2,0,0,1,0,0,1,0,0,0,0,0,1,0,0],
	[0,0,3,0,0,0,0,0,5,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,2,0,0,0,1,0,2,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0],
	[0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,0,0,0,0,0,2,0,0,1,0,0,0,0,1,1,0,0],
	[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],
	[0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,0],
	[0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,1,0,0,0,0,0,2,0,2,0,0,0,0,0,0,0,2,1,1,0,0],
	[1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0],
	[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,4,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,1,0,0,2,2,0,1,0,1,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]];



////////////////////////////////////////////////////////////
/////////// Create scale and layout functions //////////////
////////////////////////////////////////////////////////////

var colors = d3.scale.ordinal()
    .domain(d3.range(Names.length))
	.range(colors);

//A "custom" d3 chord function that automatically sorts the order of the chords in such a manner to reduce overlap	
var chord = customChordLayout()
    .padding(.1)
    .sortChords(d3.descending) //which chord should be shown on top when chords cross. Now the biggest chord is at the bottom
	.matrix(matrix);
		
var arc = d3.svg.arc()
    .innerRadius(innerRadius*1.01)
    .outerRadius(outerRadius);

var path = d3.svg.chord()
	.radius(innerRadius);
	
////////////////////////////////////////////////////////////
////////////////////// Create SVG //////////////////////////
////////////////////////////////////////////////////////////
	
var svg = d3.select("#chart").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
	.append("g")
    .attr("transform", "translate(" + (width/2 + margin.left) + "," + (height/2 + margin.top) + ")");

////////////////////////////////////////////////////////////
/////////////// Create the gradient fills //////////////////
////////////////////////////////////////////////////////////

//Function to create the id for each chord gradient
function getGradID(d){ return "linkGrad-" + d.source.index + "-" + d.target.index; }

//Create the gradients definitions for each chord
var grads = svg.append("defs").selectAll("linearGradient")
	.data(chord.chords())
   .enter().append("linearGradient")
	.attr("id", getGradID)
	.attr("gradientUnits", "userSpaceOnUse")
	.attr("x1", function(d,i) { return innerRadius * Math.cos((d.source.endAngle-d.source.startAngle)/2 + d.source.startAngle - Math.PI/2); })
	.attr("y1", function(d,i) { return innerRadius * Math.sin((d.source.endAngle-d.source.startAngle)/2 + d.source.startAngle - Math.PI/2); })
	.attr("x2", function(d,i) { return innerRadius * Math.cos((d.target.endAngle-d.target.startAngle)/2 + d.target.startAngle - Math.PI/2); })
	.attr("y2", function(d,i) { return innerRadius * Math.sin((d.target.endAngle-d.target.startAngle)/2 + d.target.startAngle - Math.PI/2); })

//Set the starting color (at 0%)
grads.append("stop")
	.attr("offset", "0%")
	.attr("stop-color", function(d){ return colors(d.source.index); });

//Set the ending color (at 100%)
grads.append("stop")
	.attr("offset", "100%")
	.attr("stop-color", function(d){ return colors(d.target.index); });
		
////////////////////////////////////////////////////////////
////////////////// Draw outer Arcs /////////////////////////
////////////////////////////////////////////////////////////

var outerArcs = svg.selectAll("g.group")
	.data(chord.groups)
	.enter().append("g")
	.attr("class", "group")

	.on("mouseover", mouseoverArc)
    //.on("mouseout", mouseoutChord)

	//.on("mouseover", fade(.1))
	.on("mouseout", fade(opacityDefault));

outerArcs.append("path")
	.style("fill", function(d) { return colors(d.index); })
	.attr("d", arc)
	.each(function(d,i) {
		//Search pattern for everything between the start and the first capital L
		var firstArcSection = /(^.+?)L/; 	

		//Grab everything up to the first Line statement
		var newArc = firstArcSection.exec( d3.select(this).attr("d") )[1];
		//Replace all the comma's so that IE can handle it
		newArc = newArc.replace(/,/g , " ");
		
		//If the end angle lies beyond a quarter of a circle (90 degrees or pi/2) 
		//flip the end and start position
		if (d.endAngle > 90*Math.PI/180 & d.startAngle < 270*Math.PI/180) {
			var startLoc 	= /M(.*?)A/,		//Everything between the first capital M and first capital A
				middleLoc 	= /A(.*?)0 0 1/,	//Everything between the first capital A and 0 0 1
				endLoc 		= /0 0 1 (.*?)$/;	//Everything between the first 0 0 1 and the end of the string (denoted by $)
			//Flip the direction of the arc by switching the start en end point (and sweep flag)
			//of those elements that are below the horizontal line
			var newStart = endLoc.exec( newArc )[1];
			var newEnd = startLoc.exec( newArc )[1];
			var middleSec = middleLoc.exec( newArc )[1];
			
			//Build up the new arc notation, set the sweep-flag to 0
			newArc = "M" + newStart + "A" + middleSec + "0 0 0 " + newEnd;
		}//if
		
		//Create a new invisible arc that the text can flow along
		svg.append("path")
			.attr("class", "hiddenArcs")
			.attr("id", "arc"+i)
			.attr("d", newArc)
			.style("fill", "none");
	});

////////////////////////////////////////////////////////////
////////////////// Append Names ////////////////////////////
////////////////////////////////////////////////////////////

//Append the label names on the outside
//outerArcs.append("text")
//	.attr("class", "titles")
//	.attr("dy", function(d,i) { return (d.endAngle > 90*Math.PI/180 & d.startAngle < 270*Math.PI/180 ? 25 : -16); })
//  .append("textPath")
//	.attr("startOffset","50%")
//	.style("text-anchor","middle")
//	.attr("xlink:href",function(d,i){return "#arc"+i;})
//	.text(function(d,i){ return Names[i]; });
	
outerArcs.append("text")
  .each(function(d) { d.angle = (d.startAngle + d.endAngle) / 2; })
  .attr("dy", ".35em")
  .attr("class", "titles")
  .attr("text-anchor", function(d) { return d.angle > Math.PI ? "end" : null; })
  .attr("transform", function(d) {
		return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")"
		+ "translate(" + (outerRadius + 10) + ")"
		+ (d.angle > Math.PI ? "rotate(180)" : "");
  })
  .text(function(d,i) { return Names[i]; });	
	
	
	
////////////////////////////////////////////////////////////
////////////////// Draw inner chords ///////////////////////
////////////////////////////////////////////////////////////
  
svg.selectAll("path.chord")
	.data(chord.chords)
	.enter().append("path")
	.attr("class", "chord")
	.style("fill", function(d){ return "url(#" + getGradID(d) + ")"; })
	.style("opacity", opacityDefault)
	.attr("d", path)
	.on("mouseover", mouseoverChord)
	.on("mouseout", mouseoutChord);

////////////////////////////////////////////////////////////
////////////////// Extra Functions /////////////////////////
////////////////////////////////////////////////////////////




//Returns an event handler for fading a given chord group.
function fade(opacity) {
  return function(d,i) {
    svg.selectAll("path.chord")
        .filter(function(d) { return d.source.index !== i && d.target.index !== i; })
		.transition()
        .style("opacity", opacity);
  };
}//fade

//Highlight hovered over chord
function mouseoverChord(d,i) {
  
	//Decrease opacity to all
	svg.selectAll("path.chord")
		.transition()
		.style("opacity", 0.1);
	//Show hovered over chord with full opacity
	d3.select(this)
		.transition()
        .style("opacity", 1);
  
	//Define and show the tooltip over the mouse location
	$(this).popover({
		placement: 'auto top',
		container: 'body',
		mouseOffset: 10,
		followMouse: true,
		trigger: 'hover',
		html : true,
		content: function() {
			otherAuthor =  Names[d.target.index];
			if(Names[d.source.index] == otherAuthor){
				otherAuthor = "others";
			}
			if(d.source.value>1){
				return "<p style='font-size: 11px; text-align: center;'><span style='font-weight:900'>" + Names[d.source.index] + 
				"</span> has <span style='font-weight:900'>" + d.source.value + "</span> joint publications with " +  
				"<span style='font-weight:900'>" + otherAuthor+"</span></p>"; 
			}
			else{
				return "<p style='font-size: 11px; text-align: center;'><span style='font-weight:900'>" + Names[d.source.index] + 
					"</span> has <span style='font-weight:900'>" + d.source.value + "</span> joint publication with " +  
					"<span style='font-weight:900'>" + otherAuthor+"</span></p>";
			}
		}
	});
	$(this).popover('show');
}//mouseoverChord



	function mouseoverArc(d, i) {
                var value = matrix[d.index];

                //Decrease opacity to all
                svg.selectAll("path.chord")
                    .filter(function(d) {
                            return ((d.source.index !== i) && (d.target.index !== i));
                    })
                    .transition()

                    .style("opacity", 0.1);

                //Show hovered over chord with full opacity
                d3.select(this)

                    //.filter(self.fade(0.1))

                    .transition()
                    .style("opacity", 1);

                //console.dir(d);

                //Define and show the tooltip over the mouse location

                $(this).popover({

                    placement: 'auto top',
                    container: 'body',
                    mouseOffset: 10,
                    followMouse: true,
                    trigger: 'hover',
                    html : true,
                    content: (function() {
						if(numPapers[i]>1){
							return "<p style='font-size: 11px; text-align: center;'><span style='font-weight:900'>"+Names[d.index]+"</span> authored <span style='font-weight:900'>"+numPapers[i]+"</span> publications</p>";
						}else{
							return "<p style='font-size: 11px; text-align: center;'><span style='font-weight:900'>"+Names[d.index]+"</span> authored <span style='font-weight:900'>"+numPapers[i]+"</span> publication</p>";
						}	
						
                    }())
                });

                $(this).popover('show');
            }//mouseoverArc


//Bring all chords back to default opacity
function mouseoutChord(d) {
	//Hide the tooltip
	$('.popover').each(function() {
		$(this).remove();
	}); 
	//Set opacity back to default for all
	svg.selectAll("path.chord")
		.transition()
		.style("opacity", opacityDefault);
}//function mouseoutChord