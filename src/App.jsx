import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import MyCard from './components/MyCard'

function App() {
  return <>
    <Header titulo="Adopta un perrito" />
    <div className='contenedor-cards'>
      
      <MyCard urlImg="https://plus.unsplash.com/premium_photo-1667729435876-3a83af97f536?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8JTIzaHVza3l8ZW58MHx8MHx8fDA%3D" nombre="Bartolo" descripcion="Lleno de energía y listo para jugar.¡Dale a Bartolo el hogar amoroso que se merece! " colorBadge="success" textBadge="Husky" />

      <MyCard urlImg="https://www.hogarmania.com/archivos/201105/bobtail-2-xl-XxXx80.jpg" nombre="Messi" descripcion="Es juguetón, amigable y se lleva bien con niños y otros animales. ¡Haz de Messi parte de tu familia hoy mismo!" colorBadge="primary" textBadge="Bobtail" />

      <MyCard urlImg="https://www.tiendanimal.es/articulos/wp-content/uploads/2017/12/el-sharpei-1200x900.jpg" nombre="Gohan" descripcion="Un perro de tamaño mediano con un corazón gigante. Hazte amigo de Gohan y experimenta un amor incondicional!" colorBadge="danger" textBadge="Shar Pei" />

      <MyCard urlImg="https://hips.hearstapps.com/hmg-prod/images/beagle-running-on-field-royalty-free-image-1619098658.?crop=1.00xw:0.666xh;0,0.334xh&resize=980:*" nombre="Princesa" descripcion="Es una compañera leal y cariñosa que adora los mimos y los abrazos. ¡Ayuda a Princesa a encontrar su final feliz!" colorBadge="warning" textBadge="Beagle" />
      
    </div>
    
    <Footer descripcionFooter="Explora nuestra galería de adopción de perros para encontrar a tu compañero perfecto. Tenemos una variedad de perros con diferentes personalidades y tamaños, todos en busca de un hogar amoroso. Cada imagen captura su esencia única. Adopta un perro y bríndale una segunda oportunidad. Encuentra a tu compañero peludo para siempre." />
  </>
}

export default App
