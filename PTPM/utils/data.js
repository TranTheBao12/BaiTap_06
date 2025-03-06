const students = [
    {
        id: GenerateRandomString(16),
        MSSV: GenerateRandomNumber(11),
        HoTen: "Nguyen Van A",
        Lop: "CNTT1",
        isDeleted: false
    },
    {
        id: GenerateRandomString(16),
        MSSV: GenerateRandomNumber(11),
        HoTen: "Tran Thi B",
        Lop: "CNTT2",
        isDeleted: false
    },
    {
        id: GenerateRandomString(16),
        MSSV: GenerateRandomNumber(11),
        HoTen: "Le Van C",
        Lop: "CNTT3",
        isDeleted: false
    }
];

function GenerateRandomString(length) {
    let result = "";
    let source = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let index = 0; index < length; index++) {
        let rd = Math.floor(Math.random() * source.length);
        result += source.charAt(rd);
    }
    return result;
}

function GenerateRandomNumber(length) {
    let result = "";
    let source = "0123456789";
    for (let index = 0; index < length; index++) {
        let rd = Math.floor(Math.random() * source.length);
        result += source.charAt(rd);
    }
    return result;
}

module.exports = { students, GenerateRandomString, GenerateRandomNumber };
