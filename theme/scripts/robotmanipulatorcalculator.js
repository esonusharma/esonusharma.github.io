function calculate() {
    // Read values from form
    const length1 = parseFloat(document.getElementById('length1').value);
    const length2 = parseFloat(document.getElementById('length2').value);
    const theta1 = parseFloat(document.getElementById('theta1').value) * Math.PI / 180; // Convert to radians
    const theta2 = parseFloat(document.getElementById('theta2').value) * Math.PI / 180; // Convert to radians

    // Forward Kinematics
    const x = length1 * Math.cos(theta1) + length2 * Math.cos(theta1 + theta2);
    const y = length1 * Math.sin(theta1) + length2 * Math.sin(theta1 + theta2);

    // Inverse Kinematics
    const c2 = (Math.pow(x, 2) + Math.pow(y, 2) - Math.pow(length1, 2) - Math.pow(length2, 2)) / (2 * length1 * length2);
    const s2 = Math.sqrt(1 - Math.pow(c2, 2)); // Assuming elbow up configuration
    
    const theta2_inv = Math.atan2(s2, c2);
    const theta1_inv = Math.atan2(y, x) - Math.atan2(length2 * s2, length1 + length2 * c2);

    // Torques (assuming some forces Fx, Fy at the end effector, set them as needed)
    const Fx = 10; // Example forces
    const Fy = 5;
    
    const torque1 = (length1 * Math.cos(theta1) * Fy + length1 * Math.sin(theta1) * Fx);
    const torque2 = length2 * (Math.cos(theta1 + theta2) * Fy + Math.sin(theta1 + theta2) * Fx);

    // Output results
    const results = `Forward Kinematics: (x, y) = (${x.toFixed(2)}, ${y.toFixed(2)})\n` +
                    `Inverse Kinematics: (theta1, theta2) = (${(theta1_inv * 180 / Math.PI).toFixed(2)}°, ${(theta2_inv * 180 / Math.PI).toFixed(2)}°)\n` +
                    `Torques: torque1 = ${torque1.toFixed(2)}, torque2 = ${torque2.toFixed(2)}`;

    document.getElementById('results').textContent = results;
}