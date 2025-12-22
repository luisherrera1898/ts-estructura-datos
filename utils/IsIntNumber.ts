function IsIntNumber(c: number | any): boolean{
    if (isNaN(c) || c % 1 !== 0) {
        return false;
    }else{
        return true;
    }  
}

module.exports = IsIntNumber;