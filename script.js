// Sample property data
const propiedades = [
    {
        id: 1,
        titulo: "Casa Moderna en Tegucigalpa",
        ubicacion: "tegucigalpa",
        precio: 180000,
        tipo: "casa",
        habitaciones: 3,
        banos: 2,
        area: 180,
        imagen: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800",
        imagenes: [
            "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800"
        ],
        videos: [
            "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4"
        ],
        descripcion: "Hermosa casa moderna con acabados de lujo en zona residencial exclusiva.",
        descripcionCompleta: "Esta espectacular casa moderna cuenta con acabados de primera calidad, amplios espacios y una ubicación privilegiada en una de las zonas más exclusivas de Tegucigalpa. Perfecta para familias que buscan comodidad y elegancia.",
        caracteristicas: ["Piscina", "Jardín", "Garaje"]
    },
    {
        id: 2,
        titulo: "Apartamento Ejecutivo",
        ubicacion: "san-pedro-sula",
        precio: 95000,
        tipo: "apartamento",
        habitaciones: 2,
        banos: 2,
        area: 85,
        imagen: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800",
        imagenes: [
            "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
        ],
        videos: [
            "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4"
        ],
        descripcion: "Moderno apartamento en el corazón de San Pedro Sula con todas las comodidades.",
        descripcionCompleta: "Apartamento ejecutivo completamente equipado en el centro de San Pedro Sula. Ideal para profesionales que buscan comodidad y ubicación estratégica cerca de centros comerciales y oficinas.",
        caracteristicas: ["Gimnasio", "Seguridad 24/7", "Balcón"]
    },
    {
        id: 3,
        titulo: "Terreno Comercial",
        ubicacion: "la-ceiba",
        precio: 75000,
        tipo: "terreno",
        habitaciones: 0,
        banos: 0,
        area: 500,
        imagen: "https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=800",
        imagenes: [
            "https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=800"
        ],
        videos: [
            "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_5mb.mp4"
        ],
        descripcion: "Excelente terreno comercial en zona de alto tráfico, ideal para inversión.",
        descripcionCompleta: "Terreno comercial estratégicamente ubicado en una de las avenidas principales de La Ceiba. Perfecto para desarrollo comercial o inversión a largo plazo con alto potencial de crecimiento.",
        caracteristicas: ["Esquinero", "Servicios básicos", "Documentos al día"]
    },
    {
        id: 4,
        titulo: "Casa de Playa",
        ubicacion: "la-ceiba",
        precio: 250000,
        tipo: "casa",
        habitaciones: 4,
        banos: 3,
        area: 220,
        imagen: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
        imagenes: [
            "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=800"
        ],
        videos: [
            "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
            "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4"
        ],
        descripcion: "Espectacular casa frente al mar con vista panorámica al océano.",
        descripcionCompleta: "Casa de ensueño frente al mar Caribe con acceso privado a la playa. Diseño arquitectónico único que maximiza las vistas al océano desde cada habitación. Perfecta para vacaciones o residencia permanente.",
        caracteristicas: ["Vista al mar", "Muelle privado", "Terraza"]
    },
    {
        id: 5,
        titulo: "Oficina Comercial",
        ubicacion: "tegucigalpa",
        precio: 120000,
        tipo: "comercial",
        habitaciones: 0,
        banos: 2,
        area: 150,
        imagen: "https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=800",
        imagenes: [
            "https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=800"
        ],
        videos: [
            "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_5mb.mp4"
        ],
        descripcion: "Moderna oficina en edificio corporativo con excelente ubicación.",
        descripcionCompleta: "Oficina corporativa en edificio de clase A ubicado en el distrito financiero de Tegucigalpa. Espacios amplios y modernos, ideal para empresas que buscan proyectar una imagen profesional.",
        caracteristicas: ["Aire acondicionado", "Estacionamiento", "Recepción"]
    },
    {
        id: 6,
        titulo: "Apartamento Familiar",
        ubicacion: "choloma",
        precio: 65000,
        tipo: "apartamento",
        habitaciones: 3,
        banos: 2,
        area: 95,
        imagen: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
        imagenes: [
            "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800"
        ],
        videos: [
            "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4"
        ],
        descripcion: "Cómodo apartamento familiar en residencial con áreas verdes.",
        descripcionCompleta: "Apartamento familiar en complejo residencial seguro con amplias áreas verdes y recreativas. Perfecto para familias jóvenes que buscan un hogar cómodo y seguro a precio accesible.",
        caracteristicas: ["Área de juegos", "Lavandería", "Seguridad"]
    }
];

let propiedadesFiltradas = [...propiedades];
let propiedadesMostradas = 0;
const propiedadesPorPagina = 6;

// DOM Elements
const propertiesGrid = document.getElementById('propertiesGrid');
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    cargarPropiedades();
    initializeNavigation();
    initializeContactForm();
    initializeScrollEffects();
});

