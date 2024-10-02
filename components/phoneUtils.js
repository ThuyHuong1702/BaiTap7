// phoneUtils.js

// Hàm kiểm tra định dạng số điện thoại
export function ValidateUSPhoneNumber(phoneNumber) {
    const regExp = /^\(\d{3}\)\s\d{3}-\d{4}$/;
    return regExp.test(phoneNumber);
  }
  
  // Hàm định dạng lại số điện thoại thành (123) 456-7890
  export function formatPhoneNumber(phoneNumber) {
    const cleanNumber = phoneNumber.replace(/\D/g, ''); 
    if (cleanNumber.length <= 3) return cleanNumber;
    if (cleanNumber.length <= 6) return `(${cleanNumber.slice(0, 3)}) ${cleanNumber.slice(3)}`;
    return `(${cleanNumber.slice(0, 3)}) ${cleanNumber.slice(3, 6)}-${cleanNumber.slice(6, 10)}`;
  }
  