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
let back = document.getElementById("Backward");

// back.addEventListener("click", Testimonial_Forward);
title.innnerHTML = "rytgedfg";

///////////Testimonial manual state management////////////////////
let testimonial_State = 0;

const update_testimonial = () => {
  switch (testimonial_State) {
    case 0:
      // Pname.innnerHTML = data[0].name;
      Pname.innnerHTML = "rytgedfg";
      break;
    case 1:
      // Pname.innnerHTML = data[1].name;
      Pname.innnerHTML = "23";
      break;
    case 2:
      // Pname.innnerHTML = data[2].name;
      Pname.innnerHTML = "78";
      break;
    case 3:
      // Pname.innnerHTML = data[3].name;
      Pname.innnerHTML = "42";
      break;
    case 4:
      // Pname.innnerHTML = data[4].name;
      Pname.innnerHTML = "12";
      break;
  }
};

////////Here i will use event handler but atm Event Listener only////////////

/////////Set Interval invocation///////////////

//////////
