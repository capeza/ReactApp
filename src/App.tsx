import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PatientsList from './components/app/lists/PatientsList/PatientsList';
import { getSexDictionary } from './states/common/reducers/Dictionaries/thuncs';
import { getPatientsStorage } from './states/common/reducers/Patients/thuncs';
import { AppDispatch } from './states/store/ProjectStore';
// TODO по всему проекту убрать console.log, лишние пустые строки, комменты,
//  неиспользуемые импорты, добавить недостающие пустые строки
function App() {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getSexDictionary());
    dispatch(getPatientsStorage());
  }, []);

  return (
    <div className="App">
      <PatientsList />
    </div>
  );
}

export default App;
