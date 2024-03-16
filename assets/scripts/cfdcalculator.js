const reoutput = document.querySelector('.reoutput');
const yhoutput = document.querySelector('.yhoutput');
const bloutput = document.querySelector('.bloutput');
const noutput = document.querySelector('.noutput');
const floutput = document.querySelector('.floutput');
const mnoutput = document.querySelector('.mnoutput');
const tioutput = document.querySelector('.tioutput');
const lmoutput = document.querySelector('.lmoutput');
const tkeoutput = document.querySelector('.tkeoutput');
const tdoutput = document.querySelector('.tdoutput');
const nutoutput = document.querySelector('.nutoutput');
const sdroutput = document.querySelector('.sdroutput');
document.getElementById("cfdCalculatorForm").addEventListener('submit', cfdCalculatorFunction, false);
function cfdCalculatorFunction(event) {
    var gr = document.getElementById("gr").value;
    var density = document.getElementById("density").value;
    var viscosity = document.getElementById("viscosity").value;
    var velocity = document.getElementById("velocity").value;
    var length = document.getElementById("length").value;
    var yplus = document.getElementById("yplus").value;
    var re = ((density * velocity * length) / viscosity);
    var cf = Math.pow(((2 * Math.log10(re)) - 0.65), -2.3);
    var tw = (1 / 2) * density * Math.pow(velocity, 2) * cf;
    var ut = Math.sqrt(tw / density);
    var yp = (yplus * viscosity) / (ut * density);
    var yh = 2 * yp;
    reoutput.textContent = 'Reynolds Number=' + re.toFixed(8);
    yhoutput.textContent = 'First Mesh Layer Height=' + yh.toFixed(8);
    if (re <= 500000) {
        var bl = ((4.91 * length) / Math.sqrt(re));
    }
    else {
        var bl = ((0.38 * length) / Math.pow(re, (1 / 5)));
    }
    bloutput.textContent = 'Boundary Layer Height=' + bl.toFixed(8);
    if ((gr >= 1.01) && (gr <= 2)) {
        var k = yh;
        for (n = 0; n <= 99; n++) {
            k = gr * k;
            if (k >= bl) {
                break;
            }
        }
        var fl = k - (k / gr);
        var mn = gr * k;
        noutput.textContent = 'Number of Layers=' + n;
        floutput.textContent = 'Final Layer Thickness=' + fl.toFixed(8);
        mnoutput.textContent = 'Minimum Mesh Size=' + mn.toFixed(8);
    }
    else {
        noutput.textContent = 'Wrong Growth Ratio';
    }
    var cmu = 0.09;
    var ti = 0.055 * Math.pow(re, -0.041);
    var lm = 0.07 * length;
    var tke = (3 / 2) * Math.pow((velocity * ti), 2);
    var td = ((Math.pow(cmu, (3 / 4))) * (Math.pow(tke, (3 / 2)))) / lm;
    var nut = (cmu * (Math.pow(tke, 2))) / td;
    var sdr = ((Math.pow(cmu, (-1 / 4))) * (Math.pow(tke, (1 / 2)))) / lm;
    tioutput.textContent = 'Turbulence Intensity=' + ti.toFixed(8);
    lmoutput.textContent = 'Length Scale/Mixing Length=' + lm.toFixed(8);
    tkeoutput.textContent = 'Turbulent Kinetic Energy=' + tke.toFixed(8);
    tdoutput.textContent = 'Turbulent Dissipation=' + td.toFixed(8);
    nutoutput.textContent = 'Turbulent Viscosity=' + nut.toFixed(8);
    sdroutput.textContent = 'Specific Dissipation Rate=' + sdr.toFixed(8);
    event.preventDefault();
    return 0;
}