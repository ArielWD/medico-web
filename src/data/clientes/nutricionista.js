// src/data/clientes/nutricionista.js

export const nutricionistaConfig = {
    // Datos Personales y Marca
    nombre: "Lic. Andrea Márquez",
    especialidad: "Nutrición Clínica y Deportiva",
    subtituloHero: "Nutrición Basada en Evidencia",
    descripcionHero: "Planes de alimentación personalizados para bajar de peso, mejorar tu rendimiento deportivo o controlar condiciones como diabetes e hipertensión.",
    anosExperiencia: "+6",
    whatsappNumero: "584127672176", // Formato internacional sin símbolo +
    localidad: "San Cristobal - Tachira - Venezuela",
    horacierrecitas: 17,

    caracteristicasHero: [
        "Planes 100% personalizados",
        "Seguimiento quincenal incluido",
        "Consultas presenciales y online"
    ],

    redesSociales: {
        instagram: "https://instagram.com/lic.andreamarquez",
        tiktok: "https://tiktok.com/@lic.andreamarquez",
        linkedin: ""
    },

    bio: "Especializada en crear planes de alimentación realistas y sostenibles, adaptados al estilo de vida de cada paciente, sin dietas extremas ni prohibiciones innecesarias.",
    fotoDoctor: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop",
    fotoSobreMi: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=800&auto=format&fit=crop",

    logros: [
        "Licenciada en Nutrición y Dietética (Universidad de Los Andes)",
        "Diplomado en Nutrición Deportiva",
        "+6 años de experiencia en consulta clínica privada",
        "Formación continua en nutrición para diabetes e hipertensión"
    ],

    servicios: [
        {
            icon: "🥗",
            title: "Plan de Alimentación Personalizado",
            description: "Diseño de un plan nutricional adaptado a tus objetivos, gustos y rutina diaria."
        },
        {
            icon: "⚖️",
            title: "Control de Peso",
            description: "Acompañamiento integral para bajar o subir de peso de forma saludable y sostenible."
        },
        {
            icon: "🏋️",
            title: "Nutrición Deportiva",
            description: "Planes enfocados en rendimiento, recuperación y composición corporal para deportistas."
        },
        {
            icon: "🩺",
            title: "Nutrición Clínica",
            description: "Manejo nutricional de condiciones como diabetes, hipertensión, colesterol alto y problemas digestivos."
        },
        {
            icon: "📋",
            title: "Evaluación Antropométrica",
            description: "Medición de composición corporal para establecer un punto de partida y medir el progreso."
        },
        {
            icon: "🔄",
            title: "Seguimiento y Ajustes",
            description: "Control periódico del plan para ajustar porciones y estrategias según tus resultados."
        }
    ],

    sedes: [
        {
            nombre: "Consultorio Nutrición Vital",
            ciudad: "San Cristóbal",
            direccion: "Av. Ferrero Tamayo, Torre Empresarial, Consultorio 5-01",
            dias: "Lunes, Martes y Jueves",
            horario: "9:00 AM - 4:00 PM",
            telefono: "+58 276 3456789",
            mapaUrl: "https://www.google.com/maps/search/?api=1&query=Av.+Ferrero+Tamayo+San+Cristobal+Tachira"
        }
    ],

    metodosPago: [
        "Pago Móvil (Bolívares)",
        "Zelle (USD)",
        "Efectivo en Consultorio",
        "Transferencia Bancaria"
    ],

    // Testimonios de ejemplo para la demo — revisar normativa local de
    // publicidad en salud antes de usar testimonios reales o inventados.
    testimonios: [
        {
            nombre: "Fernando T.",
            servicio: "Control de Peso",
            texto: "En 4 meses bajé el peso que llevaba años intentando perder sin resultado, comiendo cosas que realmente disfruto. El seguimiento quincenal ayuda mucho a no abandonar.",
            estrellas: 5
        },
        {
            nombre: "Gabriela N.",
            servicio: "Nutrición Deportiva",
            texto: "Como corredora, el plan que me armó mejoró muchísimo mi energía en los entrenamientos. Explica todo con fundamento, no son dietas genéricas de internet.",
            estrellas: 5
        },
        {
            nombre: "Roberto A.",
            servicio: "Nutrición Clínica",
            texto: "Me ayudó a controlar mis niveles de azúcar con cambios en la alimentación que sí pude sostener en el tiempo. Muy atenta y siempre responde rápido por WhatsApp.",
            estrellas: 5
        }
    ],

    faqs: [
        {
            pregunta: "¿Cuáles son las formas de pago aceptadas?",
            respuesta: "Aceptamos Pago Móvil, Zelle, efectivo y transferencias bancarias nacionales."
        },
        {
            pregunta: "¿Las consultas son solo presenciales?",
            respuesta: "No, ofrecemos consultas presenciales y también por videollamada según tu preferencia."
        },
        {
            pregunta: "¿Cómo puedo cancelar o reprogramar una cita?",
            respuesta: "Puede notificar con al menos 24 horas de anticipación a través de WhatsApp."
        },
        {
            pregunta: "¿Qué debo llevar a mi primera consulta?",
            respuesta: "Se recomienda traer exámenes de laboratorio recientes (si los tiene) y una lista de sus hábitos alimenticios actuales."
        }
    ]
};
