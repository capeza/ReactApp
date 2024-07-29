import React, {useEffect} from "react";
import { useDispatch } from 'react-redux';
import PatientsList from "./components/app/lists/PatientsList/PatientsList";
import {getSexDictionary} from "./states/common/reducers/Dictionaries/thuncs";
import {getPatientsDictionary} from "./states/common/reducers/Patients/thuncs";
import { AppDispatch} from "./states/store/ProjectStore";



function App(){
    const dispatch: AppDispatch = useDispatch();
    useEffect(()=>{
        dispatch(getSexDictionary());
        dispatch(getPatientsDictionary());
    }, []);
    return (
        <div className="App">
            <PatientsList />
        </div>
    );
}

export default App;