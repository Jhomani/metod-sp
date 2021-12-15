import storage from "redux/config";

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(status: number) {
  if (status >= 200 && status < 300) {
    // do something
  }

  if (status == 401) {
    // do something
  }
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */
export default async function request(url: string, options: RequestInit) {
  try {
    let encode = await fetch(url, options);
    checkStatus(encode.status);

    return encode.json();
  } catch (err) {
    console.log(err);
    throw new Error('Error while fetch data');
  }
}


export function postOptionsFormData(body = {}, method = "POST") {
  const { tokenUser } = storage.getState().auth;
  return {
    method,
    headers: {
      Authorization: `Bearer ${tokenUser}`,
    },
    body,
  };
}

export function postOptionsWithoutToken(body = {}, method = "POST") {
  return {
    method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };
}

export function getOptions(method = "GET") {
  const { tokenUser } = storage.getState().auth;
  return {
    method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${tokenUser}`,
    },
  };
}

export function getOptionsWithToken(token = "", method = "GET") {
  return {
    method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
}

export function getOptionsWithoutToken(method = "GET") {
  return {
    method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
}

export function postOptions(body = {}, method = "POST") {
  const { tokenUser } = storage.getState().auth;
  return {
    method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${tokenUser}`,
    },
    body: JSON.stringify(body),
  };
}

export function putOptions(body = {}, method = "PUT") {
  const store = storage.getState();
  return {
    method,
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${store.auth.tokenUser}`,
    },
    body: JSON.stringify(body),
  };
}

export function patchOptions(body = {}, method = "PATCH") {
  const store = storage.getState();
  return {
    method,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${store.auth.tokenUser}`,
    },
    body: JSON.stringify(body),
  };
}

export function deleteOptions(body = {}, method = "DELETE") {
  const store = storage.getState();
  return {
    method,
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${store.auth.tokenUser}`,
    },
    body: JSON.stringify(body),
  };
}