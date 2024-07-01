const reverseNumber = (num)=> {
    let result;
    if(num > 9 && num < 100){
        let last = num % 10;
        let first = Math.floor(num / 10);
        result = last * 10 +first
    } else{
        let b = 6
        result = "Faqat ikki xoli son kiriting"
    }
    return num ? result : 'son kiritilmadi'
}
reverseNumber(20)