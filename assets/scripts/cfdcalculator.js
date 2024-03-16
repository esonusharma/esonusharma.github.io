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
    let gr = document.getElementById("gr").value;
    let density = document.getElementById("density").value;
    let viscosity = document.getElementById("viscosity").value;
    let velocity = document.getElementById("velocity").value;
    let length = document.getElementById("length").value;
    let yplus = document.getElementById("yplus").value;
    let re = ((density * velocity * length) / viscosity);
    let cf = Math.pow(((2 * Math.log10(re)) - 0.65), -2.3);
    let tw = (1 / 2) * density * Math.pow(velocity, 2) * cf;
    let ut = Math.sqrt(tw / density);
    let yp = (yplus * viscosity) / (ut * density);
    let yh = 2 * yp;
    reoutput.textContent = 'Reynolds Number=' + re.toFixed(8);
    yhoutput.textContent = 'First Mesh Layer Height=' + yh.toFixed(8);
    if (re <= 500000) {
        let bl = ((4.91 * length) / Math.sqrt(re));
    }
    else {
        let bl = ((0.38 * length) / Math.pow(re, (1 / 5)));
    }
    bloutput.textContent = 'Boundary Layer Height=' + bl.toFixed(8);
    if ((gr >= 1.01) && (gr <= 2)) {
        let k = yh;
        for (n = 0; n <= 99; n++) {
            k = gr * k;
            if (k >= bl) {
                break;
            }
        }
        let fl = k - (k / gr);
        let mn = gr * k;
        noutput.textContent = 'Number of Layers=' + n;
        floutput.textContent = 'Final Layer Thickness=' + fl.toFixed(8);
        mnoutput.textContent = 'Minimum Mesh Size=' + mn.toFixed(8);
    }
    else {
        noutput.textContent = 'Wrong Growth Ratio';
    }
    let cmu = 0.09;
    let ti = 0.055 * Math.pow(re, -0.041);
    let lm = 0.07 * length;
    let tke = (3 / 2) * Math.pow((velocity * ti), 2);
    let td = ((Math.pow(cmu, (3 / 4))) * (Math.pow(tke, (3 / 2)))) / lm;
    let nut = (cmu * (Math.pow(tke, 2))) / td;
    let sdr = ((Math.pow(cmu, (-1 / 4))) * (Math.pow(tke, (1 / 2)))) / lm;
    tioutput.textContent = 'Turbulence Intensity=' + ti.toFixed(8);
    lmoutput.textContent = 'Length Scale/Mixing Length=' + lm.toFixed(8);
    tkeoutput.textContent = 'Turbulent Kinetic Energy=' + tke.toFixed(8);
    tdoutput.textContent = 'Turbulent Dissipation=' + td.toFixed(8);
    nutoutput.textContent = 'Turbulent Viscosity=' + nut.toFixed(8);
    sdroutput.textContent = 'Specific Dissipation Rate=' + sdr.toFixed(8);
    event.preventDefault();
    return 0;
}