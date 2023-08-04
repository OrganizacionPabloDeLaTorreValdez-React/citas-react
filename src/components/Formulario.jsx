import {useState, useEffect} from "react";
import Error from "./Error";

const Formulario = ({patients, setPatients, patient, setPatient}) => {
  const [name, setName] = useState('');
  const [owner, setOwner] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [symptoms, setSymptoms] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    if(patient && Object.keys(patient).length > 0) {
      setName(patient.name);
      setOwner(patient.owner);
      setEmail(patient.email);
      setDate(patient.date);
      setSymptoms(patient.symptoms);
    }
  }, [patient]);

  const generateId = () => {
    const random = Math.random().toString(36).substring(2);
    const date = Date.now().toString(36);

    return random + date;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // validación del formulario
    if([name, owner, email, date, symptoms].includes('')) {
      setError(true);
      return;
    }
    setError(false);

    // Object Patient
    const objectPatient = {
      name, 
      owner, 
      email, 
      date, 
      symptoms,
    }

    if(patient.id) {
      // Modifying the patient
      objectPatient.id = patient.id;

      const updatedPatients = patients.map((patientState) => 
        (patientState.id === patient.id ? objectPatient : patientState)
      );
      setPatients(updatedPatients);
      setPatient({});
    } else {
      // Adding new patient
      objectPatient.id = generateId();
      setPatients([...patients, objectPatient]);
    }

    // reset form
    setName('');
    setOwner('');
    setEmail('');
    setDate('');
    setSymptoms('');
  }

  return (
    <div className="mx-5 md:mx-0 md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="mt-5 mb-10 text-lg text-center">
        Añade Pacientes y {' '}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>
      <form action="#" onSubmit={handleSubmit}
       className="py-10 px-5 bg-white shadow-md rounded-lg space-y-5">
        {error && <Error><p>Todos los campos son requeridos</p></Error>}
        <div>
          <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
            Nombre Mascota
          </label>
          <input id="mascota" type="text" placeholder="Nombre de la mascota" value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-2 mt-2 w-full outline outline-2 outline-gray-300 placeholder-gray-400
           focus:outline-indigo-300 rounded"/>
        </div>
        <div>
          <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">
            Nombre Propietario
          </label>
          <input id="propietario" type="text" placeholder="Nombre del propietario" value={owner}
          onChange={(e) => setOwner(e.target.value)}
          className="p-2 mt-2 w-full
          outline outline-2 outline-gray-300 placeholder-gray-400 focus:outline-indigo-300 rounded"/>
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
            Email
          </label>
          <input id="email" type="email" placeholder="Email Contacto" value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 mt-2 w-full
          outline outline-2 outline-gray-300 placeholder-gray-400 focus:outline-indigo-300 rounded"/>
        </div>
        <div>
          <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">
            Alta
          </label>
          <input id="alta" type="date" value={date}
          onChange={(e) => setDate(e.target.value)}
          className="p-2 mt-2 w-full
          outline outline-2 outline-gray-300 focus:outline-indigo-300 rounded"/>
        </div>
        <div>
          <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
            Síntomas
          </label>
          <textarea name="" id="sintomas" cols="30" rows="5" placeholder="Describe los Síntomas"
          value={symptoms} onChange={(e) => setSymptoms(e.target.value)}
          className="p-2 mt-2 w-full
          outline outline-2 outline-gray-300 placeholder-gray-400 focus:outline-indigo-300 rounded resize-none" />
        </div>
        <button type="submit" className="p-3 w-full text-white uppercase bg-indigo-600 rounded
        active:bg-indigo-700 cursor-pointer transition-colors">
          {patient.id ? 'Editar paciente' : 'Agregar paciente'}
        </button>
      </form>
    </div>
  );
}

export default Formulario;