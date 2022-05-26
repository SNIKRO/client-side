import MainLayout from "../components/MainLayout"
import 'bootstrap/dist/css/bootstrap.css'
import MyCarousel from "../components/Carousel"

export default function Index() {
  return (

      // <Container className="content-justify-center">
      //   <h1 className="text-center">Главная страница</h1>
      // </Container>
  <MainLayout>
    <MyCarousel />
  </MainLayout>
  )
}
