/*
    Module for writing common helper functions across the app
*/

const replaceFieldBySeparator = ({value, separator='.', joinBy='.'}) => value.split(separator).slice(1).join(joinBy);


export {
    replaceFieldBySeparator
}