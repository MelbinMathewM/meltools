import { Navigate, Route, Routes } from "react-router-dom"
import Main from "./pages/main"
import QRCode from "./pages/qr-code"
import WebP from "./pages/webp-converter"
import Navbar from "./components/navbar"
import Footer from "./components/footer"

function App() {


  return (
    <div>
        <Navbar />
        <Routes>
          <Route path="/" element={ <Main /> } />
          <Route path="/qr-code" element={ <QRCode /> } />
          <Route path="/webp-converter" element={ <WebP /> } />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
    </div>
  )
}

export default App
