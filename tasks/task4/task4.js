function fetchUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = USERS.find(user => user.id === id);
      if (user) {
        resolve(user);
      } else {
        reject(new Error('Пользователь не найден'));
      }
    }, 2500);
  });
}