
function validateEmptyFields(valuesObject, message){
  for (const key in valuesObject) {
    if(valuesObject[key] === ''){
      return {
        valid: false,
        input: key,
        message
      };
    }
  }

  return null;
}

export default validateEmptyFields;
  