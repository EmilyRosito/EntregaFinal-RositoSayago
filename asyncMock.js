const productos=[

    {
        id: 1,
        title: 'Remera Entrenamiento Puma',
        price: '28.999',
        category: 'Indumentaria',
        description: 'Entrená al máximo con la Remera Puma Performance Heather Cat Mujer altamente funcional. Esta prenda cuenta con tecnología que absorbe la humedad para que te sientas fresco y seco, además de costuras planas para reducir la fricción y brindarte mayor comodidad mientras haces ejercicio. Querrás guardar un repuesto de esta remera en tu bolso de gimnasia.',
        image: 'https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw726dc28a/products/PU524467-48/PU524467-48-1.JPG',
        stock: 7

    },

    {
        id: 2,
        title: 'Remera Puma Fit Heather',
        price: '28.999',
        category: 'Indumentaria',
        description: 'La Remera Puma fit heater es tu fiel compañera a la hora entrenar con todo. Confeccionada en algodón, se ajusta a tu cuerpo y se mueve con vos hagas el movimiento que hagas. Es cómoda, liviana y transpirable para esas rutinas en las que das tu 100%.',
        image: 'https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw534b852b/products/PU522281-82/PU522281-82-1.JPG',
        stock: 7
    },

    {
        id: 3,
        title: 'Zapatillas Puma Trinity ',
        price: '74.999',
        category: 'Calzado',
        description: 'Las Zapatillas Puma Trinity Mujer son el calzado perfecto para vos que buscas comodidad sin comprometer tu estilo. Con su base ancha, te brinda una comodidad inigualable en cada paso que des. Mientras que su diseño casual y original complementa a la perfección tus looks casuales. Ya sea para caminar por la ciudad, salir con amigos o disfrutar de tu tiempo libre. Con estas zapatillas y el estilo de Puma, disfrutarás de comodidad, estilo y la calidad inigualable.',
        image: 'https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw391b95ff/products/PU392410-17/PU392410-17-1.JPG',
        stock: 7
    },

    {
        id: 4,
        title: 'Short Running Puma Fit 5',
        price: '47.999',
        category: 'Indumentaria',
        description: 'Aumentá tu rendimiento con el Short Running Puma Fit 5 Mujer y demostrá tu fuerza en cada ejercicio. Fabricado en tela poliéster, se adapta a tu cuerpo para ofrecerte una comodidad y sujeción excepcionales, mientras que la tecnología dryCELL absorbe la humedad de tu piel y evita el sudor mientras entrenás. Además, gracias a sus prácticos bolsillos laterales podrás tener tu celular o tarjetas siempre a mano. Combinalo con tu remera o top favoritos y nunca dejes de moverte.',
        image: 'https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw27963daf/products/PU523078-48/PU523078-48-1.JPG',
        stock: 7
    },

    {
        id: 5,
        title: 'Zapatillas Puma Carina 2.0',
        price: '89.999',
        category: 'Calzado',
        description: 'Las Zapatillas Puma Carina 2.0 se inspiran en las zapatillas de moda californianas de los ochenta. Esta nueva y relajada versión presenta una suela cupsole, exterior de piel sintética y una plataforma ligeramente elevada con textura en la puntera y el talón. Incluye la cómoda plantilla de PUMA SoftFoam+ para una comodidad instantánea y duradera que proporciona una amortiguación suave a cada paso.',
        image: 'https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw0d40f554/products/PU_388937-05/PU_388937-05-1.JPG',
        stock: 7
    },

    {
        id: 6,
        title: 'Zapatillas Running Puma Disperse Xt 3',
        price: '79.999',
        category: 'Calzado',
        description: 'Elevá tus entrenamientos al siguiente nivel con las Zapatillas Running Puma Disperse Xt 3 Marbleized Mujer. Su capellada de malla con retoques de sintético combina transpirabilidad con durabilidad y la suela de goma ofrece una tracción superior sobre distintas superficies para asegurar tu comodidad y seguridad en cada paso. Disfrutá de su máxima amortiguación con la plantilla SOFTFOAM+ que posee un talón extragrueso para que nada detenga tu marcha. Estas zapatillas de alto rendimiento son todo lo que necesitás para rendir al máximo en cada entrenamiento.',
        image: 'https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw996f5c68/products/PU379363-01/PU379363-01-1.JPG',
        stock: 7
    },


]

export const getProductos = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(productos);
    }, 2000);
})

export const getProducto = (id) => {
    return productos.find(producto => producto.id == id);
}