import React, {useEffect} from "react";
import {setSexDictionary} from "./states/common/reducers/Dictionaries/actions";
import { useDispatch } from 'react-redux';
import {setPatientsDictionary} from "./states/common/reducers/Patients/actions";
import PatientsList from "./components/app/lists/PatientsList/PatientsList";


function App(){
    const dispatch = useDispatch();
    useEffect(()=>{
        useDispatch(setSexDictionary());
        useDispatch(setPatientsDictionary());
    }, []);
    return (
        <div className="App">
            <PatientsList />
        </div>
    );
}

export default App;