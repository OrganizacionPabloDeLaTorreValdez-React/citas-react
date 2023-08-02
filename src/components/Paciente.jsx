const Paciente = () => {
  return (
    <div className="ml-3 px-5 py-10 space-y-5 bg-white shadow-md rounded-lg">
      <p className="font-bold uppercase text-gray-700">
        nombre: {' '}
        <span className="font-normal normal-case">hook</span>
      </p>
      <p className="font-bold uppercase text-gray-700">
        propietario: {' '}
        <span className="font-normal normal-case">juan</span>
      </p>
      <p className="font-bold uppercase text-gray-700">
        email: {' '}
        <span className="font-normal normal-case">correo@correo.com</span>
      </p>
      <p className="font-bold uppercase text-gray-700">
        alta: {' '}
        <span className="font-normal normal-case">10 diciembre de 2022</span>
      </p>
      <p className="font-bold uppercase text-gray-700">
        síntomas: {' '}
        <span className="font-normal normal-case">
          lorem ipsum dolor sit amet consectetur adipisicing elit. consectetur beatae officia magni eaque libero necessitatibus molestiae iure esse ipsam harum doloremque, ullam reiciendis iste adipisci cum, veniam, tenetur unde numquam!
        </span>
      </p>
    </div>
  );
}

export default Paciente;