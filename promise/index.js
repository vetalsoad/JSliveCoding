const saveUser = (userData) => {
  console.log(JSON.stringify(userData));
  //input: string, obj(vozmogno, если ГЕТ то не передаем обьект)
  const httpPromise = fetch(
    "https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/users",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    }
  );
  //input: callback
  //-----input: promise result
  //-----output: 
  //output: promise
  httpPromise
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then(res => {
      console.log(res);
      

      alert (JSON.stringify(res));
    });

};

//testData
const user = {
  email: "test@gmail.com",
  userName: "user111",
  password: "sasas",
};

saveUser(user);
