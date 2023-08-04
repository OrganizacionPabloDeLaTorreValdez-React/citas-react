const Paciente = ({patient, setPatient, deletePatient}) => {
  const {name, owner, email, date, symptoms, id} = patient;

  const handleDeleting = () => {
    const isDeleteOk = confirm("Deseas eliminar este paciente?");

    if(isDeleteOk) {
      deletePatient(id);
    }
  };

  return (
    <div className="ml-3 px-5 py-10 space-y-5 bg-white shadow-md rounded-lg">
      <p className="font-bold uppercase text-gray-700">
        nombre: {' '}
        <span className="font-normal normal-case">{name}</span>
      </p>
      <p className="font-bold uppercase text-gray-700">
        propietario: {' '}
        <span className="font-normal normal-case">{owner}</span>
      </p>
      <p className="font-bold uppercase text-gray-700">
        email: {' '}
        <span className="font-normal normal-case">{email}</span>
      </p>
      <p className="font-bold uppercase text-gray-700">
        alta: {' '}
        <span className="font-normal normal-case">{date}</span>
      </p>
      <p className="font-bold uppercase text-gray-700">
        síntomas: {' '}
        <span className="font-normal normal-case">
          {symptoms}
        </span>
      </p>
      <div className="flex justify-between">
        <button type="button" className="py-2 px-10 text-white uppercase font-bold
        bg-indigo-600 hover:bg-indigo-700 rounded-lg select-none"
        onClick={() => setPatient(patient)}>
          Editar
        </button>
        <button type="button" className="py-2 px-10 text-white uppercase font-bold
        bg-red-600 hover:bg-red-700 rounded-lg select-none"
        onClick={() => handleDeleting()}>
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default Paciente;