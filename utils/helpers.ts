export const validateEmail = (email: string) => {
  // Regular expression pattern for email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
};

export const renderEmailTemplate = (emailTemplate: string, values: any) => {
  Object.keys(values).forEach((key) => {
    emailTemplate = emailTemplate.replace(
      new RegExp("{" + key + "}", "g"),
      values[key]
    );
  });
  return emailTemplate;
};
