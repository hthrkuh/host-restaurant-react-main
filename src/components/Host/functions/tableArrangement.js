import { joinTables } from './joinTables';

export const hostOrders = (tablesList, ordersList) => {
    const order = ordersList[0];
    let bestResult = false;
    let tableNum = false;
    let data = false;
    tablesList.forEach(table => {
        if (table.Diners < order.Diners) return;
        if (table.Status === 'start') return;

        if (!bestResult) {
            if (table.Diners >= order.Diners) {
                bestResult = table.Diners;
                tableNum = table.Table;
                data = {
                    // ...table,
                    startTimetamp: new Date(),
                    someDiners: order.Diners,
                    Mobile: order.Mobile,
                };
                return;
            }
        };
        if (bestResult) {
            if (table.Diners > order.Diners) {
                if (table.Diners < bestResult) {
                    bestResult = table.Diners;
                    tableNum = table.Table;
                    data = {
                        // ...table,
                        startTimetamp: new Date(),
                        someDiners: order.Diners,
                        Mobile: order.Mobile,
                    };
                    return;
                }
            }
        };
    });

    if (!bestResult) {
        return joinTables(tablesList, order);
    }
    return { bestResult: bestResult, tableNum: tableNum, data: data };
}