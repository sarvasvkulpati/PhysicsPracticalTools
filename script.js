

function calculate(){
    var maxGradient = document.getElementsByName("max-gradient")[0].value;
    var minGradient = document.getElementsByName("min-gradient")[0].value;
    var averageGradient = document.getElementsByName("average-gradient")[0].value;
    var units = document.getElementsByName("units")[0].value;

    if(maxGradient && minGradient && averageGradient && units){
        var absoluteUncertainty = ((parseFloat(maxGradient) - parseFloat(minGradient))/2).toPrecision(4)
        var percentageUncertainty = ((absoluteUncertainty/parseFloat(averageGradient))*100).toPrecision(4)
        
        

        var output = `
        M<sub>avg</sub> = gradient,<br>
        M<sub>max</sub> = maximum gradient,<br> 
        M<sub>min</sub> = minimum gradient<br>
        <br>
        M<sub>avg</sub> = ${averageGradient} ${units},<br>
        M<sub>max</sub> = ${maxGradient}  ${units},<br> 
        M<sub>min</sub> = ${minGradient}  ${units}<br>
        <br>
        <br>
        <b>Gradient Uncertainty</b><br>
        = (M<sub>max</sub> - M<sub>min</sub>)/2 <br>
        = (${maxGradient} - ${minGradient})/2 <br>
        = ${absoluteUncertainty} ${units}<br>
        <br>
        <b>Percentage Uncertainty</b><br>
        = (Gradient Uncertainty / M<sub>avg</sub>) * 100 <br>
        = (${absoluteUncertainty} / ${averageGradient}) * 100<br>
        = ${percentageUncertainty}%<br>
    
       `
        
        
        document.getElementById("output").innerHTML = output
    } else {
        alert("Please fill in all fields")
    }
    
}
