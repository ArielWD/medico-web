// src/data/clientes/dentista.js

export const dentistaConfig = {
    // Datos Personales y Marca
    nombre: "Dra. Valentina Rojas",
    especialidad: "Odontología General y Estética",
    subtituloHero: "Sonrisas Sanas y Seguras",
    descripcionHero: "Limpiezas, ortodoncia, blanqueamiento y tratamientos dentales con tecnología moderna y bioseguridad.",
    anosExperiencia: "+8",
    whatsappNumero: "584127672176", // Formato internacional sin símbolo +
    localidad : "San Cristobal - Tachira - Venezuela",
    horacierrecitas : 17,

    caracteristicasHero: [
        "Bioseguridad certificada",
        "Financiamiento en cuotas",
        "Urgencias el mismo día"
    ],

    redesSociales: {
        instagram: "https://instagram.com/dra.valentinarojas",
        tiktok: "https://tiktok.com/@dra.valentinarojas",
        linkedin: ""
    },

    bio: "Enfocada en la odontología preventiva y estética, combinando tecnología moderna con un trato cercano para que cada paciente pierda el miedo al dentista.",
    fotoDoctor: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=800&auto=format&fit=crop",
    fotoSobreMi: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop",

    logros: [
        "Odontóloga egresada de la Universidad de Los Andes (ULA)",
        "Diplomado en Estética Dental y Blanqueamiento",
        "+8 años de experiencia en clínica privada",
        "Certificación en manejo de pacientes pediátricos"
    ],

    servicios: [
        {
            icon: "🦷",
            title: "Limpieza Dental",
            description: "Profilaxis profesional para eliminar sarro y placa bacteriana, previniendo caries y enfermedad periodontal."
        },
        {
            icon: "✨",
            title: "Blanqueamiento Dental",
            description: "Tratamiento estético para aclarar el tono de los dientes de forma segura y progresiva."
        },
        {
            icon: "🔧",
            title: "Ortodoncia",
            description: "Brackets metálicos y estéticos para corregir la posición dental y mejorar la mordida."
        },
        {
            icon: "🩹",
            title: "Resinas y Restauraciones",
            description: "Tratamiento de caries con materiales estéticos que devuelven forma y función a la pieza dental."
        },
        {
            icon: "🪥",
            title: "Odontología Preventiva",
            description: "Chequeos periódicos, sellantes y fluorización para evitar problemas antes de que aparezcan."
        },
        {
            icon: "😁",
            title: "Diseño de Sonrisa",
            description: "Plan integral que combina distintos tratamientos estéticos según las necesidades del paciente."
        }
    ],

    sedes: [
        {
            nombre: "Clínica Dental Sonrisa Total",
            ciudad: "San Cristóbal",
            direccion: "Carrera 20 con Calle 5, Edificio Médico, Consultorio 2-05",
            dias: "Lunes a Viernes",
            horario: "9:00 AM - 5:00 PM",
            telefono: "+58 276 3456789",
            mapaUrl: "https://www.google.com/maps/search/?api=1&query=Carrera+20+con+Calle+5+San+Cristobal+Tachira"
        }
    ],

    metodosPago: [
        "Pago Móvil (Bolívares)",
        "Zelle (USD)",
        "Efectivo en Consultorio",
        "Financiamiento en cuotas (tratamientos largos)"
    ],

    // Testimonios de ejemplo para la demo — revisar normativa local de
    // publicidad en salud antes de usar testimonios reales o inventados.
    testimonios: [
        {
            nombre: "Andrea M.",
            servicio: "Blanqueamiento Dental",
            texto: "Le tenía pánico al dentista y la Dra. Valentina me hizo sentir tranquila desde la primera cita. El resultado del blanqueamiento superó lo que esperaba.",
            estrellas: 5
        },
        {
            nombre: "Luis F.",
            servicio: "Ortodoncia",
            texto: "Muy atenta con los controles mensuales y siempre explica bien cada paso del tratamiento. La clínica es limpia y moderna.",
            estrellas: 5
        },
        {
            nombre: "Patricia S.",
            servicio: "Limpieza Dental",
            texto: "Agendar por WhatsApp fue súper fácil y me atendieron puntual. Se nota la diferencia con otros consultorios donde toca esperar horas.",
            estrellas: 5
        }
    ],

    faqs: [
        {
            pregunta: "¿Cuáles son las formas de pago aceptadas?",
            respuesta: "Aceptamos Pago Móvil, Zelle, efectivo y ofrecemos financiamiento en cuotas para tratamientos de mayor duración."
        },
        {
            pregunta: "¿Atienden urgencias dentales?",
            respuesta: "Sí, contamos con espacio en agenda para urgencias el mismo día según disponibilidad. Escríbanos por WhatsApp explicando el caso."
        },
        {
            pregunta: "¿Cómo puedo cancelar o reprogramar una cita?",
            respuesta: "Puede notificar con al menos 24 horas de anticipación a través de WhatsApp."
        },
        {
            pregunta: "¿Qué debo llevar a mi primera consulta?",
            respuesta: "Se recomienda traer cédula de identidad y, si los tiene, radiografías o estudios dentales previos."
        }
    ]
};
