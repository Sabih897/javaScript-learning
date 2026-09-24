export function activeStatus(data) {
  data.forEach((user) => {
    const today = new Date();
    const lastActive = new Date(user.lastActive);
    const diff = today - lastActive;
    const diffDays = diff / (1000 * 60 * 60 * 24);

    if (diffDays > 30) {
      user.status = "inActive";
    }
  });
  return data;
}
