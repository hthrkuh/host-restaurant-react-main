import styles from "./App.module.scss";
import 'bootstrap/dist/css/bootstrap.min.css';

import GuestRoom from "./components/GuestRoom/GuestRoom";
import QueueRestaurant from "./components/QueueRestaurant/QueueRestaurant";
import Host from "./components/Host/Host";
import CompletedOrders from "./components/CompletedOrders/CompletedOrders";
// import ArtboardA from "./images/svg/ArtboardA.svg";
import ArtboardB from "./images/svg/ArtboardB.svg";
import ArtboardC from "./images/svg/ArtboardC.svg";
import ArtboardD from "./images/svg/ArtboardD.svg";


function App() {
  return (
    <div className={styles.continet_app}>
      <div className={styles.header}>
        <Host />
        <div className={styles.titleHeader}>
          <h1 >Welcome</h1>
          <h2 className={styles.glow}>To the restaurant</h2>
        </div>
        <div className={styles.iconsContiner}>
          {/* <img src={ArtboardA}/> */}
          <img alt="" src={ArtboardC} />
          <img alt="" src={ArtboardB} />
          <img alt="" src={ArtboardD} />
        </div>
      </div>
      <div className={styles.body}>
        <QueueRestaurant />
        <GuestRoom />
        <CompletedOrders />
      </div>
    </div>
  );
}

export default App;
