export function boldFirstWord(dataString){
    const numberRegExp = /^\d+[.,]\d+|^\d+/;
    const stringRegExp = /[A-Za-zА-яЁё]+/g;
    
    const number = dataString.match(numberRegExp);
    const string = dataString.match(stringRegExp);

    return (
        <>
            {number && <span>{number[0]}</span>} {string && string.join(' ')}
        </>
    )
}