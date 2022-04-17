// const listConnections = [
//     { a: 101, b: 102 },
//     { a: 101, b: 103 },
//     { a: 102, b: 103 },
//     { a: 201, b: 202 },
//     { a: 401, b: 402 },
//     { a: 501, b: 302 },
//     { a: 203, b: 601 },
// ];

export const IfCanConnect = (tablesList) => {
    const newTablesList = tablesList.filter(table => {
        return table.Status === "empty";
    });
    const connectListTables = [];
    newTablesList.forEach(table => {
        table.Concat.forEach(concat => {
            newTablesList.forEach(tableTest => {
                if (concat === tableTest.Table) {
                    connectListTables.push({ a: table.Table, b: tableTest.Table, diners: table.Diners + tableTest.Diners });
                }
            });
        });
    });
    return connectListTables;
}
