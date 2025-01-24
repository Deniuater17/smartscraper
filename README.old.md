# SmartScraper
  /src
    /components          # Componentes reutilizables de la UI
      Chart.js           # Gráficos basados en Chart.js
      ProductList.js     # Componente para listar productos
      ProductDetails.js  # Detalles de un producto
    /pages               # Páginas principales de la aplicación
      Dashboard.js       # Página de estadísticas generales
      Pending.js         # Página para productos pendientes
      Terminated.js      # Página para productos terminados
    /services            # Comunicación con Firebase
      firebase.js        # Configuración de Firebase
      productService.js  # Funciones para interactuar con productos
    /styles              # Archivos CSS o SASS
      global.css         # Estilos globales
    /utils               # Funciones auxiliares
      formatData.js      # Formateo y utilidades de datos
    App.jsx              # Punto de entrada principal del frontend
    main.jsx             # Renderizado de React
  /public                # Archivos estáticos (imágenes, íconos)
  .env                   # Variables de entorno para claves de Firebase
  package.json           # Configuración de dependencias
  README.md              # Documentación inicial
