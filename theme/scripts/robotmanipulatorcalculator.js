function tw_calc() {
    // Collect user input data
    var W2 = parseFloat(document.getElementById("W2Text").value);
    var W4 = parseFloat(document.getElementById("W4Text").value);
    var W6 = parseFloat(document.getElementById("W6Text").value);
    var W7 = parseFloat(document.getElementById("W7Text").value);
    var Motor1 = parseFloat(document.getElementById("Motor1Text").value);
    var Motor2 = parseFloat(document.getElementById("Motor2Text").value);
    var Motor3 = parseFloat(document.getElementById("Motor3Text").value);
    var L1 = parseFloat(document.getElementById("L1Text").value);
    var L2 = parseFloat(document.getElementById("L2Text").value);
    var L3 = parseFloat(document.getElementById("L3Text").value);
    var V0 = parseFloat(document.getElementById("V0Text").value);
    var V1 = parseFloat(document.getElementById("V1Text").value);
    var V2 = parseFloat(document.getElementById("V2Text").value);
    var V3 = parseFloat(document.getElementById("V3Text").value);
    var eff1 = parseFloat(document.getElementById("eff1Text").value) * 0.01;
    var eff2 = parseFloat(document.getElementById("eff2Text").value) * 0.01;
    var eff3 = parseFloat(document.getElementById("eff3Text").value) * 0.01;
    var clicks = parseFloat(document.getElementById("clicksText").value);

    // Convert to English units if needed
    var lengthUnit = document.getElementById("dimLengthSelect").value;
    if (lengthUnit == "met") {
        L1 *= 39.3700787; // Meters to inches
        L2 *= 39.3700787; // Meters to inches
        L3 *= 39.3700787; // Meters to inches
    }
    
    var weightUnit = document.getElementById("dimWeightSelect").value;
    if (weightUnit == "met") {
        W2 *= 2.20462262; // Kg to pounds
        W4 *= 2.20462262; // Kg to pounds
        W6 *= 2.20462262; // Kg to pounds
        W7 *= 2.20462262; // Kg to pounds
    }
    
    var motorWeightUnit = document.getElementById("dimMotWeightSelect").value;
    if (motorWeightUnit == "met") {
        Motor1 *= 2.20462262; // Kg to pounds
        Motor2 *= 2.204622
        Motor3 *= 2.20462262; // Kg to pounds
    }

    var total_weight = Motor1 + W2 + Motor2 + W4 + Motor3 + W6 + W7;
    var encoder_acc = 2 * Math.PI * (L1 + L2 + L3) / clicks;

    // CALCULATING FOR WRIST MOTOR 3
    var M3 = 0.5 * L3 * W6 + L3 * W7;
    var Vel3 = ((Math.pow(0.5 * L3, 2) * W6) + (Math.pow(L3, 2) * W7)) * V3 * Math.PI / 180;
    M3 = (M3 + Vel3) / eff3;

    // CALCULATING FOR JOINT MOTOR 2
    var M2j2 = 0.5 * L2 * W4;
    var M2j3 = L2 * Motor3;
    var M2w6 = (L2 + 0.5 * L3) * W6;
    var M2w7 = (L2 + L3) * W7;
    var M2 = M2j2 + M2j3 + M2w6 + M2w7;
    var Vel2 = (Math.pow(0.5 * L2, 2) * W4) + (Math.pow(L2, 2) * Motor3) + (Math.pow(L2 + 0.5 * L3, 2) * W6) + (Math.pow(L2 + L3, 2) * W7);
    Vel2 = Vel2 * V2 * Math.PI / 180;
    M2 = (M2 + Vel2) / eff2;

    // CALCULATING FOR BASE MOTOR1
    var M1w3 = L1 * Motor2;
    var M1w5 = (L1 + L2) * Motor3;
    var M1w7 = (L1 + L2 + L3) * W7;
    var M1w2 = 0.5 * L1 * W2;
    var M1w4 = (L1 + 0.5 * L2) * W4;
    var M1w6 = (L1 + L2 + 0.5 * L3) * W6;
    var M1 = (M1w2 + M1w3 + M1w4 + M1w5 + M1w6 + M1w7) / eff1;
    var Vel1 = (Math.pow(0.5 * L1, 2) * W2) + (Math.pow(L1, 2) * Motor2) + (Math.pow(L1 + 0.5 * L2, 2) * W4) + (Math.pow(L1 + L2, 2) * Motor3) + (Math.pow(L1 + L2 + 0.5 * L3, 2) * W6) + (Math.pow(L1 + L2 + L3, 2) * W7);
    Vel1 = Vel1 * Math.PI / 180;
    M1 = M1 + (Vel1 * V1);

    // CALCULATING FOR BASE MOTOR0
    var M0 = Vel1 * V0;

    // Convert total weight to metric if needed
    var totalWeightUnit = document.getElementById("dimTotWeightSelect").value;
    if (totalWeightUnit == "met") {
        total_weight *= 0.45359237; // Pounds to kg
    }

    // Convert torques to metric if needed
    var torqueUnit = document.getElementById("dimTorSelect").value;
    if (torqueUnit == "met") {
        M0 *= 0.112984829; // Pound-force inch to Newton meters
        M1 *= 0.112984829; // Pound-force inch to Newton meters
        M2 *= 0.112984829; // Pound-force inch to Newton meters
        M3 *= 0.112984829; // Pound-force inch to Newton meters
    }

    // Output the results
    document.getElementById("M0Output").value = M0.toPrecision(3);
    document.getElementById("M1Output").value = M1.toPrecision(3);
    document.getElementById("M2Output").value = M2.toPrecision(3);
    document.getElementById("M3Output").value = M3.toPrecision(3);
    document.getElementById("WeightOutput").value = total_weight.toPrecision(3);
    document.getElementById("EncoderOutput").value = encoder_acc.toPrecision(3);
}