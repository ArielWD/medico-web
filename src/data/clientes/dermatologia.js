// src/data/clientes/dermatologia.js

export const dermatologiaConfig = {
    // Datos Personales y Marca
    nombre: "Dra. Camila Vivas",
    especialidad: "Dermatología Clínica y Estética",
    subtituloHero: "Piel Sana, Resultados Reales",
    descripcionHero: "Tratamientos dermatológicos y estéticos personalizados, con seguimiento cercano y resultados naturales.",
    anosExperiencia: "+8",
    whatsappNumero: "584127672176", // Formato internacional sin símbolo +
    localidad: "San Cristobal - Tachira - Venezuela",
    horacierrecitas: 18,

    caracteristicasHero: [
        "Evaluación de piel personalizada",
        "Tecnología y protocolos actualizados",
        "Seguimiento post-tratamiento incluido"
    ],
    trayectoriaLabel: "Años de trayectoria profesional",

    redesSociales: {
        instagram: "https://instagram.com/dra.camilavivas",
        tiktok: "https://tiktok.com/@dra.camilavivas",
        linkedin: ""
    },

    bio: "Combina la dermatología clínica con procedimientos estéticos, priorizando siempre la salud de la piel antes que el resultado cosmético. Cada tratamiento se adapta al tipo de piel y objetivos de cada paciente.",
    fotoDoctor: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop",
    fotoSobreMi: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop",

    logros: [
        "Médico Cirujano (Universidad de Los Andes)",
        "Postgrado en Dermatología Clínica",
        "Formación en Medicina Estética y Láser",
        "+8 años de experiencia en consulta privada"
    ],

    subtituloServicios: "Cuidado de tu Piel",
    tituloServicios: "Tratamientos Dermatológicos y Estéticos",
    descripcionServicios: "Protocolos personalizados según tu tipo de piel y objetivos, con seguimiento en cada etapa.",

    // Galería de Antes/Después — es opcional: si un cliente no tiene fotos
    // reales (o su rubro no aplica), simplemente se omite este campo del
    // config y <BeforeAfter /> no renderiza nada.
    // ⚠️ Revisar la normativa local sobre uso de fotos antes/después en
    // publicidad médica y estética antes de usar con un cliente real —
    // en varios países se exige consentimiento informado explícito y hay
    // restricciones sobre qué se puede mostrar.
    antesDespues: {
        subtitulo: "Resultados Reales",
        titulo: "Antes y Después",
        descripcion: "Casos reales de pacientes, con su consentimiento, mostrando la evolución del tratamiento.",
        casos: [
            {
                tratamiento: "Tratamiento de Manchas",
                fotoAntes: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=600&auto=format&fit=crop",
                fotoDespues: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=600&auto=format&fit=crop",
                nota: "4 sesiones, resultado a los 2 meses"
            },
            {
                tratamiento: "Ácido Hialurónico",
                fotoAntes: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=600&auto=format&fit=crop",
                fotoDespues: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=600&auto=format&fit=crop",
                nota: "1 sesión, resultado inmediato"
            },
            {
                tratamiento: "Limpieza Facial Profunda",
                fotoAntes: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=600&auto=format&fit=crop",
                fotoDespues: "https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=600&auto=format&fit=crop",
                nota: "1 sesión"
            }
        ]
    },

    servicios: [
        {
            icon: "🧴",
            title: "Consulta Dermatológica",
            description: "Evaluación de piel, diagnóstico y tratamiento de acné, manchas, alergias y otras condiciones."
        },
        {
            icon: "✨",
            title: "Limpieza Facial Profunda",
            description: "Tratamiento profesional para piel más limpia, luminosa y libre de impurezas."
        },
        {
            icon: "💉",
            title: "Toxina Botulínica",
            description: "Tratamiento para líneas de expresión con resultados naturales y progresivos."
        },
        {
            icon: "💧",
            title: "Ácido Hialurónico",
            description: "Relleno para armonización facial, hidratación profunda y recuperación de volumen."
        },
        {
            icon: "🔬",
            title: "Tratamiento de Manchas",
            description: "Protocolos para melasma, hiperpigmentación y manchas solares."
        },
        {
            icon: "⚡",
            title: "Depilación Láser",
            description: "Reducción progresiva de vello con tecnología láser segura para distintos tipos de piel."
        }
    ],

    subtituloSedes: "Centro de Atención",
    descripcionSedes: "Atención presencial en un espacio cómodo, privado y con fácil acceso.",

    sedes: [
        {
            nombre: "Centro Dermatológico Piel & Estética",
            ciudad: "San Cristóbal",
            direccion: "Av. Libertador, Centro Comercial Sambil, Nivel Mezzanina, Local 12",
            dias: "Martes a Sábado",
            horario: "9:00 AM - 6:00 PM",
            telefono: "+58 276 3456789",
            mapaUrl: "https://www.google.com/maps/search/?api=1&query=Av.+Libertador+Centro+Comercial+Sambil+San+Cristobal+Tachira"
        }
    ],

    metodosPago: [
        "Pago Móvil (Bolívares)",
        "Zelle (USD)",
        "Efectivo en Consultorio",
        "Punto de Venta"
    ],

    tituloTestimonios: "Lo Que Dicen Nuestras Pacientes",
    // Testimonios de ejemplo para la demo — revisar normativa local sobre
    // testimonios y antes/después en publicidad médica y estética.
    testimonios: [
        {
            nombre: "Valentina S.",
            servicio: "Tratamiento de Manchas",
            texto: "Tenía manchas por el sol que me acomplejaban muchísimo. En pocas sesiones vi resultados reales, y la Dra. Camila siempre explica cada paso antes de hacerlo.",
            estrellas: 5
        },
        {
            nombre: "Daniela R.",
            servicio: "Toxina Botulínica",
            texto: "Me daba miedo que se viera muy artificial, pero el resultado fue súper natural. Se nota que prioriza la salud de la piel antes que 'exagerar' el procedimiento.",
            estrellas: 5
        },
        {
            nombre: "Andrea L.",
            servicio: "Limpieza Facial Profunda",
            texto: "Voy cada mes y mi piel ha mejorado un montón. El espacio es muy cómodo y siempre hay disponibilidad para agendar por WhatsApp sin complicaciones.",
            estrellas: 5
        }
    ],

    tituloAgendar: "Agendar Consulta Dermatológica",
    etiquetaFormularioNombre: "Nombre y Apellido de la Paciente",
    tipoCitaMensaje: "una consulta dermatológica",
    etiquetaMensajeCliente: "Paciente",

    faqs: [
        {
            pregunta: "¿Cuáles son las formas de pago aceptadas?",
            respuesta: "Aceptamos Pago Móvil, Zelle, efectivo y pago con punto de venta."
        },
        {
            pregunta: "¿Los tratamientos estéticos duelen?",
            respuesta: "La mayoría son mínimamente invasivos y se usan cremas anestésicas cuando es necesario para mayor comodidad."
        },
        {
            pregunta: "¿Cómo puedo cancelar o reprogramar una cita?",
            respuesta: "Puede notificar con al menos 24 horas de anticipación a través de WhatsApp."
        },
        {
            pregunta: "¿Qué debo llevar a mi primera consulta?",
            respuesta: "No necesita traer nada en especial, solo evitar maquillaje el día de la evaluación de piel."
        }
    ]
};
