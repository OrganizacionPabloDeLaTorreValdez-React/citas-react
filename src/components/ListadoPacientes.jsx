import Paciente from "./Paciente";

const ListadoPacientes = ({patients, setPatient, deletePatient}) => {
  return (
    <div className="md:w-1/2 lg:w-3/5">
        {
          (patients && patients.length) 
          ? (
            <>
              <h2 className="font-black text-3xl text-center">Listado de Pacientes</h2>
              <p className="text-xl mt-5 mb-10 text-center">
                Administra tus {''}
                <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
              </p>
              <div className="space-y-5 md:max-h-screen overflow-y-auto">
                {patients.map((patient) => 
                  <Paciente 
                    key={patient.id}
                    patient={patient}
                    setPatient={setPatient}
                    deletePatient={deletePatient}
                  />
                )}
              </div>
            </>
          )
          : (
            <>
              <h2 className="font-black text-3xl text-center">No hay Pacientes</h2>
              <p className="text-xl mt-5 mb-10 text-center">
                Comienza agregando pacientes y {''}
                <span className="text-indigo-600 font-bold">apareceran en este lugar</span>
              </p>
            </>
          )
        }
    </div>
  );
}

export default ListadoPacientes;