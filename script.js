//Response Json file created
const data = [
  {
    name: "June Cha",
    position: "Software Engineer",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "This platform is an absolute game-changer for competitive programmers. The extensive range of problems and challenges offered here truly hones your skills and prepares you for   any coding competition. With detailed solutions and an active community, it's the perfect environment to sharpen your coding prowess.",
  },
  {
    name: "Iida Niskanen",
    position: "Data Engineer",
    photo: "https://randomuser.me/api/portraits/women/67.jpg",
    text: "I can't express enough how valuable this platform has been for me. As someone deeply passionate about algorithms and data structures, I've found the diverse set of problems here both stimulating and enriching. The intuitive interface and seamless experience make it my go-to destination for honing my problem-solving skills.",
  },
  {
    name: "Renee Sims",
    position: "Cloud engineer",
    photo: "https://randomuser.me/api/portraits/women/8.jpg",
    text: "If you're serious about excelling in competitive coding, look no further. This platform not only provides a comprehensive set of problems but also fosters a supportive community where you can exchange ideas and strategies. It's been instrumental in my journey towards becoming a better competitive coder.",
  },
  {
    name: "Sasha Ho",
    position: "Phd student",
    photo:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb",
    text: "I've tried numerous competitive programming platforms, but none come close to the quality and depth offered here. From beginner-friendly challenges to advanced algorithmic puzzles, there's something for everyone. The platform's commitment to excellence is evident in every aspect, making it my preferred choice for honing my coding skills.",
  },
  {
    name: "Veeti Seppanen",
    position: "Frontend developer",
    photo: "https://randomuser.me/api/portraits/men/97.jpg",
    text: "As a seasoned programmer, I'm always on the lookout for platforms that challenge and inspire me. This platform exceeds all expectations with its vast array of problems and unparalleled learning resources. Whether you're a novice or a seasoned coder, you'll find endless opportunities to push your boundaries and elevate your skills.",
  },
];

const Testimonial_Forward = () => {
  if (testimonial_State == 4) {
    testimonial_State = 0;
  } else {
    testimonial_State += 1;
  }
  update_testimonial();
  console.log(testimonial_State);
};

const Testimonial_Backward = () => {
  if (testimonial_State == 0) {
    testimonial_State = 4;
  } else {
    testimonial_State -= 1;
  }
  update_testimonial();
  console.log(testimonial_State);
};

/////////////////////Document Query Selectors by ID/////////////////////
let review = document.getElementById("Comment");
let photo = document.getElementById("SPic");
let Pname = document.getElementById("name");
let title = document.getElementById("designation");
let tab = document.getElementById("toggle");
// let back = document.getElementById("Backward");

///////////Testimonial manual state management////////////////////
let testimonial_State = 0;

const update_testimonial = () => {
  switch (testimonial_State) {
    case 0:
      // Pname.innnerHTML = data[0].name;
      Pname.innerText = `${data[0].name}`;
      photo.src = data[0].photo;
      title.innerText = data[0].position;
      review.innerText = data[0].text;
      tab.innerText = `●○○○○`;
      break;
    case 1:
      // Pname.innnerHTML = data[1].name;
      Pname.innerText = data[1].name;
      photo.src = data[1].photo;
      title.innerText = data[1].position;
      review.innerText = data[1].text;
      tab.innerText = `○●○○○`;
      break;
    case 2:
      // Pname.innnerHTML = data[2].name;
      Pname.innerText = data[2].name;
      photo.src = data[2].photo;
      title.innerText = data[2].position;
      review.innerText = data[2].text;
      tab.innerText = `○○●○○`;
      break;
    case 3:
      // Pname.innnerHTML = data[3].name;
      Pname.innerText = data[3].name;
      photo.src = data[3].photo;
      title.innerText = data[3].position;
      review.innerText = data[3].text;
      tab.innerText = `○○○●○`;
      break;
    case 4:
      // Pname.innnerHTML = data[4].name;
      Pname.innerText = data[4].name;
      photo.src = data[4].photo;
      title.innerText = data[4].position;
      review.innerText = data[4].text;
      tab.innerText = `○○○○●`;
      break;
  }
};

/////////Set Interval invocation, event handlers are in fucntions///////////////
setInterval(Testimonial_Forward, 3000);

////////Setting the Date Dynamically on the object//////////////////////
let date = new Date();
let year = document.getElementById("Date");
year.innerText = date.getFullYear();

////////////////////////Form Display/////////////////////////////////
///For Forms we need to use event listener as event handler will not
//function here

//Ask Omar why HTML5 required blocks event processing here
const first_error = document.querySelector("#first_error");
const second_error = document.querySelector("#second_error");
const third_error = document.querySelector("#third_error");

const submit = (event) => {
  event.preventDefault();
  // Swal.fire({
  //   title: "Good job!",
  //   text: "You clicked the button!",
  //   icon: "success",
  // });
  let error = 0;

  const form_name = document.querySelector("#form_name").value;
  const form_email = document.querySelector("#form_email").value;
  const form_message = document.querySelector("#txt").value;

  const first_error = document.querySelector("#first_error");
  const second_error = document.querySelector("#second_error");
  const third_error = document.querySelector("#third_error");

  // console.log("hello2");

  if (form_name === "") {
    first_error.style.display = "block";
    error = 1;
  } else {
    first_error.style.display = "none";
    error = 0;
  }

  if (form_email === "") {
    second_error.style.display = "block";
    error = 1;
  } else {
    second_error.style.display = "none";
    error = 0;
  }

  if (form_message === "") {
    third_error.style.display = "block";
    error = 1;
  } else {
    third_error.style.display = "none";
    error = 0;
  }

  if (error == 0) {
    SubmitFunction();
    //It is not needed here
    //Preventing default
    //https://stackoverflow.com/questions/19454310/stop-form-refreshing-page-on-submit
    // event.currentTarget.submit();
  }
};

//The event argument is implicitly passed to the event listener here
document.querySelector("#formm").addEventListener("submit", submit);
// console.log("hello");

//Event handlers for onclick forms events
//These event handlers rather than event listeners will clear
//the error warnings
const message_vanish_name = () => {
  first_error.style.display = "none";
};

const message_vanish_email = () => {
  second_error.style.display = "none";
};

const message_vanish_message = () => {
  third_error.style.display = "none";
};

const SubmitFunction = () => {
  Swal.fire("Form Successfully Submitted!");
};
