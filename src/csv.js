export function csvParse(text) {
    let [fields, ...rows] = text.split("\n");
    fields = fields.split(",");
    fields.forEach((field, index) => fields[index] = field.trim());

    return rows.map(row => {
        row = row.split(",");
        let item = {};

        for (let i = 0; i < fields.length; i++) {
            item[fields[i]] = row[i];
        }

        return item;
    });
}
/**
 * 
 * @param {Array} data 
 */
export function csvMake(data) {
    
}

const CSV = {
    parse: csvParse,
    stringify: csvMake
}

export default CSV;