// Navigation functionality
function initializeNavigation() {
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Load and display properties
function cargarPropiedades() {
    const propiedadesParaMostrar = propiedadesFiltradas.slice(0, propiedadesPorPagina);
    
    if (propiedadesMostradas === 0) {
        propertiesGrid.innerHTML = '';
    }
    
    propiedadesParaMostrar.forEach(propiedad => {
        const propertyCard = crearTarjetaPropiedad(propiedad);
        propertiesGrid.appendChild(propertyCard);
    });
    
    propiedadesMostradas = propiedadesParaMostrar.length;
    
    // Hide load more button if all properties are shown
    const loadMoreBtn = document.querySelector('.load-more');
    if (propiedadesMostradas >= propiedadesFiltradas.length) {
        loadMoreBtn.style.display = 'none';
    } else {
        loadMoreBtn.style.display = 'block';
    }
}

// Create property card HTML
function crearTarjetaPropiedad(propiedad) {
    const card = document.createElement('div');
    card.className = 'property-card';
    card.onclick = () => mostrarDetallePropiedad(propiedad);
    
    const ubicacionTexto = {
        'tegucigalpa': 'Tegucigalpa',
        'san-pedro-sula': 'San Pedro Sula',
        'la-ceiba': 'La Ceiba',
        'choloma': 'Choloma'
    };
    
    const tipoTexto = {
        'casa': 'Casa',
        'apartamento': 'Apartamento',
        'terreno': 'Terreno',
        'comercial': 'Comercial'
    };
    
    card.innerHTML = `
        <div class="property-image">
            <img src="${propiedad.imagen}" alt="${propiedad.titulo}" loading="lazy">
            <div class="property-badge">${tipoTexto[propiedad.tipo]}</div>
            <div class="property-price">$${propiedad.precio.toLocaleString()}</div>
        </div>
        <div class="property-content">
            <h3 class="property-title">${propiedad.titulo}</h3>
            <div class="property-location">
                <i class="fas fa-map-marker-alt"></i>
                ${ubicacionTexto[propiedad.ubicacion]}
            </div>
            <div class="property-features">
                ${propiedad.habitaciones > 0 ? `
                    <div class="feature">
                        <i class="fas fa-bed"></i>
                        ${propiedad.habitaciones}
                    </div>
                ` : ''}
                ${propiedad.banos > 0 ? `
                    <div class="feature">
                        <i class="fas fa-bath"></i>
                        ${propiedad.banos}
                    </div>
                ` : ''}
                <div class="feature">
                    <i class="fas fa-ruler-combined"></i>
                    ${propiedad.area}m²
                </div>
            </div>
            <p class="property-description">${propiedad.descripcion}</p>
        </div>
    `;
    
    return card;
}

// Filter properties
function filtrarPropiedades() {
    const tipoPropiedad = document.getElementById('tipoPropiedad').value;
    const precioMax = document.getElementById('precioMax').value;
    const ubicacion = document.getElementById('ubicacion').value;
    const habitaciones = document.getElementById('habitaciones').value;
    
    propiedadesFiltradas = propiedades.filter(propiedad => {
        let cumpleFiltros = true;
        
        if (tipoPropiedad && propiedad.tipo !== tipoPropiedad) {
            cumpleFiltros = false;
        }
        
        if (precioMax && propiedad.precio > parseInt(precioMax)) {
            cumpleFiltros = false;
        }
        
        if (ubicacion && propiedad.ubicacion !== ubicacion) {
            cumpleFiltros = false;
        }
        
        if (habitaciones && propiedad.habitaciones < parseInt(habitaciones)) {
            cumpleFiltros = false;
        }
        
        return cumpleFiltros;
    });
    
    propiedadesMostradas = 0;
    cargarPropiedades();
    
    // Scroll to properties section
    document.getElementById('propiedades').scrollIntoView({
        behavior: 'smooth'
    });
}

// Load more properties
function cargarMasPropiedades() {
    const siguientesPropiedades = propiedadesFiltradas.slice(
        propiedadesMostradas, 
        propiedadesMostradas + propiedadesPorPagina
    );
    
    siguientesPropiedades.forEach(propiedad => {
        const propertyCard = crearTarjetaPropiedad(propiedad);
        propertiesGrid.appendChild(propertyCard);
    });
    
    propiedadesMostradas += siguientesPropiedades.length;
    
    // Hide load more button if all properties are shown
    const loadMoreBtn = document.querySelector('.load-more');
    if (propiedadesMostradas >= propiedadesFiltradas.length) {
        loadMoreBtn.style.display = 'none';
    }
}

// Show property details (modal or new page)
function mostrarDetallePropiedad(propiedad) {
    abrirModalPropiedad(propiedad);
}

// Modal functionality
function abrirModalPropiedad(propiedad) {
    const ubicacionTexto = {
        'tegucigalpa': 'Tegucigalpa',
        'san-pedro-sula': 'San Pedro Sula',
        'la-ceiba': 'La Ceiba',
        'choloma': 'Choloma'
    };
    
    const tipoTexto = {
        'casa': 'Casa',
        'apartamento': 'Apartamento',
        'terreno': 'Terreno',
        'comercial': 'Comercial'
    };

    // Create modal HTML
    const modalHTML = `
        <div class="modal-overlay" id="propertyModal">
            <div class="modal-content">
                <div class="modal-header">
                    <h2>${propiedad.titulo}</h2>
                    <button class="modal-close" onclick="cerrarModal()">&times;</button>
                </div>
                <div class="modal-body">
                    <div class="modal-images">
                        <div class="main-image">
                            <img src="${propiedad.imagenes[0]}" alt="${propiedad.titulo}" id="mainImage" style="display: block;">
                            <video id="mainVideo" controls style="display: none; width: 100%; height: 400px; object-fit: cover; border-radius: 12px;">
                                <source src="" type="video/mp4">
                                Tu navegador no soporta videos HTML5.
                            </video>
                        </div>
                        <div class="media-thumbnails">
                            ${propiedad.imagenes.map((img, index) => `
                                <div class="thumbnail-container">
                                    <img src="${img}" alt="Imagen ${index + 1}" 
                                         onclick="cambiarMediaPrincipal('${img}', 'image')"
                                         class="thumbnail ${index === 0 ? 'active' : ''}"
                                         data-type="image">
                                </div>
                            `).join('')}
                            ${propiedad.videos ? propiedad.videos.map((video, index) => `
                                <div class="thumbnail-container">
                                    <div class="video-thumbnail" 
                                         onclick="cambiarMediaPrincipal('${video}', 'video')"
                                         data-type="video">
                                        <i class="fas fa-play-circle"></i>
                                        <span>Video ${index + 1}</span>
                                    </div>
                                </div>
                            `).join('') : ''}
                        </div>
                    </div>
                    <div class="modal-details">
                        <div class="property-info">
                            <div class="price-badge">$${propiedad.precio.toLocaleString()}</div>
                            <div class="property-meta">
                                <div class="meta-item">
                                    <i class="fas fa-map-marker-alt"></i>
                                    <span>${ubicacionTexto[propiedad.ubicacion]}</span>
                                </div>
                                <div class="meta-item">
                                    <i class="fas fa-home"></i>
                                    <span>${tipoTexto[propiedad.tipo]}</span>
                                </div>
                                <div class="meta-item">
                                    <i class="fas fa-ruler-combined"></i>
                                    <span>${propiedad.area}m²</span>
                                </div>
                                ${propiedad.habitaciones > 0 ? `
                                    <div class="meta-item">
                                        <i class="fas fa-bed"></i>
                                        <span>${propiedad.habitaciones} habitaciones</span>
                                    </div>
                                ` : ''}
                                ${propiedad.banos > 0 ? `
                                    <div class="meta-item">
                                        <i class="fas fa-bath"></i>
                                        <span>${propiedad.banos} baños</span>
                                    </div>
                                ` : ''}
                            </div>
                        </div>
                        <div class="property-description">
                            <h3>Descripción</h3>
                            <p>${propiedad.descripcionCompleta}</p>
                        </div>
                        <div class="property-features">
                            <h3>Características</h3>
                            <ul>
                                ${propiedad.caracteristicas.map(caracteristica => `
                                    <li><i class="fas fa-check"></i> ${caracteristica}</li>
                                `).join('')}
                            </ul>
                        </div>
                        <div class="modal-actions">
                            <button class="btn btn-primary" onclick="contactarPorPropiedad('${propiedad.titulo}')">
                                <i class="fas fa-phone"></i> Contactar Asesor
                            </button>
                            <button class="btn btn-outline" onclick="programarVisita('${propiedad.titulo}')">
                                <i class="fas fa-calendar"></i> Programar Visita
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Add modal to body
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
    
    // Add click outside to close
    document.getElementById('propertyModal').addEventListener('click', function(e) {
        if (e.target === this) {
            cerrarModal();
        }
    });
}

function cerrarModal() {
    const modal = document.getElementById('propertyModal');
    if (modal) {
        modal.remove();
        document.body.style.overflow = 'auto';
    }
}

function cambiarMediaPrincipal(mediaSrc, mediaType) {
    const mainImage = document.getElementById('mainImage');
    const mainVideo = document.getElementById('mainVideo');
    const thumbnails = document.querySelectorAll('.thumbnail, .video-thumbnail');
    
    if (mediaType === 'image') {
        mainImage.src = mediaSrc;
        mainImage.style.display = 'block';
        mainVideo.style.display = 'none';
        mainVideo.pause();
    } else if (mediaType === 'video') {
        mainVideo.src = mediaSrc;
        mainVideo.style.display = 'block';
        mainImage.style.display = 'none';
    }
    
    // Update active thumbnail
    thumbnails.forEach(thumb => {
        thumb.classList.remove('active');
    });
    
    // Find and activate the clicked thumbnail
    thumbnails.forEach(thumb => {
        if ((mediaType === 'image' && thumb.src === mediaSrc) || 
            (mediaType === 'video' && thumb.getAttribute('onclick') && thumb.getAttribute('onclick').includes(mediaSrc))) {
            thumb.classList.add('active');
        }
    });
}

function contactarPorPropiedad(titulo) {
    // Scroll to contact section and pre-fill form
    cerrarModal();
    document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' });
    
    // Pre-fill contact form
    setTimeout(() => {
        const messageTextarea = document.querySelector('.contact-form textarea');
        if (messageTextarea) {
            messageTextarea.value = `Hola Multiservice Bienes Raíces, estoy interesado en la propiedad: ${titulo}. Me gustaría recibir más información.`;
        }
    }, 1000);
}

function programarVisita(titulo) {
    mostrarModalProgramarCita(titulo);
}

// Modal para programar cita con Google Calendar
function mostrarModalProgramarCita(tituloPropiedad) {
    const modalHTML = `
        <div class="modal-overlay" id="appointmentModal">
            <div class="modal-content appointment-modal">
                <div class="modal-header">
                    <h2><i class="fas fa-calendar-plus"></i> Programar Visita</h2>
                    <button class="modal-close" onclick="cerrarModalCita()">&times;</button>
                </div>
                <div class="modal-body">
                    <div class="appointment-info">
                        <h3>Propiedad: ${tituloPropiedad}</h3>
                        <p>Programa una cita para visitar esta propiedad con uno de nuestros asesores especializados.</p>
                    </div>
                    
                    <form class="appointment-form" id="appointmentForm">
                        <div class="form-row">
                            <div class="form-group">
                                <label for="clientName">Nombre completo *</label>
                                <input type="text" id="clientName" name="clientName" required>
                            </div>
                            <div class="form-group">
                                <label for="clientEmail">Correo electrónico *</label>
                                <input type="email" id="clientEmail" name="clientEmail" required>
                            </div>
                        </div>
                        
                        <div class="form-row">
                            <div class="form-group">
                                <label for="clientPhone">Teléfono *</label>
                                <input type="tel" id="clientPhone" name="clientPhone" required>
                            </div>
                            <div class="form-group">
                                <label for="preferredTime">Horario preferido</label>
                                <select id="preferredTime" name="preferredTime">
                                    <option value="morning">Mañana (8:00 AM - 12:00 PM)</option>
                                    <option value="afternoon">Tarde (1:00 PM - 5:00 PM)</option>
                                    <option value="evening">Noche (6:00 PM - 8:00 PM)</option>
                                </select>
                            </div>
                        </div>
                        
                        <div class="form-group">
                            <label for="appointmentDate">Fecha preferida *</label>
                            <input type="date" id="appointmentDate" name="appointmentDate" required>
                        </div>
                        
                        <div class="form-group">
                            <label for="appointmentNotes">Notas adicionales</label>
                            <textarea id="appointmentNotes" name="appointmentNotes" rows="3" 
                                placeholder="Menciona cualquier requerimiento especial o pregunta específica..."></textarea>
                        </div>
                        
                        <div class="appointment-actions">
                            <button type="button" class="btn btn-outline" onclick="cerrarModalCita()">
                                Cancelar
                            </button>
                            <button type="submit" class="btn btn-primary">
                                <i class="fas fa-calendar-check"></i> Programar Cita
                            </button>
                        </div>
                    </form>
                    
                    <div class="appointment-alternatives">
                        <p>¿Prefieres otro método?</p>
                        <div class="alternative-buttons">
                            <button type="button" class="btn btn-outline btn-small" onclick="llamarDirecto()">
                                <i class="fas fa-phone"></i> Llamar Ahora
                            </button>
                            <button type="button" class="btn btn-outline btn-small" onclick="whatsappCita('${tituloPropiedad}')">
                                <i class="fab fa-whatsapp"></i> WhatsApp
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    document.body.style.overflow = 'hidden';
    
    // Set minimum date to today
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    document.getElementById('appointmentDate').min = tomorrow.toISOString().split('T')[0];
    
    // Add form submit handler
    document.getElementById('appointmentForm').addEventListener('submit', function(e) {
        e.preventDefault();
        procesarCita(tituloPropiedad);
    });
    
    // Close on outside click
    document.getElementById('appointmentModal').addEventListener('click', function(e) {
        if (e.target === this) {
            cerrarModalCita();
        }
    });
}

// Procesar la cita y crear evento en Google Calendar
function procesarCita(tituloPropiedad) {
    const form = document.getElementById('appointmentForm');
    const formData = new FormData(form);
    
    const clientName = formData.get('clientName');
    const clientEmail = formData.get('clientEmail');
    const clientPhone = formData.get('clientPhone');
    const preferredTime = formData.get('preferredTime');
    const appointmentDate = formData.get('appointmentDate');
    const appointmentNotes = formData.get('appointmentNotes');
    
    // Validar campos requeridos
    if (!clientName || !clientEmail || !clientPhone || !appointmentDate) {
        mostrarNotificacion('Por favor, completa todos los campos requeridos.', 'error');
        return;
    }
    
    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(clientEmail)) {
        mostrarNotificacion('Por favor, ingresa un correo electrónico válido.', 'error');
        return;
    }
    
    // Validar que la fecha no sea en el pasado
    const selectedDate = new Date(appointmentDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (selectedDate <= today) {
        mostrarNotificacion('Por favor, selecciona una fecha futura.', 'error');
        return;
    }
    
    // Mostrar loading
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Programando...';
    submitBtn.disabled = true;
    
    // Crear evento en Google Calendar
    crearEventoGoogleCalendar({
        tituloPropiedad,
        clientName,
        clientEmail,
        clientPhone,
        preferredTime,
        appointmentDate,
        appointmentNotes
    }, submitBtn, originalText);
}

// Crear evento en Google Calendar
function crearEventoGoogleCalendar(datosEvento, submitBtn, originalText) {
    const {
        tituloPropiedad,
        clientName,
        clientEmail,
        clientPhone,
        preferredTime,
        appointmentDate,
        appointmentNotes
    } = datosEvento;
    
    // Configurar horarios según preferencia
    const timeSlots = {
        'morning': { start: '09:00', end: '10:00' },
        'afternoon': { start: '14:00', end: '15:00' },
        'evening': { start: '18:00', end: '19:00' }
    };
    
    const selectedSlot = timeSlots[preferredTime] || timeSlots.morning;
    
    // Crear fechas de inicio y fin
    const startDateTime = new Date(`${appointmentDate}T${selectedSlot.start}:00`);
    const endDateTime = new Date(`${appointmentDate}T${selectedSlot.end}:00`);
    
    // Formatear fechas para Google Calendar (formato ISO)
    const startISO = startDateTime.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    const endISO = endDateTime.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    
    // Crear título y descripción del evento
    const eventTitle = `Visita a Propiedad: ${tituloPropiedad}`;
    const eventDescription = `
VISITA A PROPIEDAD - MULTISERVICE BIENES RAÍCES

Propiedad: ${tituloPropiedad}
Cliente: ${clientName}
Email: ${clientEmail}
Teléfono: ${clientPhone}

${appointmentNotes ? `Notas adicionales: ${appointmentNotes}` : ''}

---
Multiservice Bienes Raíces
Tel: +504 9895-6357
Email: multiservicebienesraices@gmail.com
    `.trim();
    
    const eventLocation = 'Tegucigalpa, Honduras (Ubicación específica por confirmar)';
    
    // Crear URL de Google Calendar
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventTitle)}&dates=${startISO}/${endISO}&details=${encodeURIComponent(eventDescription)}&location=${encodeURIComponent(eventLocation)}&sf=true&output=xml`;
    
    // Simular procesamiento (en un caso real, aquí enviarías los datos al servidor)
    setTimeout(() => {
        // Abrir Google Calendar en nueva ventana
        const calendarWindow = window.open(googleCalendarUrl, '_blank');
        
        if (calendarWindow) {
            // Enviar notificación por email al equipo de ventas
            enviarNotificacionCita(datosEvento);
            
            // Mostrar confirmación
            mostrarConfirmacionCita(datosEvento);
            
            // Cerrar modal de cita
            cerrarModalCita();
        } else {
            // Si el popup fue bloqueado, mostrar enlace manual
            mostrarEnlaceCalendario(googleCalendarUrl, datosEvento);
        }
        
        // Restaurar botón
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        
    }, 1500);
}

// Enviar notificación de cita al equipo de ventas
function enviarNotificacionCita(datosEvento) {
    const {
        tituloPropiedad,
        clientName,
        clientEmail,
        clientPhone,
        preferredTime,
        appointmentDate,
        appointmentNotes
    } = datosEvento;
    
    const timeLabels = {
        'morning': 'Mañana (8:00 AM - 12:00 PM)',
        'afternoon': 'Tarde (1:00 PM - 5:00 PM)',
        'evening': 'Noche (6:00 PM - 8:00 PM)'
    };
    
    const asunto = `Nueva Cita Programada - ${tituloPropiedad}`;
    const cuerpo = `
