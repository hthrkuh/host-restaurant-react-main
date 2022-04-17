import React from 'react';
import styles from "./DownloadJSON.module.scss";
import { connect } from 'react-redux';
// import waiterSvg from "./svg/GS_Download_icon.svg";
// import waiterSvg from "./svg/waiter-svgrepo-com.svg";
import iconsDownload from "./svg/icons8-download-100.png";


const DownloadJSON = props => {

    const completedOrdersList = props.completedOrdersList;
    const download = () => {
        const jsonFile = completedOrdersList.map(item => {
            if (item.status === 'end') {
                return {
                    Mobile: item.Mobile,
                    Diners: item.Diners,
                    tables: item.tables,
                    start_time: item.start_time,
                    end_time: item.end_time
                }
            } else {
                return false;
            }
        });
        const jsonFileFilter = jsonFile.filter(item => item);
        const element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(JSON.stringify(jsonFileFilter)));
        element.setAttribute('download', 'completed_orders.json');
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    };

    return (
        <div className={styles.continer}>
            <div onClick={() => download()} className={styles.button}>
                <img alt='' src={iconsDownload}></img>
            </div>
        </div>
    );
};


const mapStateToProps = state => {
    return {
        completedOrdersList: state.completedOrdersList,
    }
}
export default connect(mapStateToProps, {})(DownloadJSON);
