// src/data/config.js

// ⚠️ ESTE BLOQUE ES SOLO PARA LA DEMO. Al entregar el sitio a un cliente real,
// borra este objeto y el componente <DemoBanner /> de index.astro.
export const demoConfig = {
    marca: "HWebCraft",
    whatsappNumero: "584127672176", // Formato internacional sin símbolo +
    mensajePrellenado: "Hola, vi la demo del sitio para médicos y quiero cotizar una web para mi consultorio.",
    precioDesde: "U$D100",
    garantia: "Ajustes gratis durante los primeros 30 días después de la entrega.",
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

export const doctorConfig = {
    // Datos Personales y Marca
    nombre: "Dr. Alejandro Silva",
    especialidad: "Cardiología Intervencionista",
    subtituloHero: "Atención Médica Especializada",
    descripcionHero: "Prevención, diagnóstico y tratamiento de enfermedades del corazón. Consultas presenciales con tecnología de vanguardia.",
    anosExperiencia: "+12",
    whatsappNumero: "584127672176", // Formato internacional sin símbolo +
    localidad : "San Cristobal - Tachira - Venezuela",
    // Si son las 17:00 (5 PM) o más, sumamos 2 días (pasado mañana).
    // Si es antes de las 5 PM, sumamos 1 día (mañana).
    horacierrecitas : 17,

    // Redes Sociales
    redesSociales: {
        instagram: "https://instagram.com/dr.alejandrosilva",
        tiktok: "https://tiktok.com/@dr.alejandrosilva",
        linkedin: "https://linkedin.com/in/dr-alejandro-silva"
    },

    // Biografía (Sección Sobre Mí)
    bio: "Comprometido con brindar una atención médica caracterizada por la rigurosidad científica, la empatía y la prevención temprana de patologías cardiovasculares.",
    fotoDoctor: "/foto-doc.webp",
    fotoSobreMi: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=800&auto=format&fit=crop",

    logros: [
        "Especialista en Cardiología Intervencionista (UCV)",
        "Miembro de la Sociedad Venezolana de Cardiología",
        "+12 años de experiencia en atención hospitalaria y privada",
        "Entrenamiento avanzado en Ecocardiografía Doppler"
    ],

    //Hero features

    heroFeatures: [
        "Atención previa cita",
        "Estudio de ECG incluido",
        "Seguimiento personalizado por WhatsApp"
    ],

    // Servicios
    servicios: [
        {
            icon: "🫀",
            title: "Consulta Cardiológica",
            description: "Evaluación integral de la salud cardiovascular, control de hipertensión y chequeos preventivos."
        },
        {
            icon: "📊",
            title: "Electrocardiograma (ECG)",
            description: "Registro de la actividad eléctrica del corazón para detectar arritmias o anomalías en tiempo real."
        },
        {
            icon: "🩺",
            title: "Ecocardiograma Doppler",
            description: "Ultrasonido avanzado para evaluar la estructura, válvulas y el flujo sanguíneo del corazón."
        },
        {
            icon: "⏱️",
            title: "Monitoreo Holter 24h",
            description: "Seguimiento continuo del ritmo cardíaco durante todo el día para un diagnóstico preciso."
        },
        {
            icon: "🏃",
            title: "Prueba de Esfuerzo",
            description: "Evaluación del comportamiento del corazón durante el ejercicio físico controlado."
        },
        {
            icon: "🏥",
            title: "Evaluación Preoperatoria",
            description: "Valoración de riesgo quirúrgico cardiovascular antes de intervenciones quirúrgicas."
        }
    ],

    // Sedes de Atención
    sedes: [
        {
            nombre: "Centro Médico Policlínica",
            ciudad: "San Cristóbal",
            direccion: "Av. 19 de Abril, Torre B, Consultorio 3-02",
            dias: "Lunes, Miércoles y Viernes",
            horario: "8:00 AM - 12:00 PM",
            telefono: "+58 276 3456789",
            // Con este formato de búsqueda, Maps lleva directo a la dirección
            // aunque el lugar no tenga una ficha propia en Google.
            mapaUrl: "https://www.google.com/maps/search/?api=1&query=Av.+19+de+Abril+Torre+B+San+Cristobal+Tachira"
        },
        {
            nombre: "Clínica San José",
            ciudad: "Táriba",
            direccion: "Calle 4 con Carrera 5, Piso 1, Consultorio 12",
            dias: "Martes y Jueves",
            horario: "2:00 PM - 6:00 PM",
            telefono: "+58 276 9876543",
            mapaUrl: "https://www.google.com/maps/search/?api=1&query=Calle+4+con+Carrera+5+Tariba+Tachira"
        }
    ],

    // Métodos de Pago Disponibles
    metodosPago: [
        "Pago Móvil (Bolívares)",
        "Zelle (USD)",
        "Efectivo en Consultorio",
        "Transferencia Bancaria"
    ],

    // Testimonios de Pacientes
    // Nota: son de ejemplo para la demo. En un cliente real, revisar la
    // normativa local sobre testimonios en publicidad médica antes de usar
    // testimonios reales o inventados.
    testimonios: [
        {
            nombre: "María P.",
            servicio: "Consulta Cardiológica",
            texto: "El Dr. Silva me explicó todo con calma y en palabras que pude entender. Nunca sentí que estaba apurado, y el seguimiento por WhatsApp después de la consulta se agradece muchísimo.",
            estrellas: 5
        },
        {
            nombre: "Carlos R.",
            servicio: "Prueba de Esfuerzo",
            texto: "Muy profesional y puntual. Me dieron los resultados el mismo día y agendar la cita fue rapidísimo, todo por WhatsApp sin tener que llamar ni hacer fila.",
            estrellas: 5
        },
        {
            nombre: "Yolimar G.",
            servicio: "Ecocardiograma Doppler",
            texto: "Llevaba tiempo posponiendo este estudio por miedo, pero el trato fue excelente. La sede de Táriba tiene fácil acceso y el consultorio es muy cómodo.",
            estrellas: 5
        }
    ],

    // Preguntas Frecuentes
    faqs: [
        {
            pregunta: "¿Cuáles son las formas de pago aceptadas?",
            respuesta: "Aceptamos Pago Móvil, Zelle, efectivo (USD/Efectivo exacto) y transferencias bancarias nacionales."
        },
        {
            pregunta: "¿Atiende por seguros médicos (HCM)?",
            respuesta: "Trabajamos mediante la modalidad de reembolso con factura formal e informe médico firmado."
        },
        {
            pregunta: "¿Cómo puedo cancelar o reprogramar una cita?",
            respuesta: "Puede notificar con al menos 24 horas de anticipación a través de WhatsApp."
        },
        {
            pregunta: "¿Qué debo llevar a mi primera consulta?",
            respuesta: "Se recomienda traer cédula de identidad, exámenes de laboratorio recientes, estudios previos (electros, ecos) y la lista de medicamentos que toma actualmente."
        }
    ]
};