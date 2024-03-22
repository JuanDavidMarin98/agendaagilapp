import "./Home.css"
import basededatos from "../utils/basededatos.json"


export function Home() {

    
    console.log(basededatos[0])
    return ( //zona de renderizado
        <>
            <section className="container mt-5">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <h1 className="text-muted"> <span className="fuente">Servicios a un clic</span> </h1>
                        <h2 className="text-muted">HOLA<span className="fuente">{basededatos[0].nombreUsuario}</span></h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque animi ex cumque provident necessitatibus ipsam, sint dolores. Nostrum maiores culpa tempore error atque id temporibus possimus dolorem voluptate qui voluptatibus, ad vitae et harum! Omnis cumque quam quo mollitia commodi voluptatibus libero nemo aspernatur, velit distinctio consectetur rerum, facilis hic.</p>
                    </div>
                    <div className="col-12 col-md-6">
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Tu Grupo Familiar</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>   

                        <div className="row">
                                <div className="col-12 col-md-2"><i class="bi bi-person-circle fs-1 fuente mt-2"></i></div>
                                <div className="col-12 col-md-10 mt-3"><h3>MEDICO DE FAMILIA</h3>
                                    <p>Doctor {basededatos[0].medicoDeFamilia}</p></div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-md-2"><i class="bi bi-person-fill fs-1 fuente mt-2"></i></div>
                                <div className="col-12 col-md-10 mt-3"><h3>TIPO DE AFILIADO</h3>
                                    <p>Cotizante</p>
                                    <p>Grupo de ingresos: B</p></div>    
                            </div>
                            <div className="row">
                                <div className="col-12 col-md-2"><i class="bi bi-suitcase-lg-fill fs-1 fuente mt-2"></i></div>
                                <div className="col-12 col-md-10 mt-2"><h3>ESTADO DE AFILIACION</h3>
                                <p>Tiene derecho a cobertura integral</p></div>
                                
                            </div>
                            <div className="row">
                                <div className="col-12 col-md-2"><i class="bi bi-hospital-fill fs-1 fuente mt-2"></i></div>
                                <div className="col-12 col-md-10 mt-3"> <h3>IPS ACTUAL</h3>
                                <p>CIS COMFAMA ITAGUI</p></div> 

                        </div>
                    </div>
                </div>
            </section>

            <section className="container">
                <div className="row">
                    <div className="col-12col-md-5">
                        <h5>Paciente {basededatos[0].nombreUsuario} estas son tus proximas citas:</h5>
                    </div>
                </div>
            </section>
            <section className="container my-5">
                <div className="row row-cols-1 row-cols-md-3">
                    {
                        basededatos[0].citasMedicas.map(function(cita){
                            return(
                                <div className="col">
                                    <div className="card h-100 shadow px-2">
                                    <h3>{cita.especialidad}</h3>
                                    <h4>fecha: {cita.fecha}</h4>
                                    <h5>{cita.direccion}</h5>
                                    </div>
                                </div>
                            )
                        })
                    }


                </div>
            </section>
        </>
    )
}