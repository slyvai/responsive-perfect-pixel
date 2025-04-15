import Image1 from './assets/f508b52dbc762450046e9fa820612089.png'
import "./App.css";

function App() {
  return (
    <>
      <div className="background">
        <div className="background2">
          <div className='text'>
            <h2>Kecerdasan Visual</h2>
            <h1>Lihat dunia dari lensa yang baru.</h1>
            <p>
              Gunakan <span className='highlight'>kecerdasan visual</span> melalui Kontrol Kamera untuk langsung
              mempelajari tentang semua hal yang Anda liat. Cukup <span className='highlight'>arahkan iPhone
              16 Pro Anda untuk menemukan lebih</span> atau berinteraksi dengan sesuatu
              di depan Anda. Cari tahu di mana tempat membeli barang baru yang
              Anda lihat, identifikasikan tanaman dan hewan, dan banyak lagi.
            </p>
              </div>
              <div className='image'>
              <img src={Image1} alt="Visual Intelligence" />
            </div>
          </div>
        </div>
    </>
  );
}

export default App;
