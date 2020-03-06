export const tagFilter = (arr, tag) => {
    if(!tag) return arr;
    return arr.filter(product => tag.includes(product.tag));
};