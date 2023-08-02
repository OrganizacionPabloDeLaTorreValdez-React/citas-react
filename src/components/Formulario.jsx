const Formulario = () => {
  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="mt-5 mb-10 text-lg text-center">
        Añade Pacientes y {' '}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>
      <form action="#" className="py-10 px-5 bg-white shadow-md rounded-lg space-y-5">
        <div>
          <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
            Nombre Mascota
          </label>
          <input id="mascota" type="text" placeholder="Nombre de la mascota" className="p-2 mt-2 w-full
          outline outline-2 outline-gray-300 placeholder-gray-400 focus:outline-indigo-300 rounded"/>
        </div>
        <div>
          <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">
            Nombre Propietario
          </label>
          <input id="propietario" type="text" placeholder="Nombre del propietario" className="p-2 mt-2 w-full
          outline outline-2 outline-gray-300 placeholder-gray-400 focus:outline-indigo-300 rounded"/>
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
            Email
          </label>
          <input id="email" type="email" placeholder="Email Contacto" className="p-2 mt-2 w-full
          outline outline-2 outline-gray-300 placeholder-gray-400 focus:outline-indigo-300 rounded"/>
        </div>
        <div>
          <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">
            Alta
          </label>
          <input id="alta" type="date" className="p-2 mt-2 w-full
          outline outline-2 outline-gray-300 focus:outline-indigo-300 rounded"/>
        </div>
        <div>
          <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
            Síntomas
          </label>
          <textarea name="" id="sintomas" cols="30" rows="5" placeholder="Describe los Síntomas" className="p-2 mt-2 w-full
          outline outline-2 outline-gray-300 placeholder-gray-400 focus:outline-indigo-300 rounded resize-none" />
        </div>
        <button type="button" className="p-3 w-full text-white uppercase bg-indigo-600 rounded
        active:bg-indigo-700 cursor-pointer transition-colors">Agregar paciente</button>
      </form>
    </div>
  );
}

export default Formulario;