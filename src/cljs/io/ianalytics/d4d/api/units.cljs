(ns io.ianalytics.d4d.api.units
  "Associating units to systema quantities, and converting from and to SI units.")

;;; units table from https://gitlab.iab.berlin/julia/Units
(def unitstable
  {
   ;; value[UNIT] =    FACTOR * (value[SI]  +   OFFSET)                 DIMENSION
   ""                  [1.                      0.                      "Untransformed"]
   "-"                 [1.                      0.                      "Dimensionless"]
   "%"                 [1e2                     0.                      "Dimensionless"]
   "ppm"               [1e6                     0.                      "Dimensionless"]

   "dB"                [1.                      0.                      "Logarithmic"]

   "kmol"              [1.                      0.                      "AmountOfSubstance"]
   "mol"               [1e3                     0.                      "AmountOfSubstance"]

   "A"                 [1.                      0.                      "ElectricCurrent"]
   "mA"                [1e3                     0.                      "ElectricCurrent"]
   "kA"                [1e-3                    0.                      "ElectricCurrent"]
   "MA"                [1e-6                    0.                      "ElectricCurrent"]

   "kg"                [1.                      0.                      "Mass"]
   "g"                 [1e3                     0.                      "Mass"]
   "t"                 [1e-3                    0.                      "Mass"]

   "kgm2"              [1.                      0.                      "Inertia"]

   "K"                 [1.                      0.                      "Temperature"]
   "C"                 [1.                      -273.15                 "Temperature"]
   "F"                 [1.8                     -255.37222222222223     "Temperature"]
   "R"                 [1.8                     0.                      "Temperature"]

   "s"                 [1.                      0.                      "Time"]
   "min"               [0.016666666666666666    0.                      "Time"]
   "h"                 [0.0002777777777777778   0.                      "Time"]
   "d"                 [1.1574074074074073e-5   0.                      "Time"]
   "w"                 [1.6534391534391535e-6   0.                      "Time"]
   "y"                 [3.1709791983764586e-8   0.                      "Time"]

   "m"                 [1.                      0.                      "Length"]
   "cm"                [1e2                     0.                      "Length"]
   "mm"                [1e3                     0.                      "Length"]
   "μm"                [1e6                     0.                      "Length"]                   ;; 'μ': Unicode U+03bc (category Ll: Letter, lowercase)
   "µm"                [1e6                     0.                      "Length"]                   ;; 'µ': Unicode U+00b5 (category Ll: Letter, lowercase)
   "km"                [1e-3                    0.                      "Length"]
   "in"                [39.37007874             0.                      "Length"]
   "yd"                [1.0936132983            0.                      "Length"]
   "ft"                [3.280839895013          0.                      "Length"]

   "m2"                [1.                      0.                      "Area"]
   "cm2"               [1e4                     0.                      "Area"]
   "mm2"               [1e6                     0.                      "Area"]
   "km2"               [1e-6                    0.                      "Area"]

   "m3"                [1.                      0.                      "Volume"]
   "cm3"               [1e6                     0.                      "Volume"]
   "mm3"               [1e9                     0.                      "Volume"]
   "km3"               [1e-9                    0.                      "Volume"]
   "l"                 [1000.                   0.                      "Volume"]

   "N"                 [1.                      0.                      "Force"]
   "kN"                [1e-3                    0.                      "Force"]
   "MN"                [1e-6                    0.                      "Force"]

   "Nm"                [1.                      0.                      "Torque"]

   "kg/s"              [1.                      0.                      "MassFlow"]
   "kg/h"              [3600.                   0.                      "MassFlow"]
   "t/h"               [3.6                     0.                      "MassFlow"]
   "t/d"               [86.4                    0.                      "MassFlow"]
   "t/a"               [31536.                  0.                      "MassFlow"]
   "lb/s"              [2.2046226               0.                      "MassFlow"]
   "lb/h"              [7.936641e3              0.                      "MassFlow"]
   "Nm3/h(air)"        [2784.06463371229        0.                      "MassFlow"]

   "Nm3/s"             [1.                      0.                      "StdVolumeFlow"]
   "Nm3/h"             [3600.                   0.                      "StdVolumeFlow"]
   "kNm3/h"            [3.6                     0.                      "StdVolumeFlow"]
   "SCFM60"            [2118.868524208073       0.                      "StdVolumeFlow"]
   "SCFM70"            [2118.868524208073       0.                      "StdVolumeFlow"]
   "MSCFD60"           [3.051170674859625       0.                      "StdVolumeFlow"]
   "MSCFD70"           [3.051170674859625       0.                      "StdVolumeFlow"]
   "SCFH70"            [1.271328e5              0.                      "StdVolumeFlow"]

   "m3/s"              [1.                      0.                      "VolumeFlow"]
   "m3/h"              [3600.                   0.                      "VolumeFlow"]
   "l/min"             [6e4                     0.                      "VolumeFlow"]
   "l/h"               [3.6e6                   0.                      "VolumeFlow"]
   "ft/min"            [2118.8                  0.                      "VolumeFlow"]

   "Pa"                [1.                      0.                      "Pressure"]
   "hPa"               [1e-2                    0.                      "Pressure"]
   "kPa"               [1e-3                    0.                      "Pressure"]
   "MPa"               [1e-6                    0.                      "Pressure"]
   "bar"               [1e-5                    0.                      "Pressure"]
   "bara"              [1e-5                    0.                      "Pressure"]
   "barg"              [1e-5                    -101325.                "Pressure"]
   "mbar"              [1e-2                    0.                      "Pressure"]
   "mbara"             [1e-2                    0.                      "Pressure"]
   "mbarg"             [1e-2                    -101325.                "Pressure"]
   "psi"               [1.45037738e-4           0.                      "Pressure"]
   "kg/cm2"            [1.019716213e-5          0.                      "Pressure"]
   "lb/ft2"            [0.020885434234          0.                      "Pressure"]
   "lb/in2"            [1.45037738e-4           0.                      "Pressure"]

   "kg/m3"             [1.                      0.                      "Density"]
   "g/cm3"             [1e-3                    0.                      "Density"]
   "g/m3"              [1e3                     0.                      "Density"]

   "kg/Nm3"            [1.                      0.                      "StdDensity"]
   "g/Ncm3"            [1e-3                    0.                      "StdDensity"]

   "m3/kg"             [1.                      0.                      "SpecificVolume"]

   "W"                 [1.                      0.                      "Power"]
   "kW"                [1e-3                    0.                      "Power"]
   "MW"                [1e-6                    0.                      "Power"]
   "hp"                [0.0013410220895991106   0.                      "Power"]

   "J"                 [1.                      0.                      "Energy"]
   "kJ"                [1e-3                    0.                      "Energy"]
   "MJ"                [1e-6                    0.                      "Energy"]
   "kWh"               [2.777777777777778e-7    0.                      "Energy"]

   "J/kg"              [1.                      0.                      "SpecificEnergy"]
   "kJ/kg"             [1e-3                    0.                      "SpecificEnergy"]

   "J/(kg*K)"          [1.                      0.                      "SpecificHeatCapacity"]
   "kJ/(kg*K)"         [1e-3                    0.                      "SpecificHeatCapacity"]

   "rad"               [1.                      0.                      "Angle"]
   "deg"               [57.29577951308232       0.                      "Angle"]

   "Hz"                [1.                      0.                      "Frequency"]
   "1/s"               [1.                      0.                      "Frequency"]
   "rpm"               [60.                     0.                      "Frequency"]
   "krpm"              [0.06                    0.                      "Frequency"]
   "1/min"             [60.                     0.                      "Frequency"]

   "m/s"               [1.                      0.                      "Velocity"]
   "mm/s"              [1e3                     0.                      "Velocity"]

   "m/s2"              [1.                      0.                      "Acceleration"]
   "mm/s2"             [1e3                     0.                      "Acceleration"]

   "Pa*s"              [1.                      0.                      "Viscosity"]
   "μPa*s"             [1e6                     0.                      "Viscosity"]

   "kg/kmol"           [1.                      0.                      "MolarMass"]

   "V"                 [1.                      0.                      "Voltage"]
   "mV"                [1e3                     0.                      "Voltage"]
   "kV"                [1e-3                    0.                      "Voltage"]
   "MV"                [1e-6                    0.                      "Voltage"]

   "A*s"               [1.                      0.                      "ElectricCharge"]})

