import React, { useEffect, useState } from 'react';
import styles from "./CreatTeable.module.scss";
import "./CreatTeable.scss";
import { connect } from 'react-redux';
import ToolTop from './ToolTop/ToolTop';
import { endOrderCard } from '../../../actions/completedOrders';
import { changeTableStatus } from '../../../actions/table';


const CreatTeable = props => {
    const status = props.status;
    const tableData = props.tableData;
    const [shape, setShape] = useState(styles.pentagon);
    const [styleDivTable, setStyleDivTable] = useState({});
    const [displayToolTop, setDisplayToolTop] = useState(false);
    const [seconds, setSeconds] = useState(0);
    const [sitsTop, setsitsTop] = useState([]);
    const [sitsBottom, setsitsBottom] = useState([]);

    useEffect(() => {
        switch (tableData.Diners) {
            case 1:
                setShape(styles.round);
                break;
            case 2:
                setShape(styles.round_rectangle);
                break;
            case 3:
                setShape(styles.triangle_up);
                break;
            case 4:
                setShape(styles.square);
                break;
            case 5:
                setShape(styles.pentagon);
                break;
            default:
                break;
        };
    }, [tableData]);

    useEffect(() => {
        switch (status) {
            case 'start':
                if (tableData.Diners === 3) {
                    setSeconds(90)
                    setStyleDivTable({ borderBottomColor: 'red' });
                } else {
                    setSeconds(90)
                    setStyleDivTable({ backgroundColor: 'red' });
                };
                setTimeout(() => {
                    if (tableData.Diners === 3) {
                        // setSeconds(3)
                        setStyleDivTable({ borderBottomColor: 'orange' });
                    } else {
                        // setSeconds(3)
                        setStyleDivTable({ backgroundColor: 'orange' });
                    };
                }, 1000 * 60);
                setTimeout(() => {
                    if (tableData.Diners === 3) {
                        setStyleDivTable({ borderBottomColor: 'rgb(184, 184, 184)' });
                    } else {
                        setStyleDivTable({ backgroundColor: 'rgb(184, 184, 184)' });
                    };
                    props.endOrderCard(tableData.Table)
                    props.changeTableStatus({
                        id: tableData.Table,
                        status: 'empty',
                        data: {
                            Mobile: false,
                            startTimetamp: false,
                            someDiners: false,
                        },
                    })
                }, 90 * 1000);
                break;
            default:
                break;
        };
    }, [status]);

    useEffect(() => {
        let interval
        if (seconds > 0) {
            interval = setInterval(() => {

                setSeconds(seconds => seconds - 1);

            }, 1000);
            return () => clearInterval(interval);
        } else {
            clearInterval(interval)
            setsitsTop([])
            setsitsBottom([])
        }


    }, [seconds]);





    useEffect(() => {
        const top = []
        const bottom = []
        for (let i = 0; i < tableData.Diners; i++) {
            let pos = i % 2 === 0;
            pos
                ? top.push(<div key={`top${i}`} className={`${styles.sit}`}></div>)
                : bottom.push(
                    <div key={`bottom${i}`} className={`${styles.sit}`}></div>,
                );
        }
        setsitsTop(top)
        setsitsBottom(bottom)

    }, [tableData])

    return (

        <div
            className={styles.continer + ' table table-' + tableData.Table + " text-center"}
            onClick={() => setDisplayToolTop(!displayToolTop)}
            onMouseOut={() => setDisplayToolTop(false)}
        >
            <div className={`${styles.content + " " + styles.top}  `}>{sitsTop}</div>
            <div className={`${styles.content + " " + styles.bottom} `}>{sitsBottom}</div>

            <div className={styles.continingToolTop}>
                <ToolTop tableData={tableData} displayToolTop={displayToolTop} />
            </div>
            <div className={shape} style={styleDivTable}>
                <div>
                    {seconds} | {tableData.Diners}
                </div>
                {/* {tableData.Table} | */}
            </div>
            <div>
                <b>
                    {tableData.Table}
                </b>
            </div>

        </div>
    );
};


const mapStateToProps = state => {
    return {}
}
export default connect(mapStateToProps, { endOrderCard, changeTableStatus })(CreatTeable);