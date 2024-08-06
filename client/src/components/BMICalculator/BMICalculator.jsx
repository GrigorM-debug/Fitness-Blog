import React, { useState } from 'react';
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import styles from './BMICalculator.module.css';
import useForm from '../../hooks/useForm';

const initialData = {
    height: '',
    weight: '',
    heightUnit: 'Please select height unit',
    weightUnit: 'Please select weight unit',
    gender: 'Please select gender',
    age: ''
}

export default function BMICalculator() {
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [heightUnit, setHeightUnit] = useState('');
    const [weightUnit, setWeightUnit] = useState('');
    const [bmi, setBmi] = useState('');
    const [error, setError] = useState('');

    const calculateBMI = (e) => {
        e.preventDefault();

        let heightInCm = parseFloat(height);
        let weightInKg = parseFloat(weight);

        if (isNaN(heightInCm) || isNaN(weightInKg)) {
            setError("Provide valid height and weight!");
            setBmi('');
            return;
        }

        console.log(error)

        setError(''); 

        if (heightUnit === "ft") {
            heightInCm *= 30.48; 
        }

        if (weightUnit === "lb") {
            weightInKg *= 0.453592; 
        }

        const calculatedBmi = (weightInKg / ((heightInCm * heightInCm) / 10000)).toFixed(2);

        setBmi(calculatedBmi);
    };

    const formSubmit = (formData) => {
    
        console.log(formData)
    }

    const { formData, onChangeHandler, onSubmitHandler, clearData } = useForm(initialData, formSubmit);


    return (
        <>
            {/* Breadcrumb Section Begin */}
            <Breadcrumb title="BMI calculator" page="BMI calculator" breadcrumbImage="/img/BMI.jpg"/>
            {/* Breadcrumb Section End */}
            
            {/* BMI Calculator Section Begin */}
            <section className={`${styles.bmiCalculatorSection} spad`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className={`section-title ${styles.chartTitle}`}>
                                <span>check your body</span>
                                <h2>BMI CALCULATOR CHART</h2>
                            </div>
                            <div className={styles.charTable}>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Bmi</th>
                                            <th>WEIGHT STATUS</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className={styles.point}>Below 18.5</td>
                                            <td>Underweight</td>
                                        </tr>
                                        <tr>
                                            <td className={styles.point}>18.5 - 24.9</td>
                                            <td>Healthy</td>
                                        </tr>
                                        <tr>
                                            <td className={styles.point}>25.0 - 29.9</td>
                                            <td>Overweight</td>
                                        </tr>
                                        <tr>
                                            <td className={styles.point}>30.0 - and Above</td>
                                            <td>Obese</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className={`section-title ${styles.charCalculateTitle}`}>
                                <span>check your body</span>
                                <h2>CALCULATE YOUR BMI</h2>
                            </div>
                            <div className={styles.charCalculateForm}>
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
                                <form onSubmit={onSubmitHandler}>
                                    <div className="row">
                                        <p className="text-red-600">{error ? error : ''}</p>
                                        <div id="input-with-select" className="col-sm-6">
                                            <label htmlFor="height">Height</label>
                                            <input 
                                                id="height"
                                                type="text" 
                                                name="height"
                                                onChange={onChangeHandler}
                                                value={formData.height}
                                            />
                                            <label htmlFor='heightUnit'>Select Height Unit</label>
                                            <select
                                                id="heightUnit"
                                                name="heightUnit"
                                                className={styles.unitSelect}
                                                value={formData.heightUnit}
                                                onChange={onChangeHandler}
                                            >
                                                <option value="">--Please select height unit</option>
                                                <option value="cm">Cm</option>
                                                <option value="ft">Ft</option>
                                            </select>
                                        </div>
                                        <div id="input-with-select" className="col-sm-6">
                                            <label htmlFor="weight">Weight</label>
                                            <input 
                                                id="weight"
                                                type="text" 
                                                name="weight"
                                                value={formData.weight}
                                                onChange={onChangeHandler}
                                            />
                                            <label htmlFor="weightUnit">Select Weight Unit</label>
                                            <select
                                                id="weightUnit"
                                                name="weightUnit"
                                                className={styles.unitSelect}
                                                value={formData.weightUnit}
                                                onChange={onChangeHandler}
                                            >
                                                <option value="">--Please select weight unit</option>
                                                <option value="kg">Kg</option>
                                                <option value="lb">Lb</option>
                                            </select>
                                        </div>
                                        <div className="col-sm-6">
                                            <label htmlFor="age">Age</label>
                                            <input id="age" name='age' type="text" onChange={onChangeHandler} value={formData.age}/>
                                        </div>
                                        <div className="col-sm-6">
                                            <label htmlFor="gender">Select Gender</label>
                                            <select id="gender" name="gender" className={styles.unitSelect} onChange={onChangeHandler} value={formData.gender}>
                                                <option value="">--Please select gender</option>
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                            </select>
                                        </div>
                                        <div id={styles.userBMI} className="col-sm-6">
                                            <h2>Result: </h2>
                                            <input type="text" id="bmi-result" value={bmi} readOnly />
                                        </div>
                                        <div className="col-lg-12">
                                            <button type="submit">
                                                Calculate
                                            </button>
                                        </div>
                                        {/* {error && (
                                            <div className="col-lg-12">
                                                <p style={{color: 'red'}}>{error}</p>
                                            </div>
                                        )} */}
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
