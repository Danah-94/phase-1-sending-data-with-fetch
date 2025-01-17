// Add your code here

/*
    const formData = {
        dogName: "Byron",
        dogBreed: "Poodle",
      };
      
      const configurationObject = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      };
      
      fetch("http://localhost:3000/dogs", configurationObject)
        .then(function (response) {
          return response.json();
        })
        .then(function (object) {
          console.log(object);
        })
        .catch(function (error) {
          alert("Bad things! Ragnarők!");
          console.log(error.message);
        });
        */

        const submitData = (userName, userEmail) => {

            const formData = {
                name: userName,
                email: userEmail,
              };

              const configurationObject = {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json",
                },
                body: JSON.stringify(formData),
              };



           return fetch("http://localhost:3000/users", configurationObject)
           .then(function (response) {
             return response.json();
           })
           .then(object => document.body.innerHTML = object.id)
           .catch(error => document.body.innerHTML = error.message);

        }