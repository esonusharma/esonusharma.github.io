import streamlit as st
import numpy as np
import roboticstoolbox
from roboticstoolbox import DHRobot, RevoluteDH

def manipulator_calculator():
    """
    This function performs CFD calculations based on user input.
    """
    with st.sidebar:
        # Define the two-link robot using Denavit-Hartenberg parameters
        link1 = RevoluteDH(d=0, a=1, alpha=0, m=1, r=[0.5, 0, 0], I=np.diag([0.1, 0.1, 0.1]))
        link2 = RevoluteDH(d=0, a=1, alpha=0, m=1, r=[0.5, 0, 0], I=np.diag([0.1, 0.1, 0.1]))
        twolink = DHRobot([link1, link2], name='two-link')

        # Streamlit interface
        st.title("Two-Link Robot Inverse Dynamics using RNEA")

        q1 = st.slider("Joint 1 Position (degrees)", min_value=0.0, max_value=180.0, value=0.0)
        q2 = st.slider("Joint 2 Position (degrees)", min_value=0.0, max_value=180.0, value=0.0)

        qd1 = st.slider("Joint 1 Velocity (rad/s)", min_value=0.0, max_value=10.0, value=0.0)
        qd2 = st.slider("Joint 2 Velocity (rad/s)", min_value=0.0, max_value=10.0, value=0.0)

        qdd1 = st.slider("Joint 1 Acceleration (rad/s^2)", min_value=0.0, max_value=10.0, value=0.0)
        qdd2 = st.slider("Joint 2 Acceleration (rad/s^2)", min_value=0.0, max_value=10.0, value=0.0)

    # Convert positions from degrees to radians before using them
    q = [np.deg2rad(q1), np.deg2rad(q2)]
    qd = [qd1, qd2]
    qdd = [qdd1, qdd2]

    if st.button('Compute Torques'):
        try:
            # Calculate the torques using the RNE algorithm
            tau = twolink.rne(q, qd, qdd)
            st.write("Computed Joint Torques:")
            st.write(f"Tau = {tau}")
        except Exception as e:
            st.error(f"An error occurred: {str(e)}")

# Main app
manipulator_calculator()
st.text('This code/calculator/service/product is subject to the terms of the MIT License')