NUEVA CITA PROGRAMADA - MULTISERVICE BIENES RAÍCES

DETALLES DE LA CITA:
📅 Fecha: ${new Date(appointmentDate).toLocaleDateString('es-HN', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    })}
⏰ Horario: ${timeLabels[preferredTime]}
🏠 Propiedad: ${tituloPropiedad}

DATOS DEL CLIENTE:
👤 Nombre: ${clientName}
📧 Email: ${clientEmail}
📞 Teléfono: ${clientPhone}

${appointmentNotes ? `📝 Notas adicionales: ${appointmentNotes}` : ''}

ACCIONES REQUERIDAS:
✅ Confirmar disponibilidad del asesor
✅ Contactar al cliente para confirmar la cita
✅ Preparar documentación de la propiedad
✅ Coordinar llaves y acceso a la propiedad

---
Este mensaje fue generado automáticamente desde el sitio web.
Multiservice Bienes Raíces - Sistema de Citas
    `.trim();
    
    const mailtoLink = `mailto:multiservicebienesraices@gmail.com?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;
    
    // Abrir cliente de correo en segundo plano
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = mailtoLink;
    document.body.appendChild(iframe);
    
    // Remover iframe después de un momento
    setTimeout(() => {
        document.body.removeChild(iframe);
    }, 1000);
}

