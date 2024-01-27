export const divideArr = (currentArr, sliceNumber) => {
    const newArr = [];

    for (let i = 0; i < currentArr.length; i += sliceNumber) {
        const subArr = currentArr.slice(i, i + sliceNumber);
        newArr.push(subArr);
    }

    return newArr;
}