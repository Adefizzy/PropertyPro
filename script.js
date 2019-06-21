let arrow = document.querySelector("#arrow");
let filter = document.querySelector("#filter");
let filterDropDown = document.querySelector("#filter_drop_down");
let filterSubmitButton = document.querySelector("#filter_submit");

function rotateArrow() {
  if (arrow.classList.contains("arrow_down")) {
    arrow.classList.replace("arrow_down", "arrow_up");
  } else {
    arrow.classList.replace("arrow_up", "arrow_down");
  }
}

filter.addEventListener("click", () => {
  rotateArrow();
  filterDropDown.classList.toggle("hide_content");
});

filterSubmitButton.addEventListener("click", () => {
  rotateArrow();
  filterDropDown.className = "hide_content";
});
// populate the dom with post

let posts = [
  {
    image: "./images/image6.jpg",
    rate: "2000naira/month",
    description: "2 bedroom apt",
    location: {
      city: "Abeokuta",
      town: "Obantoko",
      state: "Ogun"
    }
  },
  {
    image: "./images/image1.jpg",
    rate: "2000naira/month",
    description: "2 bedroom apt",
    location: {
      city: "Abeokuta",
      town: "Obantoko",
      state: "Ogun"
    }
  },
  {
    image: "./images/image2.jpg",
    rate: "2000naira/month",
    description: "2 bedroom apt",
    location: {
      city: "Abeokuta",
      town: "Obantoko",
      state: "Ogun"
    }
  },
  {
    image: "./images/image3.jpg",
    rate: "2000naira/month",
    description: "2 bedroom apt",
    location: {
      city: "Abeokuta",
      town: "Obantoko",
      state: "Ogun"
    }
  },
  {
    image: "./images/image4.jpg",
    rate: "2000naira/month",
    description: "2 bedroom apt",
    location: {
      city: "Abeokuta",
      town: "Obantoko",
      state: "Ogun"
    }
  },
  {
    image: "./images/image5.jpg",
    rate: "2000naira/month",
    description: "2 bedroom apt",
    location: {
      city: "Abeokuta",
      town: "Obantoko",
      state: "Ogun"
    }
  },
  {
    image: "./images/image6.jpg",
    rate: "2000naira/month",
    description: "2 bedroom apt",
    location: {
      city: "Abeokuta",
      town: "Obantoko",
      state: "Ogun"
    }
  },
  {
    image: "./images/image1.jpg",
    rate: "2000naira/month",
    description: "2 bedroom apt",
    location: {
      city: "Abeokuta",
      town: "Obantoko",
      state: "Ogun"
    }
  },
  {
    image: "./images/image2.jpg",
    rate: "2000naira/month",
    description: "2 bedroom apt",
    location: {
      city: "Abeokuta",
      town: "Obantoko",
      state: "Ogun"
    }
  },
  {
    image: "./images/image3.jpg",
    rate: "2000naira/month",
    description: "2 bedroom apt",
    location: {
      city: "Abeokuta",
      town: "Obantoko",
      state: "Ogun"
    }
  },
  {
    image: "./images/image4.jpg",
    rate: "2000naira/month",
    description: "2 bedroom apt",
    location: {
      city: "Abeokuta",
      town: "Obantoko",
      state: "Ogun"
    }
  },
  {
    image: "./images/image5.jpg",
    rate: "2000naira/month",
    description: "2 bedroom apt",
    location: {
      city: "Abeokuta",
      town: "Obantoko",
      state: "Ogun"
    }
  },
  {
    image: "./images/image6.jpg",
    rate: "2000naira/month",
    description: "2 bedroom apt",
    location: {
      city: "Abeokuta",
      town: "Obantoko",
      state: "Ogun"
    }
  },
  {
    image: "./images/image5.jpg",
    rate: "2000naira/month",
    description: "2 bedroom apt",
    location: {
      city: "Abeokuta",
      town: "Obantoko",
      state: "Ogun"
    }
  },
  {
    image: "./images/image1.jpg",
    rate: "2000naira/month",
    description: "2 bedroom apt",
    location: {
      city: "Abeokuta",
      town: "Obantoko",
      state: "Ogun"
    }
  },
  {
    image: "./images/image2.jpg",
    rate: "2000naira/month",
    description: "2 bedroom apt",
    location: {
      city: "Abeokuta",
      town: "Obantoko",
      state: "Ogun"
    }
  }
];

function createPost(post) {
  let div1 = document.createElement("div");
  let div2 = document.createElement("div");
  let img = document.createElement("img");
  let figCaption = document.createElement("figcaption");
  let rate = document.createElement("p");
  let description = document.createElement("p");

  img.setAttribute("src", post.image);
  img.setAttribute("alt", "property picture");

  let rateNode = document.createTextNode(post.rate);
  rate.appendChild(rateNode);
  div2.appendChild(rate);

  let descriptionNode = document.createTextNode(post.description);
  description.appendChild(descriptionNode);
  div2.appendChild(description);

  div1.appendChild(img);
  div1.appendChild(div2);

  div1.className = "single_post";
  div2.className = "post_description";
  let article = document.querySelector("article");
  article.appendChild(div1);
}

function populateDOM(posts) {
  posts.forEach(post => {
    createPost(post);
  });
}

populateDOM(posts);