// Mostrar confirmación de cita programada
function mostrarConfirmacionCita(datosEvento) {
    const { clientName, appointmentDate, preferredTime, tituloPropiedad } = datosEvento;
    
    const timeLabels = {
        'morning': 'Mañana',
        'afternoon': 'Tarde', 
        'evening': 'Noche'
    };
    
    const modalHTML = `
        <div class="modal-overlay" id="confirmationCitaModal">
            <div class="confirmation-modal">
                <div class="confirmation-content">
                    <div class="confirmation-icon">
                        <i class="fas fa-calendar-check"></i>
                    </div>
                    <h2>¡Cita Programada!</h2>
                    <p>Hola <strong>${clientName}</strong>, tu cita ha sido programada exitosamente.</p>
                    
                    <div class="confirmation-details">
                        <div class="detail-item">
                            <i class="fas fa-home"></i>
                            <span><strong>Propiedad:</strong> ${tituloPropiedad}</span>
                        </div>
                        <div class="detail-item">
                            <i class="fas fa-calendar"></i>
                            <span><strong>Fecha:</strong> ${new Date(appointmentDate).toLocaleDateString('es-HN', { 
                                weekday: 'long', 
                                year: 'numeric', 
                                month: 'long', 
                                day: 'numeric' 
                            })}</span>
                        </div>
                        <div class="detail-item">
                            <i class="fas fa-clock"></i>
                            <span><strong>Horario:</strong> ${timeLabels[preferredTime]}</span>
                        </div>
                        <div class="detail-item">
                            <i class="fas fa-phone"></i>
                            <span><strong>Confirmación:</strong> Te llamaremos 24 horas antes</span>
                        </div>
                    </div>
                    
                    <div class="confirmation-actions">
                        <button class="btn btn-primary" onclick="cerrarConfirmacionCita()">
                            <i class="fas fa-check"></i> Entendido
                        </button>
                        <button class="btn btn-outline" onclick="compartirCita()">
                            <i class="fas fa-share"></i> Compartir
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Auto close after 15 seconds
    setTimeout(() => {
        cerrarConfirmacionCita();
    }, 15000);
}

// Mostrar enlace de calendario si el popup fue bloqueado
function mostrarEnlaceCalendario(googleCalendarUrl, datosEvento) {
    const modalHTML = `
        <div class="modal-overlay" id="calendarLinkModal">
            <div class="confirmation-modal">
                <div class="confirmation-content">
                    <div class="confirmation-icon" style="background: linear-gradient(135deg, #ff9800, #f57c00);">
                        <i class="fas fa-external-link-alt"></i>
                    </div>
                    <h2>Abrir Google Calendar</h2>
                    <p>Para completar la programación de tu cita, haz clic en el botón de abajo para abrir Google Calendar.</p>
                    
                    <div class="confirmation-actions">
                        <a href="${googleCalendarUrl}" target="_blank" class="btn btn-primary" onclick="cerrarEnlaceCalendario()">
                            <i class="fab fa-google"></i> Abrir Google Calendar
                        </a>
                        <button class="btn btn-outline" onclick="cerrarEnlaceCalendario()">
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);
}

