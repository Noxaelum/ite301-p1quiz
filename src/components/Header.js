const Header = () => {
  const imgs = [
    "https://c4.wallpaperflare.com/wallpaper/716/959/647/hyper-light-drifter-video-games-video-game-art-video-game-heroes-hd-wallpaper-preview.jpg"
  ]
    
  return (
    <header className="header">
        <img className="img" src={imgs[0]} alt="Hyper Light Drifter" />
        <h4>
            Villafania, Sly L <br /> UP-FA1-BSITWEBDEV3-7
        </h4>
    </header>
  )
}

export default Header