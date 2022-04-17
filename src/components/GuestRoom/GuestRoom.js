import React from 'react';
import styles from "./GuestRoom.module.scss";
import { connect } from 'react-redux';
import CreatTeable from './CreatTeable/CreatTeable';

const GuestRoom = props => {

    const tablesList = props.tablesList;
    const tablesHandler = () => {
        return tablesList.map((table, index) => (
            <CreatTeable key={index} tableData={table} status={table.Status} />
        ))
    };



    return (
        <div className={styles.continer}>
            <div className={styles.guest_room_title}>
                <h1 className={styles.glow}>GUEST ROOM</h1>
            </div>
            <div className={styles.guest_room}>
                {tablesHandler()}
            </div>
        </div>
    );
};


const mapStateToProps = state => {
    return {
        tablesList: state.tablesList,
    }
}
export default connect(mapStateToProps, {})(GuestRoom);