// Funciones para cerrar modales
function cerrarModalCita() {
    const modal = document.getElementById('appointmentModal');
    if (modal) {
        modal.remove();
        document.body.style.overflow = 'auto';
    }
}

function cerrarConfirmacionCita() {
    const modal = document.getElementById('confirmationCitaModal');
    if (modal) {
        modal.remove();
        document.body.style.overflow = 'auto';
    }
}

function cerrarEnlaceCalendario() {
    const modal = document.getElementById('calendarLinkModal');
    if (modal) {
        modal.remove();
        document.body.style.overflow = 'auto';
    }
}

// Funciones auxiliares para contacto directo
function llamarDirecto() {
    window.location.href = 'tel:+50422345678';
}

function whatsappCita(tituloPropiedad) {
    const numeroWhatsApp = '50498765432';
    const mensaje = `Hola Multiservice Bienes Raíces! Me interesa programar una visita para la propiedad: ${tituloPropiedad}. ¿Cuándo podríamos coordinar una cita?`;
    const whatsappURL = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
    window.open(whatsappURL, '_blank');
    cerrarModalCita();
}

function compartirCita() {
    if (navigator.share) {
        navigator.share({
            title: 'Cita Programada - Multiservice Bienes Raíces',
            text: 'He programado una cita para visitar una propiedad con Multiservice Bienes Raíces.',
            url: window.location.href
        });
    } else {
        // Fallback para navegadores que no soportan Web Share API
        const url = window.location.href;
        navigator.clipboard.writeText(url).then(() => {
            mostrarNotificacion('Enlace copiado al portapapeles', 'info');
        });
    }
}

