import { useEffect, useState } from "react";
import "./App.css";
import CurrentLocationMap from "./components/CurrentLocationMap";

function App() {
  const [position, setPosition] = useState({ lat: 0, lng: 0 });
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [canBeInstalled, setCanBeInstalled] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
      },
      (err) => console.log(err)
    );

    window.addEventListener("beforeinstallprompt", (event) => {
      // Previne o comportamento padrão do browser de mostrar o prompt de instalação
      console.log("teste");
      event.preventDefault();
      // Salva o evento para ser usado depois
      console.log(event);
      setDeferredPrompt(event);
      setCanBeInstalled(true);
    });
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      // Mostra o prompt de instalação
      deferredPrompt.prompt();
      // Aguarda o usuário responder ao prompt
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("Usuário aceitou a instalação");
        } else {
          console.log("Usuário recusou a instalação");
        }
        // Limpa o prompt salvo
        setDeferredPrompt(null);
      });
    } else {
      alert("App já instalado!");
      console.log(deferredPrompt);
    }
  };

  return (
    <>
      <CurrentLocationMap position={position} />
      {canBeInstalled && <button onClick={handleInstallClick}>Instalar</button>}
      <h6>Versão: 1.0.0</h6>
    </>
  );
}

export default App;
