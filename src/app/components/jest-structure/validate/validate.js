// validate.js

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validatePassword(password) {
  if (password.length < 8 || password.length > 20) {
    return {
      isValid: false,
      reason: '비밀번호는 8자 이상, 20자 이하여야 합니다.',
    };
  }

  if (!/[A-Z]/.test(password)) {
    return {
      isValid: false,
      reason: '대문자가 최소 1개 포함되어야 합니다.',
    };
  }

  if (!/[a-z]/.test(password)) {
    return {
      isValid: false,
      reason: '소문자가 최소 1개 포함되어야 합니다.',
    };
  }

  if (!/[0-9]/.test(password)) {
    return {
      isValid: false,
      reason: '숫자가 최소 1개 포함되어야 합니다.',
    };
  }
  const forbidden = /[<>"'`;]/;
  if (forbidden.test(password)) {
    return {
      isValid: false,
      reason: '보안상 위험한 문자가 포함되어 있습니다.',
    };
  }
  if (!/[!@#$%^&*()_\-+=\[\]{}|\\:,.?]/.test(password)) {
    return {
      isValid: false,
      reason: '특수문자가 최소 1개 포함되어야 합니다.',
    };
  }

  return {
    isValid: true,
    reason: '유효한 비밀번호입니다.',
  };
}

module.exports = {validateEmail, validatePassword};