// Contact form functionality
function initializeContactForm() {
    const contactForm = document.querySelector('.contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const nombre = contactForm.querySelector('input[name="nombre"]').value;
        const email = contactForm.querySelector('input[name="email"]').value;
        const telefono = contactForm.querySelector('input[name="telefono"]').value;
        const tipoConsulta = contactForm.querySelector('select[name="tipo_consulta"]').value;
        const mensaje = contactForm.querySelector('textarea[name="mensaje"]').value;
        
        // Validate form
        if (!nombre || !email || !telefono || !tipoConsulta || !mensaje) {
            mostrarNotificacion('Por favor, completa todos los campos.', 'error');
            return;
        }
        
        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            mostrarNotificacion('Por favor, ingresa un correo electrónico válido.', 'error');
            return;
        }
        
        // Show loading state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Enviando...';
        submitBtn.disabled = true;
        
        // Usar Mailto como método principal
        enviarEmailConMailto(nombre, email, telefono, tipoConsulta, mensaje, submitBtn, originalText);
    });
}

// Opción 1: Envío con EmailJS (Servicio gratuito y confiable)
function enviarEmailConEmailJS(nombre, email, telefono, tipoConsulta, mensaje, submitBtn, originalText) {
    // Configuración de EmailJS
    const serviceID = 'service_multiservice'; // Necesitas configurar esto en EmailJS
    const templateID = 'template_contacto'; // Necesitas configurar esto en EmailJS
    const userID = 'tu_user_id_emailjs'; // Tu User ID de EmailJS
    
    const templateParams = {
        from_name: nombre,
        from_email: email,
        phone: telefono,
        inquiry_type: tipoConsulta,
        message: mensaje,
        to_email: 'multiservicebienesraices@gmail.com',
        reply_to: email
    };
    
    // Cargar EmailJS si no está cargado
    if (typeof emailjs === 'undefined') {
        // Cargar EmailJS dinámicamente
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
        script.onload = function() {
            emailjs.init(userID);
            enviarConEmailJS();
        };
        script.onerror = function() {
            console.error('Error al cargar EmailJS');
            // Fallback a mailto
            enviarEmailConMailto(nombre, email, telefono, tipoConsulta, mensaje, submitBtn, originalText);
        };
        document.head.appendChild(script);
    } else {
        enviarConEmailJS();
    }
    
    function enviarConEmailJS() {
        emailjs.send(serviceID, templateID, templateParams)
            .then(function(response) {
                console.log('Email enviado exitosamente:', response);
                mostrarModalConfirmacion(nombre);
                document.querySelector('.contact-form').reset();
            })
            .catch(function(error) {
                console.error('Error al enviar email:', error);
                // Fallback a mailto
                enviarEmailConMailto(nombre, email, telefono, tipoConsulta, mensaje, submitBtn, originalText);
            })
            .finally(function() {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            });
    }
}

