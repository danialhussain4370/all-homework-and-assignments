const agePromise = new Promise((resolve, reject) => {
    const age = 62;
    if (age >= 18) {
      resolve({
        ok: true,
        message: "Data Sent",
        records: [],
      });
    } else {
      reject({
        ok: false,
        message: "Something went wrong!",
      });
    }
  });

  agePromise
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      alert("Promise Fulfilled");
    });