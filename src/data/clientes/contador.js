// src/data/clientes/contador.js

export const contadorConfig = {
    // Datos Personales y Marca
    nombre: "Lcda. Laura Gonzalez",
    especialidad: "Contaduría Pública y Asesoría Fiscal",
    subtituloHero: "Asesoría Contable y Fiscal Confiable",
    descripcionHero: "Declaraciones, nómina, contabilidad general y asesoría fiscal para independientes y pequeñas empresas.",
    anosExperiencia: "+10",
    whatsappNumero: "584127672176", // Formato internacional sin símbolo +
    localidad: "San Cristobal - Tachira - Venezuela",
    horacierrecitas: 17,

    caracteristicasHero: [
        "Atención personalizada",
        "Entrega de declaraciones a tiempo",
        "Asesoría para independientes y PYMES"
    ],
    trayectoriaLabel: "Años de trayectoria profesional",
    subtituloServicios: "Asesoría Integral",
    tituloServicios: "Servicios Contables y Fiscales",
    descripcionServicios: "Contabilidad clara y asesoría fiscal a tiempo para que tomes mejores decisiones en tu negocio.",
    subtituloSedes: "Oficina de Atención",
    descripcionSedes: "Atención presencial en nuestra oficina con fácil acceso y estacionamiento.",
    tituloTestimonios: "Lo Que Dicen Nuestros Clientes",
    tituloAgendar: "Agendar Asesoría Contable",
    etiquetaFormularioNombre: "Nombre y Apellido del Cliente",
    tipoCitaMensaje: "una asesoría contable",
    etiquetaMensajeCliente: "Cliente",

    redesSociales: {
        instagram: "https://instagram.com/lcda.lauragonzalez",
        tiktok: "",
        linkedin: "https://linkedin.com/in/lcda-laura-gonzalez"
    },

    bio: "Enfocado en simplificarle la parte fiscal y contable a independientes y pequeños negocios, con reportes claros y sin tecnicismos innecesarios, para que siempre sepas en qué está tu situación.",
    fotoDoctor: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
    fotoSobreMi: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop",

    logros: [
        "Licenciada en Contaduría Pública (Universida Catolica del Táchira)",
        "Colegiada en el Colegio de Contadores Públicos del Táchira",
        "+10 años de experiencia con independientes y pequeñas empresas",
        "Especialización en planificación fiscal"
    ],

    servicios: [
        {
            icon: "📊",
            title: "Contabilidad General",
            description: "Registro y organización de tus movimientos contables mes a mes, con reportes claros y al día."
        },
        {
            icon: "🧾",
            title: "Declaraciones de Impuestos",
            description: "Elaboración y presentación de declaraciones para personas naturales y jurídicas, dentro de los plazos legales."
        },
        {
            icon: "💼",
            title: "Asesoría para Independientes",
            description: "Orientación fiscal y contable para profesionales y freelancers que facturan por su cuenta."
        },
        {
            icon: "👥",
            title: "Nómina y Prestaciones Sociales",
            description: "Cálculo de nómina, prestaciones y obligaciones laborales para tu equipo, sin dolores de cabeza."
        },
        {
            icon: "🏢",
            title: "Constitución de Empresas",
            description: "Acompañamiento en el registro y formalización de tu negocio desde cero."
        },
        {
            icon: "📈",
            title: "Planificación Fiscal",
            description: "Estrategias para organizar tus finanzas y cumplir tus obligaciones de forma eficiente."
        }
    ],

    sedes: [
        {
            nombre: "Oficina Contable Peña & Asociados",
            ciudad: "San Cristóbal",
            direccion: "Carrera 13 con Calle 8, Edificio Torre Cristal, Oficina 4-03",
            dias: "Lunes a Viernes",
            horario: "8:00 AM - 4:00 PM",
            telefono: "+58 276 3456789",
            mapaUrl: "https://www.google.com/maps/search/?api=1&query=Carrera+13+con+Calle+8+San+Cristobal+Tachira"
        }
    ],

    metodosPago: [
        "Pago Móvil (Bolívares)",
        "Zelle (USD)",
        "Efectivo en Oficina",
        "Transferencia Bancaria"
    ],

    // Testimonios de ejemplo para la demo.
    testimonios: [
        {
            nombre: "Marisol D.",
            servicio: "Asesoría para Independientes",
            texto: "Antes le tenía pánico a la parte fiscal de facturar por mi cuenta. El Lic. Peña me lo explicó todo sin tecnicismos y ahora tengo mis declaraciones al día sin estrés.",
            estrellas: 5
        },
        {
            nombre: "Jorge M.",
            servicio: "Constitución de Empresas",
            texto: "Me acompañó en todo el proceso de formalizar mi negocio, respondiendo rápido cada duda por WhatsApp. Muy recomendado.",
            estrellas: 5
        },
        {
            nombre: "Carolina V.",
            servicio: "Contabilidad General",
            texto: "Llevo dos años con él llevando la contabilidad de mi pequeño negocio. Siempre entrega los reportes a tiempo y explica todo con claridad.",
            estrellas: 5
        }
    ],

    faqs: [
        {
            pregunta: "¿Cuáles son las formas de pago aceptadas?",
            respuesta: "Aceptamos Pago Móvil, Zelle, efectivo y transferencias bancarias nacionales."
        },
        {
            pregunta: "¿Atienden a personas naturales o solo empresas?",
            respuesta: "Atendemos tanto a personas naturales (independientes, freelancers) como a empresas pequeñas y medianas."
        },
        {
            pregunta: "¿Cómo puedo cancelar o reprogramar una cita?",
            respuesta: "Puede notificar con al menos 24 horas de anticipación a través de WhatsApp."
        },
        {
            pregunta: "¿Qué debo llevar a mi primera consulta?",
            respuesta: "Se recomienda traer cédula o RIF, y de ser posible, sus últimas declaraciones o estados financieros."
        }
    ]
};