// Opción 2: Envío con Mailto (Abre el cliente de correo del usuario)
function enviarEmailConMailto(nombre, email, telefono, tipoConsulta, mensaje, submitBtn, originalText) {
    const tipoTexto = {
        'compra': 'Compra de propiedad',
        'venta': 'Venta de propiedad',
        'alquiler': 'Alquiler',
        'inversion': 'Inversión'
    };
    
    const asunto = `Consulta de ${tipoTexto[tipoConsulta] || tipoConsulta} - ${nombre}`;
    const cuerpo = `
Hola Multiservice Bienes Raíces,

He enviado una consulta desde su sitio web con los siguientes datos:

Nombre: ${nombre}
Email: ${email}
Teléfono: ${telefono}
Tipo de consulta: ${tipoTexto[tipoConsulta] || tipoConsulta}

Mensaje:
${mensaje}

Espero su pronta respuesta.

Saludos cordiales,
${nombre}
    `.trim();
    
    const mailtoLink = `mailto:multiservicebienesraices@gmail.com?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;
    
    // Abrir cliente de correo
    window.location.href = mailtoLink;
    
    // Mostrar confirmación después de un breve delay
    setTimeout(() => {
        mostrarModalConfirmacion(nombre);
        document.querySelector('.contact-form').reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 1000);
}

// Opción 3: Web3Forms (Alternativa a Formspree)
function enviarEmailConWeb3Forms(nombre, email, telefono, tipoConsulta, mensaje, submitBtn, originalText) {
    const formData = new FormData();
    formData.append('access_key', 'tu_access_key_web3forms'); // Necesitas registrarte en web3forms.com
    formData.append('name', nombre);
    formData.append('email', email);
    formData.append('phone', telefono);
    formData.append('subject', `Consulta de ${tipoConsulta} - Multiservice Bienes Raíces`);
    formData.append('message', mensaje);
    formData.append('redirect', 'false');
    
    fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            mostrarModalConfirmacion(nombre);
            document.querySelector('.contact-form').reset();
        } else {
            throw new Error(data.message || 'Error al enviar el mensaje');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        mostrarNotificacion('Error al enviar el mensaje. Intenta nuevamente.', 'error');
    })
    .finally(() => {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    });
}

// Función para enviar notificación por WhatsApp (Opción adicional)
function enviarPorWhatsApp(nombre, email, telefono, tipoConsulta, mensaje) {
    const numeroWhatsApp = '50498765432'; // Cambia por tu número de WhatsApp
    const tipoTexto = {
        'compra': 'Compra de propiedad',
        'venta': 'Venta de propiedad',
        'alquiler': 'Alquiler',
        'inversion': 'Inversión'
    };
    
    const mensajeWhatsApp = `
Hola! Soy ${nombre} y me interesa ${tipoTexto[tipoConsulta] || tipoConsulta}.

📧 Email: ${email}
📞 Teléfono: ${telefono}

💬 Mensaje: ${mensaje}
    `.trim();
    
    const whatsappURL = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensajeWhatsApp)}`;
    window.open(whatsappURL, '_blank');
}

