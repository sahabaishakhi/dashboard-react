export default Unitstable = {
  unitstable: {
    boolean: {
      values: ["-"],
      factors: ["1."],
      offsets: ["0."],
      printUnits: [null],
    },
    dimensionless: {
      values: ["-", "%"],
      factors: ["1.", "1e2"],
      offsets: ["0.                 ", "0.                 "],
      printUnits: [null, null],
    },
    amountofsubstance: {
      values: ["kmol", "mol"],
      factors: ["1.", "1e3"],
      offsets: ["0.                 ", "0.                 "],
      printUnits: [null, null],
    },
    electriccurrent: {
      values: ["A", "mA", "kA", "MA"],
      factors: ["1.", "1e3", "1e-3", "1e-6"],
      offsets: [
        "0.                 ",
        "0.                 ",
        "0.                 ",
        "0.                 ",
      ],
      printUnits: ["A", "mA", "kA", "MA"],
    },
    mass: {
      values: ["kg", "g", "t"],
      factors: ["1.", "1e3", "1e-3"],
      offsets: [
        "0.                 ",
        "0.                 ",
        "0.                 ",
      ],
      printUnits: [null, null, null],
    },
    inertia: {
      values: ["kgm2"],
      factors: ["1."],
      offsets: ["0.                 "],
      printUnits: ["kgm²"],
    },
    temperature: {
      values: ["K", "C", "F", "R"],
      factors: ["1.", "1.", "1.8", "1.8"],
      offsets: [
        "0.                 ",
        "-273.15            ",
        "-255.37222222222223",
        "0.                 ",
      ],
      printUnits: ["K", "°C", "°F", "R"],
    },
    temperaturediff: {
      values: ["K"],
      factors: ["1."],
      offsets: ["0."],
      printUnits: [null],
    },
    time: {
      values: ["s", "min", "h", "d", "w", "y"],
      factors: [
        "1.",
        "0.016666666666666666",
        "0.0002777777777777778",
        "1.1574074074074073e-5",
        "1.6534391534391535e-6",
        "3.1709791983764586e-8",
      ],
      offsets: [
        "0.                 ",
        "0.                 ",
        "0.                 ",
        "0.                 ",
        "0.                 ",
        "0.                 ",
      ],
      printUnits: [null, null, null, null, null, null],
    },
    length: {
      values: ["m", "cm", "mm", "μm", "km", "in", "yd", "ft"],
      factors: [
        "1.",
        "1e2",
        "1e3",
        "1e6",
        "1e-3",
        "39.37007874",
        "1.0936132983",
        "3.280839895013",
      ],
      offsets: ["0.", "0.", "0.", "0.", "0.", "0.", "0.", "0."],
      printUnits: [null, null, null, null, null, null, null, null],
    },
    area: {
      values: ["m2", "cm2", "mm2", "km2"],
      factors: ["1.", "1e4", "1e6", "1e-6"],
      offsets: [
        "0.                 ",
        "0.                 ",
        "0.                 ",
        "0.                 ",
      ],
      printUnits: ["m²", "cm²", "mm²", "km²"],
    },
    volume: {
      values: ["m3", "cm3", "mm3", "km3", "l"],
      factors: ["1.", "1e6", "1e9", "1e-9", "1000."],
      offsets: [
        "0.                 ",
        "0.                 ",
        "0.                 ",
        "0.                 ",
        "0.",
      ],
      printUnits: ["m³", "cm³", "mm³", "km³", null],
    },
    force: {
      values: ["N", "kN", "MN"],
      factors: ["1.", "1e-3", "1e-6"],
      offsets: ["0.", "0.", "0."],
      printUnits: [null, null, null],
    },
    torque: {
      values: ["Nm"],
      factors: ["1."],
      offsets: ["0."],
      printUnits: [null],
    },
    massflow: {
      values: [
        "kg/s",
        "kg/h",
        "t/h",
        "t/d",
        "t/a",
        "lb/s",
        "lb/h",
        "Nm3/h(air)",
      ],
      factors: [
        "1.",
        "3600.",
        "3.6",
        "86.4",
        "31536.",
        "2.2046226",
        "7.936641e3",
        "2784.06463371229",
      ],
      offsets: [
        "0.",
        "0.",
        "0.",
        "0.",
        "0.",
        "0.",
        "0.",
        "0.                 ",
      ],
      printUnits: [null, null, null, null, null, null, null, "Nm³/h(air)"],
    },
    stdvolumeflow: {
      values: [
        "Nm3/s",
        "Nm3/h",
        "SCFM60",
        "SCFM70",
        "MSCFD60",
        "MSCFD70",
        "SCFH70",
      ],
      factors: [
        "1.",
        "3600.",
        "2118.868524208073",
        "2118.868524208073",
        "3.051170674859625",
        "3.051170674859625",
        "1.271328e5",
      ],
      offsets: [
        "0.                 ",
        "0.                 ",
        "0.",
        "0.",
        "0.",
        "0.",
        "0.",
      ],
      printUnits: ["Nm³/s", "Nm³/h", null, null, null, null, null],
    },
    volumeflow: {
      values: ["m3/s", "m3/h", "l/min", "l/h", "ft/min"],
      factors: ["1.", "3600.", "6e4", "3.6e6", "2118.8"],
      offsets: ["0.                 ", "0.                 ", "0.", "0.", "0."],
      printUnits: ["m³/s", "m³/h", null, null, null],
    },
    pressure: {
      values: [
        "Pa",
        "hPa",
        "kPa",
        "MPa",
        "bar",
        "bara",
        "barg",
        "mbar",
        "mbara",
        "mbarg",
        "psi",
        "kg/cm2",
        "lb/ft2",
        "lb/in2",
      ],
      factors: [
        "1.",
        "1e-2",
        "1e-3",
        "1e-6",
        "1e-5",
        "1e-5",
        "1e-5",
        "1e-2",
        "1e-2",
        "1e-2",
        "1.45037738e-4",
        "1.019716213e-5",
        "0.020885434234",
        "1.45037738e-4",
      ],
      offsets: [
        "0.",
        "0.",
        "0.",
        "0.",
        "0.",
        "0.                 ",
        "-101325.           ",
        "0.",
        "0.                 ",
        "-101325.           ",
        "0.",
        "0.                 ",
        "0.                 ",
        "0.                 ",
      ],
      printUnits: [
        null,
        null,
        null,
        null,
        null,
        "bar(a)",
        "bar(g)",
        null,
        "mbar(a)",
        "mbar(g)",
        null,
        "kg/cm²",
        "lb/ft²",
        "lb/in²",
      ],
    },
    density: {
      values: ["kg/m3"],
      factors: ["1."],
      offsets: ["0.                 "],
      printUnits: ["kg/m³"],
    },
    specificvolume: {
      values: ["m3/kg"],
      factors: ["1."],
      offsets: ["0.                 "],
      printUnits: ["m³/kg"],
    },
    power: {
      values: ["W", "kW", "MW", "hp"],
      factors: ["1.", "1e-3", "1e-6", "00134102208959911060."],
      offsets: ["0.", "0.", "0.", "0."],
      printUnits: [null, null, null, null],
    },
    energy: {
      values: ["J", "kJ", "MJ", "kWh"],
      factors: ["1.", "1e-3", "1e-6", "2.777777777777778e-7"],
      offsets: ["0.", "0.", "0.", "0."],
      printUnits: [null, null, null, null],
    },
    specificenergy: {
      values: ["J/kg", "kJ/kg"],
      factors: ["1.", "1e-3"],
      offsets: ["0.", "0."],
      printUnits: [null, null],
    },
    specificheatcapacity: {
      values: ["J/(kg*K)", "kJ/(kg*K)"],
      factors: ["1.", "1e-3"],
      offsets: ["0.", "0."],
      printUnits: [null, null],
    },
    angle: {
      values: ["rad", "deg"],
      factors: ["1.", "57.29577951308232"],
      offsets: ["0.", "0."],
      printUnits: [null, null],
    },
    frequency: {
      values: ["Hz", "1/s", "rpm", "1/min"],
      factors: ["1.", "1.", "60.", "60."],
      offsets: ["0.", "0.", "0.", "0."],
      printUnits: [null, null, null, null],
    },
    velocity: {
      values: ["m/s", "mm/s"],
      factors: ["1.", "1e3"],
      offsets: ["0.", "0."],
      printUnits: [null, null],
    },
    acceleration: {
      values: ["m/s2", "mm/s2"],
      factors: ["1.", "1e3"],
      offsets: ["0.                 ", "0.                 "],
      printUnits: ["m/s²", "mm/s²"],
    },
    viscosity: {
      values: ["Pa*s", "μPa*s"],
      factors: ["1.", "1e6"],
      offsets: ["0.", "0."],
      printUnits: [null, null],
    },
    molarmass: {
      values: ["kg/kmol"],
      factors: ["1."],
      offsets: ["0."],
      printUnits: [null],
    },
    voltage: {
      values: ["V", "mV", "kV", "MV"],
      factors: ["1.", "1e3", "1e-3", "1e-6"],
      offsets: ["0.", "0.", "0.", "0."],
      printUnits: [null, null, null, null],
    },
    electriccharge: {
      values: ["A*s"],
      factors: ["1."],
      offsets: ["0."],
      printUnits: [null],
    },
  },
  aliases: {
    speed: "frequency",
    none: "dimensionless",
    efficiency: "dimensionless",
    position: "dimensionless",
    relhum: "dimensionless",
    kri: "dimensionless",
  },
};