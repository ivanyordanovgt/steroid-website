import axios from 'axios';

export const postUserData = async (formData, url, navigateTo, navigate) => {
  const data = {
    username: formData.username,
    email: formData.email,
    password: formData.password
  };
  console.log('---> ? ', JSON.stringify(data));

  try {
    const response = await axios.post(url, data, {
      withCredentials: true, // Include credentials for cross-origin requests
      headers: {
        "Content-Type": "application/json" // Set the content type to JSON
      },
    });

    const res = response.data; // Access the data from the response
    console.log(res);

    if (res?.message) {
      alert("Successful");
      navigate(navigateTo);
    }
  } catch (error) {
    console.error("Error:", error); // Log any errors
  }
};