// Funciones para botones alternativos de contacto
function abrirWhatsApp() {
    const numeroWhatsApp = '50498956357'; // Cambia por tu número real
    const mensaje = 'Hola Multiservice Bienes Raíces, me interesa conocer más sobre sus propiedades disponibles.';
    const whatsappURL = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
    window.open(whatsappURL, '_blank');
}

function abrirEmail() {
    const asunto = 'Consulta sobre propiedades - Multiservice Bienes Raíces';
    const cuerpo = `
Hola Multiservice Bienes Raíces,

Me interesa conocer más información sobre sus propiedades disponibles.

Por favor, contáctenme para coordinar una cita.

Saludos cordiales.
    `.trim();
    
    const mailtoLink = `mailto:multiservicebienesraices@gmail.com?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;
    window.location.href = mailtoLink;
}

// Show confirmation modal
function mostrarModalConfirmacion(nombre) {
    const modalHTML = `
        <div class="modal-overlay" id="confirmationModal">
            <div class="confirmation-modal">
                <div class="confirmation-content">
                    <div class="confirmation-icon">
                        <i class="fas fa-check-circle"></i>
                    </div>
                    <h2>¡Mensaje Enviado!</h2>
                    <p>Hola <strong>${nombre}</strong>, hemos recibido tu consulta exitosamente.</p>
                    <p>Nuestro equipo de Multiservice Bienes Raíces se pondrá en contacto contigo en las próximas 24 horas.</p>
                    <div class="confirmation-details">
                        <div class="detail-item">
                            <i class="fas fa-clock"></i>
                            <span>Tiempo de respuesta: 24 horas</span>
                        </div>
                        <div class="detail-item">
                            <i class="fas fa-phone"></i>
                            <span>También puedes llamarnos: +504 2234-5678</span>
                        </div>
                        <div class="detail-item">
                            <i class="fas fa-envelope"></i>
                            <span>Correo de confirmación enviado</span>
                        </div>
                    </div>
                    <button class="btn btn-primary" onclick="cerrarModalConfirmacion()">
                        Entendido
                    </button>
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    document.body.style.overflow = 'hidden';
    
    // Auto close after 10 seconds
    setTimeout(() => {
        cerrarModalConfirmacion();
    }, 10000);
}

// Close confirmation modal
function cerrarModalConfirmacion() {
    const modal = document.getElementById('confirmationModal');
    if (modal) {
        modal.remove();
        document.body.style.overflow = 'auto';
    }
}

// Show notification
function mostrarNotificacion(mensaje, tipo = 'info') {
    const notificationHTML = `
        <div class="notification notification-${tipo}" id="notification">
            <div class="notification-content">
                <i class="fas fa-${tipo === 'error' ? 'exclamation-triangle' : 'info-circle'}"></i>
                <span>${mensaje}</span>
                <button class="notification-close" onclick="cerrarNotificacion()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        </div>
    `;
    
    // Remove existing notification
    const existingNotification = document.getElementById('notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    document.body.insertAdjacentHTML('beforeend', notificationHTML);
    
    // Auto close after 5 seconds
    setTimeout(() => {
        cerrarNotificacion();
    }, 5000);
}

// Close notification
function cerrarNotificacion() {
    const notification = document.getElementById('notification');
    if (notification) {
        notification.classList.add('notification-fade-out');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }
}

// Scroll effects
function initializeScrollEffects() {
    // Header background on scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = 'none';
        }
    });
    
    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.service-card, .property-card, .about-content, .contact-content').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Hero button functionality
document.addEventListener('DOMContentLoaded', function() {
    const verPropiedadesBtn = document.querySelector('.hero-buttons .btn-primary');
    const contactarAsesorBtn = document.querySelector('.hero-buttons .btn-secondary');
    
    if (verPropiedadesBtn) {
        verPropiedadesBtn.addEventListener('click', function() {
            document.getElementById('propiedades').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
    
    if (contactarAsesorBtn) {
        contactarAsesorBtn.addEventListener('click', function() {
            document.getElementById('contacto').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
});

// Utility functions
function formatPrice(price) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(price);
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Search functionality with debounce
const debouncedFilter = debounce(filtrarPropiedades, 300);

// Add event listeners to filter inputs for real-time filtering
document.addEventListener('DOMContentLoaded', function() {
    const filterInputs = document.querySelectorAll('#tipoPropiedad, #precioMax, #ubicacion, #habitaciones');
    
    filterInputs.forEach(input => {
        input.addEventListener('change', debouncedFilter);
    });
});