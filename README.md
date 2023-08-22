# DALL-E Clone

This repository contains a AI image generation using MERN stack and OPEN AI API. Please follow the instructions to set it up.

**Features**

    1.  Create Section
    2.  Community Section

> [AI Clone](https://dynamic-raindrop-b7f571.netlify.app/)

## Instructions

1.  Clone the repo and run `npm install`
2.  From the app folder run `npm run dev`

---

**Generating Image**

```js
const generateImage = async () => {
  if (form.prompt) {
    try {
      setGeneratingImg(true);
      const response = await fetch(
        "https://aiclone.onrender.com/api/v1/dalle",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            prompt: form.prompt,
          }),
        }
      );

      const data = await response.json();
      setForm({ ...form, photo: `data:image/jpeg;base64,${data.photo}` });
    } catch (err) {
      alert(err);
    } finally {
      setGeneratingImg(false);
    }
  } else {
    alert("Please provide proper prompt");
  }
};
```

**Fetching Posts**

```js
const fetchPosts = async () => {
  setLoading(true);

  try {
    const response = await fetch("https://aiclone.onrender.com/api/v1/post", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const result = await response.json();
      setAllPosts(result.data.reverse());
    }
  } catch (err) {
    alert(err);
  } finally {
    setLoading(false);
  }
};

useEffect(() => {
  fetchPosts();
}, []);
```
