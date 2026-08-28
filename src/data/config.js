// src/data/config.js
//
// Este archivo queda como punto de entrada por compatibilidad: los
// componentes importan su valor por defecto desde acá. Los datos de cada
// cliente demo viven separados en /src/data/clientes/.

// ⚠️ ESTE BLOQUE ES SOLO PARA LA DEMO. Al entregar el sitio a un cliente real,
// borra este objeto y los componentes <DemoBanner /> / <ForDoctors />.
export const demoConfig = {
    marca: "HWebCraft",
    whatsappNumero: "584127672176", // Formato internacional sin símbolo +
    mensajePrellenado: "Hola, vi la demo del sitio para médicos y quiero cotizar una web para mi consultorio.",
    precioDesde: "$100",
    garantia: "Ajustes gratis durante los primeros 30 días después de la entrega.",
    otrosEjemplos: [
        { nombre: "Cardiólogo", url: "/" },
        { nombre: "Dentista", url: "/dentista" },
        { nombre: "Nutricionista", url: "/nutricionista" }
    ],
    pasos: [
        {
            titulo: "Cuéntame de tu consulta",
            descripcion: "Por WhatsApp me compartes tus datos, servicios, sedes y algunas fotos."
        },
        {
            titulo: "Armo tu web",
            descripcion: "En pocos días tienes tu sitio listo, con tu marca y agenda de citas por WhatsApp."
        },
        {
            titulo: "Revisamos juntos",
            descripcion: "Ajustamos textos, colores y detalles hasta que quede tal como la imaginaste."
        },
        {
            titulo: "Queda lista y es tuya",
            descripcion: "Se publica con tu dominio, lista para compartir con tus pacientes."
        }
    ],
    sinWeb: [
        "Pacientes que te buscan en Google y no encuentran nada",
        "Llamadas perdidas fuera de horario de consulta",
        "Agenda manual, repitiendo la misma información por teléfono",
        "Una imagen que no refleja tu experiencia real"
    ],
    conWeb: [
        "Agenda automática por WhatsApp a cualquier hora",
        "Presencia profesional que genera confianza antes de la primera cita",
        "Menos llamadas repetitivas explicando lo mismo",
        "Una imagen a la altura de tu trayectoria"
    ]
};

// Re-exportado desde /clientes/cardiologo.js para no romper los imports
// existentes de los componentes (que usan este archivo como valor por
// defecto). Para el sitio del cardiólogo en sí, /clientes/cardiologo.js
// es la fuente real de los datos.
export { doctorConfig } from './clientes/cardiologo.js';
