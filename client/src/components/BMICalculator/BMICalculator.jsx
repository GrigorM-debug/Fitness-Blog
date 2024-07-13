import React, { useState } from 'react';
import Breadcrumb from "../Breadcrumb/Breadcrumb";

export default function BMICalculator() {
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [heightUnit, setHeightUnit] = useState('');
    const [weightUnit, setWeightUnit] = useState('');
    const [bmi, setBmi] = useState('');

    const calculateBMI = (e) => {
        e.preventDefault();

        let heightInCm = parseFloat(height);
        let weightInKg = parseFloat(weight);

        if (isNaN(heightInCm) || isNaN(weightInKg)) {
            setBmi("Provide valid height and weight!");
            return;
        }

        // Convert height to cm if necessary
        if (heightUnit === "ft") {
            heightInCm *= 30.48; // 1 ft = 30.48 cm
        }

        // Convert weight to kg if necessary
        if (weightUnit === "lb") {
            weightInKg *= 0.453592; // 1 lb = 0.453592 kg
        }

        // Calculate BMI
        const calculatedBmi = (weightInKg / ((heightInCm * heightInCm) / 10000)).toFixed(2);

        // Display BMI result
        setBmi(calculatedBmi);
    };

    return (
        <>
            {/* Breadcrumb Section Begin */}
            <Breadcrumb title="BMI calculator" page="BMI calculator"/>
            {/* Breadcrumb Section End */}
            
            {/* BMI Calculator Section Begin */}
            <section className="bmi-calculator-section spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="section-title chart-title">
                                <span>check your body</span>
                                <h2>BMI CALCULATOR CHART</h2>
                            </div>
                            <div className="chart-table">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Bmi</th>
                                            <th>WEIGHT STATUS</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="point">Below 18.5</td>
                                            <td>Underweight</td>
                                        </tr>
                                        <tr>
                                            <td className="point">18.5 - 24.9</td>
                                            <td>Healthy</td>
                                        </tr>
                                        <tr>
                                            <td className="point">25.0 - 29.9</td>
                                            <td>Overweight</td>
                                        </tr>
                                        <tr>
                                            <td className="point">30.0 - and Above</td>
                                            <td>Obese</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="section-title chart-calculate-title">
                                <span>check your body</span>
                                <h2>CALCULATE YOUR BMI</h2>
                            </div>
                            <div className="chart-calculate-form">
                                <p>
                                    BMI, or Body Mass Index, is a measure that uses your weight and
                                    height to estimate whether your weight is healthy for your height.
                                    It's a simple calculation that provides a general indication of
                                    your body composition. Therefore, while BMI is a useful tool for
                                    quickly assessing weight status in the general population, it's
                                    not the sole indicator of health. Other factors such as waist
                                    circumference, body fat percentage, fitness level, and overall
                                    health status should also be considered when evaluating an
                                    individual's health and fitness.
                                </p>
                                <form onSubmit={calculateBMI}>
                                    <div className="row">
                                        <div id="input-with-select" className="col-sm-6">
                                            <input 
                                                type="text" 
                                                placeholder="Height" 
                                                value={height}
                                                onChange={(e) => setHeight(e.target.value)}
                                            />
                                            <select
                                                name="height-units"
                                                className="unit-select"
                                                value={heightUnit}
                                                onChange={(e) => setHeightUnit(e.target.value)}
                                            >
                                                <option value="">--Please select height unit</option>
                                                <option value="cm">Cm</option>
                                                <option value="ft">Ft</option>
                                            </select>
                                        </div>
                                        <div id="input-with-select" className="col-sm-6">
                                            <input 
                                                type="text" 
                                                placeholder="Weight" 
                                                value={weight}
                                                onChange={(e) => setWeight(e.target.value)}
                                            />
                                            <select
                                                name="weight-units"
                                                className="unit-select"
                                                value={weightUnit}
                                                onChange={(e) => setWeightUnit(e.target.value)}
                                            >
                                                <option value="">--Please select weight unit</option>
                                                <option value="kg">Kg</option>
                                                <option value="lb">Lb</option>
                                            </select>
                                        </div>
                                        <div className="col-sm-6">
                                            <input type="text" placeholder="Age" />
                                        </div>
                                        <div className="col-sm-6">
                                            <select name="gender-select" className="unit-select">
                                                <option value="">--Please select gender</option>
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                            </select>
                                        </div>
                                        <div id="user-bmi" className="col-sm-6">
                                            <h2>Result: </h2>
                                            <input type="text" id="bmi-result" value={bmi} readOnly />
                                        </div>
                                        <div className="col-lg-12">
                                            <button type="submit">
                                                Calculate
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* BMI Calculator Section End */}
        </>
    );
};