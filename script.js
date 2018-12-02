document.addEventListener('DOMContentLoaded', function() {
    var maxGradient = document.getElementById('max-grad')
    var minGradient = document.getElementById('min-grad')
    var averageGradient = document.getElementById('avg-grad')
    var units = document.getElementById('units')

    var submit = document.getElementById('submit')
    var outputArea = document.getElementById('output')
    var answerArea = document.getElementById('answer')

    submit.onclick = function() {
        console.log(maxGradient.value, minGradient.value, averageGradient.value, units.value)
        if (maxGradient.value.length > 0 && minGradient.value.length > 0 && averageGradient.value.length > 0 && units.value.length > 0) {
            var absoluteUncertainty = ((parseFloat(maxGradient.value) - parseFloat(minGradient.value))/2).toPrecision(4)
            var percentageUncertainty = ((absoluteUncertainty/parseFloat(averageGradient.value))*100).toPrecision(4)
            
            var output = `
                M<sub>avg</sub> = Average Gradient,<br>
                M<sub>max</sub> = Maximum Gradient,<br> 
                M<sub>min</sub> = Minimum Gradient<br>
                <br>
                M<sub>avg</sub> = ${averageGradient.value} ${units.value},<br>
                M<sub>max</sub> = ${maxGradient.value}  ${units.value},<br> 
                M<sub>min</sub> = ${minGradient.value}  ${units.value}<br>
                <br>
                <b>Gradient Uncertainty</b>
                <br>
                = (M<sub>max</sub> - M<sub>min</sub>)/2 <br>
                = (${maxGradient.value} - ${minGradient.value})/2 <br>
                = ${absoluteUncertainty} ${units.value}<br>
                <br>
                <b>Percentage Uncertainty</b>
                <br>
                = (Gradient Uncertainty / M<sub>avg</sub>) * 100 <br>
                = (${absoluteUncertainty} / ${averageGradient.value}) * 100<br>
                = ${percentageUncertainty}%<br>
            `

            copyOutput = `
                M_avg= Average Gradient,
                M_max = Maximum Gradient,
                M_min = Minimum Gradient
                
                M_avg = ${averageGradient.value} ${units.value},
                M_max = ${maxGradient.value}  ${units.value},
                M_min = ${minGradient.value}  ${units.value}
                
                Gradient Uncertainty
                
                = (M_max - M_min)/2
                = (${maxGradient.value} - ${minGradient.value})/2
                = ${absoluteUncertainty} ${units.value}
                
                Percentage Uncertainty
                
                = (Gradient Uncertainty / M_avg) * 100
                = (${absoluteUncertainty} / ${averageGradient.value}) x 100
                = ${percentageUncertainty}%
            `

            outputArea.style.display = 'block'
            answerArea.innerHTML = output
            answerArea.style.padding = '20px 0'

            var copyButton = document.getElementById('copy-button')
            copyButton.onclick = () => {
                const el = document.createElement('textarea');
                el.value = copyOutput;
                document.body.appendChild(el);
                el.select();
                document.execCommand('copy');
                document.body.removeChild(el);            
            }
        } else {
            window.alert('Please fill in all fields!')
        }
    }
})