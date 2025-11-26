function createLoginTracker(userInfo) {
  let attemptCount = 0;

  return (paaswordAttempt) => {

    if (attemptCount >= 3) {
      return "Account locked due to too many failed login attempts";
      
    }
    if(paaswordAttempt === userInfo.password) {
      return"Login successful";
    }


    attemptCount++;

    if (attemptCount <=3 ) {
      return `Attempt ${attemptCount}: Login failed`;
    }


    return "Account locked"

  };
}





module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};