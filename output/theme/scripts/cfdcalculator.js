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
let gr;
let density;
let viscosity;
let velocity;
let length;
let yplus;
let re;
let cf;
let tw;
let ut;
let yp;
let yh;
let bl;
let k;
let fl;
let mn;
let cmu;
let ti;
let lm;
let tke;
let td;
let nut;
let sdr;
document.getElementById("cfdCalculatorForm").addEventListener('submit', cfdCalculatorFunction, false);
function cfdCalculatorFunction(event) {
    gr = document.getElementById("gr").value;
    density = document.getElementById("density").value;
    viscosity = document.getElementById("viscosity").value;
    velocity = document.getElementById("velocity").value;
    length = document.getElementById("length").value;
    yplus = document.getElementById("yplus").value;
    re = ((density * velocity * length) / viscosity);
    cf = Math.pow(((2 * Math.log10(re)) - 0.65), -2.3);
    tw = (1 / 2) * density * Math.pow(velocity, 2) * cf;
    ut = Math.sqrt(tw / density);
    yp = (yplus * viscosity) / (ut * density);
    yh = 2 * yp;
    reoutput.textContent = 'Reynolds Number=' + re.toFixed(8);
    yhoutput.textContent = 'First Mesh Layer Height=' + yh.toFixed(8);
    if (re <= 500000) {
        bl = ((4.91 * length) / Math.sqrt(re));
    }
    else {
        bl = ((0.38 * length) / Math.pow(re, (1 / 5)));
    }
    bloutput.textContent = 'Boundary Layer Height=' + bl.toFixed(8);
    if ((gr >= 1.01) && (gr <= 2)) {
        k = yh;
        for (n = 0; n <= 99; n++) {
            k = gr * k;
            if (k >= bl) {
                break;
            }
        }
        fl = k - (k / gr);
        mn = gr * k;
        noutput.textContent = 'Number of Layers=' + n;
        floutput.textContent = 'Final Layer Thickness=' + fl.toFixed(8);
        mnoutput.textContent = 'Minimum Mesh Size=' + mn.toFixed(8);
    }
    else {
        noutput.textContent = 'Wrong Growth Ratio';
    }
    cmu = 0.09;
    ti = 0.055 * Math.pow(re, -0.041);
    lm = 0.07 * length;
    tke = (3 / 2) * Math.pow((velocity * ti), 2);
    td = ((Math.pow(cmu, (3 / 4))) * (Math.pow(tke, (3 / 2)))) / lm;
    nut = (cmu * (Math.pow(tke, 2))) / td;
    sdr = ((Math.pow(cmu, (-1 / 4))) * (Math.pow(tke, (1 / 2)))) / lm;
    tioutput.textContent = 'Turbulence Intensity=' + ti.toFixed(8);
    lmoutput.textContent = 'Length Scale/Mixing Length=' + lm.toFixed(8);
    tkeoutput.textContent = 'Turbulent Kinetic Energy=' + tke.toFixed(8);
    tdoutput.textContent = 'Turbulent Dissipation=' + td.toFixed(8);
    nutoutput.textContent = 'Turbulent Viscosity=' + nut.toFixed(8);
    sdroutput.textContent = 'Specific Dissipation Rate=' + sdr.toFixed(8);
    event.preventDefault();
    return 0;
}