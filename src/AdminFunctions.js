import axios from 'axios'



// export const getList = () => {
//   return axios
//     .get("http://localhost:5000/api/tasks", {
//       headers: { "Content-Type": "application/json" }
//     })
//     .then(res => {
//       return res.data;
//     });
//   /*.then(data => {
//       console.log(data);
//     });*/
// };

// export const addToList = term => {
//   return axios
//     .post(
//       "http://localhost:5000/api/task",
//       {
//         title: term,
//         isDone: false
//       },
//       {
//         headers: { "Content-Type": "application/json" }
//       }
//     )
//     .then(function(response) {
//       console.log(response);
//     });
// };

export const deleteItem = term => {
  axios
    .delete(`https://user-auth-task.herokuapp.com/api/task/${term}`, {
      headers: { "Content-Type": "application/json" }
    })
    .catch(function (error) {
      console.log(error)
    })
}

export const updateItem = (id) => {
  return axios
    .post(
      `https://user-auth-task.herokuapp.com/api/task/${id}`,
      {
        isValid: true
      },
      {
        headers: { 'Content-Type': 'application/json' }
      }
    )
    .then(function (response) {
      console.log(response)
    })
}
