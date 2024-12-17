import axios from "axios";

IPADDRESS = "http://192.168.1.22:8000";
ADDRESS = IPADDRESS + "/ProCure/v1/";

//API handlers
export const Login = async (credentials) => {
  /*
        JSON format for credentials

        {"password": "",
        "email": ""}
    */
  await axios
    .post(ADDRESS + "auth/token/login", credentials, {
      headers: {
        "Content-Type": "application/JSON",
        "Referrer-Policy": "same-origin",
        "Cross-Origin-Opener-Policy": "same-origin",
      },
    })
    .then((response) => {
      return { response: response, credentials: credentials.email };
    })
    .catch((error) => {
      return error;
    });
};

export const Register = async (registrationData) => {
  /*

        JSON Format for Registration Data

    {
        "email": "",
        "password": "",
        "confirm_password": "",
        "first_name": "",
        "username": "",
        "last_name": "",
        "birthdate": null,      //Format dd/mm/yy
        "contact_info": "",
        "user_class": false
    }

    */

  await axios
    .post(ADDRESS + "auth/users/", registrationData, {
      headers: {
        "Content-Type": "application/JSON",
        "Referrer-Policy": "same-origin",
        "Cross-Origin-Opener-Policy": "same-origin",
      },
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};

export const createTask = async (task) => {
  /*
    JSON format for task

    {
    "taskname": "",
    "date": null,           //format dd/mm/yy
    "time": null,           //24 hour format hh:mm:ss
    "reccurence": null,     //int
    "tags": "",
    "task_owner": null,     //email
    }    
    */
  await axios
    .post(ADDRESS + "tasks/createTask", task, {
      headers: {
        "Content-Type": "application/JSON",
        "Referrer-Policy": "same-origin",
        "Cross-Origin-Opener-Policy": "same-origin",
      },
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};

export const editTask = async (method, newTaskData) => {
  /*
    method --> required field to handle both the data get and data put in a single function
            -> "get" or "put"

    JSON format for New Task

    {
    "taskname": "",
    "date": null,           //format dd/mm/yy
    "time": null,           //24 hour format hh:mm:ss
    "reccurence": null,     //int
    "tags": "",
    "task_owner": null,     //email
    }   
    */

  if ((method = "get")) {
    await axios
      .get(ADDRESS + "tasks/editTask/" + taskID, "", {
        headers: {
          "Content-Type": "application/JSON",
          "Referrer-Policy": "same-origin",
          "Cross-Origin-Opener-Policy": "same-origin",
        },
      })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error;
      });
  } else if ((method = "put")) {
    await axios
      .put(ADDRESS + "tasks/editTask/" + newTaskData.id, newTaskData, {
        headers: {
          "Content-Type": "application/JSON",
          "Referrer-Policy": "same-origin",
          "Cross-Origin-Opener-Policy": "same-origin",
        },
      })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error;
      });
  }
};

export const getMyTasksList = async (email) => {
  await axios
    .get(ADDRESS + "tasks/getmytask/" + email, "", {
      headers: {
        "Content-Type": "application/JSON",
        "Referrer-Policy": "same-origin",
        "Cross-Origin-Opener-Policy": "same-origin",
      },
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};

export const createTimedTasks = async (timedtasks) => {
  /*
    JSON format for timedtasks

    {
    "taskname": "",
    "timeStart": null,  //24hr format hh:mm:ss
    "timeEnd": null,    //24hr format hh:mm:ss
    "date": null,       // dd/mm/yy
    "report": "",
    "owner": null       //email
    }
    */

  await axios
    .post(ADDRESS + "timedtasks/createTimedTask/", timedtasks, {
      headers: {
        "Content-Type": "application/JSON",
        "Referrer-Policy": "same-origin",
        "Cross-Origin-Opener-Policy": "same-origin",
      },
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};

export const editTimedTasks = async (method, editedTimedTasks) => {
  /*
    method --> required field to handle both the data get and data put in a single function
            -> "get" or "put"

    JSON format for editedtimedtasks

    {
    "taskname": "",
    "timeStart": null,  //24hr format hh:mm:ss
    "timeEnd": null,    //24hr format hh:mm:ss
    "date": null,       // dd/mm/yy
    "report": "",
    "owner": null       //email
    }
    */

  if (method == "get") {
    await axios
      .get(
        ADDRESS + "timedtasks/editTimeTask/" + editedTimedTasks.id,
        editedTimedTasks,
        {
          headers: {
            "Content-Type": "application/JSON",
            "Referrer-Policy": "same-origin",
            "Cross-Origin-Opener-Policy": "same-origin",
          },
        }
      )
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error;
      });
  } else if (method == "put") {
    await axios
      .put(
        ADDRESS + "timedtasks/editTimeTask/" + editedTimedTasks.id,
        editedTimedTasks,
        {
          headers: {
            "Content-Type": "application/JSON",
            "Referrer-Policy": "same-origin",
            "Cross-Origin-Opener-Policy": "same-origin",
          },
        }
      )
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error;
      });
  }
};

export const getTimedTasksHistory = async (email) => {
  await axios
    .get(ADDRESS + "timedtasks/getTimedTaskHistory/" + email, "", {
      headers: {
        "Content-Type": "application/JSON",
        "Referrer-Policy": "same-origin",
        "Cross-Origin-Opener-Policy": "same-origin",
      },
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};
