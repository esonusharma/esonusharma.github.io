Title: CFD Calculator
Summary: CFD Calculator
Slug: cfdcalculator
Status: published

<div class="w3-container w3-round w3-padding">
    <h3>Input</h3>
    <br>
    <br>
    <form id="cfdCalculatorForm" class="w3-container">
        <input type="number" id="gr" required="required" step="any" placeholder="Desired Growth Ratio (Between 1.01 and 2)" class="w3-input">
        <br>
        <br>
        <input type="number" id="density" required="required" step="any" placeholder="Mass Density" class="w3-input">
        <br>
        <br>
        <input type="number" id="viscosity" required="required" step="any" placeholder="Dynamic Viscosity" class="w3-input">
        <br>
        <br>
        <input type="number" id="velocity" required="required" step="any" placeholder="Free Stream Velocity/Inlet Velocity" class="w3-input">
        <br>
        <br>
        <input type="number" id="length" required="required" step="any" placeholder="Characteristic Length/Hydraulic Diameter" class="w3-input">
        <br>
        <br>
        <input type="number" id="yplus" required="required" step="any" placeholder="Desired y+" class="w3-input">
        <br>
        <br>
        <button class="submit">Calculate</button>
        <br>
        <br>
    </form>
</div>
<br>
<br>
<div class="w3-container w3-round w3-padding">
    <h3>Output</h3>
    <br>
    <br>
    <div class="w3-container">
        <div class="reoutput"></div>
        <br>
        <div class="yhoutput"></div>
        <br>
        <div class="bloutput"></div>
        <br>
        <div class="noutput"></div>
        <br>
        <div class="floutput"></div>
        <br>
        <div class="mnoutput"></div>
        <br>
        <div class="tioutput"></div>
        <br>
        <div class="lmoutput"></div>
        <br>
        <div class="tkeoutput"></div>
        <br>
        <div class="tdoutput"></div>
        <br>
        <div class="nutoutput"></div>
        <br>
        <div class="sdroutput"></div>
        <br>
        <br>
    </div>
</div>
<script src="/theme/scripts/cfdcalculator.js"></script>