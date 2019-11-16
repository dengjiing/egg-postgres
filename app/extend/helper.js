module.exports = {
    getDate: function () {
        const date = new Date();
        date.setHours(date.getHours() + 8);
        return date;
    },
    toJsonDto(srcData, contractType) {
        var obj = {};
        if (!srcData) return obj;

        for (let key in contractType) {
            if (typeof srcData[key] === "boolean" || typeof srcData[key] === "number") {
                obj[key] = srcData[key];
            }
            else if (typeof srcData[key] === "object" && srcData[key].length) {
                obj[key] = srcData[key] || [];
            }
            else if (typeof srcData[key] === "object") {
                obj[key] = srcData[key] || {};
            }
            else {
                obj[key] = srcData[key] || null;
            }
        }

        return obj;
    },
    mapperToDto(srcData, contractType) {
        if (typeof srcData === "object" && srcData.length) {
            var arr = [];

            for (let item of srcData) {
                arr.push(this.toJsonDto(item, contractType))
            }

            return arr;
        }
        else if (typeof srcData === "object") {
            return this.toJsonDto(srcData, contractType);
        }

        return srcData;
    }
}