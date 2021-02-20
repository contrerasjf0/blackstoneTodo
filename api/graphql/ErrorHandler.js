const ErrorTypes = {
  UserExist: 'USER_EXIST',
  UserNotFoundAuth: 'USER_NOT_FOUND_AUTH',
  UserNotAuth: 'USER_NOT_AUTH'
}

const  Errors = {
  USER_EXIST: {
    messages: 'User is already rigistered',
    StatusCode: 403
  },
  USER_NOT_FOUND_AUTH: {
    messages: 'The credentials dont exist',
    StatusCode: 403
  },
  USER_NOT_AUTH: {
    messages: 'Unauthenticated user',
    StatusCode: 403
  }

}

function customFormatErrorHandler (err){
  const errorInfo = err.originalError.getInfo();
  return ({ message: errorInfo.messages, statusCode: errorInfo.StatusCode});
}

class ErrorHandler extends Error{

  constructor(errorType){
    super(Errors[errorType]);

    this.thrownError = errorType;
  }

  getInfo(){
    return Errors[this.thrownError];
  }
}

module.exports = {
  ErrorHandler,
  ErrorTypes,
  customFormatErrorHandler
};
