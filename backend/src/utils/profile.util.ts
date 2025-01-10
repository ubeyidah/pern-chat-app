export const getProfileUri = (gender: string, username: string) => {
  if (gender == "male") {
    return `https://avatar.iran.liara.run/public/boy?username=${username}`;
  } else {
    return `https://avatar.iran.liara.run/public/girl?username=${username}`;
  }
};
