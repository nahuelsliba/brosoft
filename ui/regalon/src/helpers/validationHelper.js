export const validOnlyNumbers = (input) => {
    const re = /^[0-9\b]+$/;
    if (input.target.value === '' || re.test(input.target.value)) {
       return true;
    }
    input.target.value = input.target.value.slice(0, -1);
    return false;
}