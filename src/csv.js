export function csvParse(text) {
    let [fields, ...rows] = text.split("\n").filter(row => row.length > 0);
    fields = fields.split(",").map(field => field.trim());

    return rows.map(row => {
        let item = {};
        row = row.split(",");
        fields.forEach((field, i) => item[field] = row[i]);
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