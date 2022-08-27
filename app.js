function onLoad() {
    console.log("page is loaded")

    var elem = document.querySelector('.target-students');
    var flkty = new Flickity( elem, {
      // options
    });

}


const testimonials = [
  {
    name: "Lisa M",
    photoUrl:
"https://images.unsplash.com/photo-1499887142886-791eca5918cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
    text: "I am so pleased with my experience experience at SAWPI. Nice work on your course. It's just amazing. The service was excellent.",
  },
  {
    name: "Tanvi P",
    photoUrl:"https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    text: "I liked the course more and more each day. I will let my friends know about this, they would be interested in joining me!",
  },
  {
    name: "Sonia S",
    photoUrl:"https://images.unsplash.com/photo-1552162864-987ac51d1177?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    text: "What an experience! From the classroom to the live real-world experience, the instructors at SAWPI made me feel comfortable and supported along the way. Highly recomendation for anyone looking to become a South Asian Wedding Planner",
  },
];

const imgEl = document.querySelector(".testimage");
const textEl = document.querySelector(".testtext");
const usernameEl = document.querySelector(".testusername");

let idx = 0;



function updateTestimonial() {
  const { name, photoUrl, text } = testimonials[idx];
  imgEl.src = photoUrl;
  textEl.innerText = text;
  usernameEl.innerText = name;
  idx++;
  if (idx === testimonials.length) {
    idx = 0;
  }
  setTimeout(() => {
    updateTestimonial();
  }, 5000);
}

updateTestimonial();


//FAQ SECTION

const tablinks = document.getElementsByClassName("tab-link");

const allContent = document.querySelectorAll(".tab-content");


for (let i = 0; i < tablinks.length;i++){ 
    tablinks[i].addEventListener("click", function(e){
        const current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active","");
        this.className += " active";
        
        //Switch content upon click 
        const filter = e.target.dataset.filter; 
        console.log(filter);

        allContent.forEach((content)=>{
            if(content.classList.contains(filter)){ 
                content.style.display = "block";
            } else { 
                content.style.display = "none";
            }
        })

    });
}
