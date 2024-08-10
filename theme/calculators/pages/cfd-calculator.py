import streamlit as st
import numpy as np

def cfd_calculator():
    """
    This function performs CFD calculations based on user input.
    """
    with st.sidebar:
        st.title("CFD Calculator")
        # Get user input
        st.subheader("Enter the following parameters:")
        gr = st.number_input("Growth Ratio (GR)", min_value=1.0, max_value=2.0, step=0.01)
        density = st.number_input("Density (rho)", min_value=0.1)
        viscosity = st.number_input("Viscosity (mu)", min_value=0.0000001)
        velocity = st.number_input("Velocity (u)", min_value=0.1)
        length = st.number_input("Length (L)", min_value=0.00001)
        yplus = st.number_input("Y Plus (y+)", min_value=1)
        # Perform calculations
        re = density * velocity * length / viscosity
        cf = (2 * np.log10(re) - 0.65)**(-2.3)
        tw = 0.5 * density * velocity**2 * cf
        ut = np.sqrt(tw / density)
        yp = (yplus * viscosity) / (ut * density)
        yh = 2 * yp
        # Boundary Layer Height calculation
        if re <= 500000:
            bl = 4.91 * length / np.sqrt(re)
        else:
            bl = 0.38 * length / re**(1/5)

        # Check for valid growth ratio and perform calculations if applicable
        if 1.0 <= gr <= 2.0:
            k = yh
            for _ in range(100):  # Limit iterations for efficiency
                k *= gr
                if k >= bl:
                    break
            fl = k - k / gr
            mn = gr * k
            n = _ + 1  # Number of iterations is the number of layers
        else:
            n = None
            fl = None
            mn = None
            st.error("Wrong Growth Ratio")

        # Other calculations (assuming constant values for simplicity)
        cmu = 0.09
        ti = 0.055 * re**(-0.041)
        lm = 0.07 * length
        tke = (3 / 2) * ((velocity * ti)**2)
        td = ((cmu**(3 / 4)) * (tke**(3 / 2))) / lm
        nut = (cmu * (tke**2)) / td
        sdr = ((cmu**(-1 / 4)) * (tke**(1 / 2))) / lm
  
    # Display results
    st.subheader("Results:")
    st.metric("Reynolds Number (Re)", f"{re:.8f}")
    st.metric("First Mesh Layer Height (yh)", f"{yh:.8f}")
    st.metric("Boundary Layer Height (bl)", f"{bl:.8f}")
    if n is not None:
        st.metric("Number of Layers (n)", n)
        st.metric("Final Layer Thickness (fl)", f"{fl:.8f}")
        st.metric("Minimum Mesh Size (mn)", f"{mn:.8f}")
    st.metric("Turbulence Intensity (TI)", f"{ti:.8f}")
    st.metric("Length Scale/Mixing Length (lm)", f"{lm:.8f}")
    st.metric("Turbulent Kinetic Energy (TKE)", f"{tke:.8f}")
    st.metric("Turbulent Dissipation (td)", f"{td:.8f}")
    st.metric("Turbulent Viscosity (nut)", f"{nut:.8f}")
    st.metric("Specific Dissipation Rate (SDR)", f"{sdr:.8f}")

# Main app
st.set_page_config(layout="wide")
cfd_calculator()
st.text('This code/calculator/service/product is subject to the terms of the MIT License')