(defn transform [values-in-si target-unit]
  (let [[factor offset & _] (unitstable target-unit)]
    (clj->js (map (fn [value] (if value (* factor (+ value offset)) nil)) values-in-si))))

(defn dimension [unit]
  (clj->js (last (unitstable unit))))

(def display-unit-map
  {"Temperature"                {:short "K"     :long "Kelvin"}

   "Pressure"                   {:short "bar"   :long "Bar"}
   "DifferentialPressure"       {:short "bar"   :long "Bar"}

   "Length"                     {:short "m"     :long "Meters"}
   "Diameter"                   {:short "m"     :long "Meters"}
   "Displacement"               {:short "m"     :long "Meters"}
   "Velocity"                   {:short "m/s"   :long "Meters per second"}
   "Acceleration"               {:short "m/s²"  :long "Meters per second per second"}
   "MassFlow"                   {:short "kg/s"  :long "Kilograms per second"}
   "VolumeFlow"                 {:short "m³/s"  :long "Cubic meters per second"}
   "Density"                    {:short "kg/m³" :long "kilograms per cubic meter"}
   "MolarFraction"              {:short "-"     :long "Molar fraction"}
   "ElectricCurrent"            {:short "A"     :long "Amperes"}
   "Speed"                      {:short "m/s"   :long "Meters per second"}
   "pH"                         {:short "pH"    :long "potential Hydrogen"}
   "Status"                     {:short "-"     :long "Status"}
   "Level"                      {:short "-"     :long "Level"}
   "Position"                   {:short "%"     :long "Position"}
   "Unknown"                    {:short "-"     :long ""}})
