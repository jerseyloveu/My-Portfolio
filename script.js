var typed = new Typed(".text", {
    strings: ["I am a 2nd Year IT Student", "I Develop Web and Mobile Software", "I Design Graphics and Web"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

document.querySelector('.nav-toggle').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.navbar').classList.toggle('active');
});

function downloadResume() {
    const link = document.createElement('a');
    link.href = 'Jersey Usman-Resume 2024.pdf'; // Replace with the actual path to your resume
    link.download = 'Jersey_Usman_Resume.pdf'; // The name of the file to be downloaded
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

document.addEventListener('DOMContentLoaded', function () {
    const projects = [
        {
            heading: "NURAD",
            videoSrc: "nurad (1).mp4",
            img1Src: "nurad.png",
            img2Src: "nurad (1).png",
            description: "With Firebase acting as its database, NURAD is a mobile hotel management application created with Android Studio. The program handles room administration, payments, booking data, e-invoices, and client feedback in addition to facilitating hotel room bookings and reservations. I was in charge of creating the NURAD application's front-end and back-end user side for this project."
        },
        {
            heading: "Psynapse",
            videoSrc: "Psynapse Presentation (1).mp4",
            img1Src: "Psynapse Presentation.png",
            img2Src: "Psynapse Presentation (1).png",
            description: "Psynapse is a mobile quiz software developed to improve users' interactive learning experiences. It was created with Android Studio and makes use of Firebase for easy database administration. Users can create and browse educational content with the app's configurable question sets and categories. For convenience, Psynapse also comes with pre-made questions. I led the project's integration of the GUI design and essential functionalities."
        },
        {
            heading: "Get to Know Animals",
            videoSrc: "Get to know animals video.mp4",
            img1Src: "animals image 1.png",
            img2Src: "animals image 1 (1).png",
            description: "The Get to Know Animals mobile application is crafted using Android Studio. It offers a straightforward interface that displays a comprehensive list of animals, each accompanied by a descriptive overview highlighting their unique characteristics."
        },
        {
            heading: "Digital Electric Fan Control",
            videoSrc: "fan video.mp4",
            img1Src: "fan image 1.png",
            img2Src: "fan image 2.png",
            description: "The Digital Electric Fan Control is a streamlined project developed in NetBeans. It features functionalities that emulate the control of an electric fan, including adjusting its speed levels."
        },
        {
            heading: "Log in and Save Account Details",
            videoSrc: "log in and save account details video.mp4",
            img1Src: "login image 1.png",
            img2Src: "login image 2.png",
            description: "The Log in and Save Account Details feature was implemented using NetBeans. This functionality allows users to securely retrieve and store their account information, a crucial utility widely employed in real-world applications."
        },
        {
            heading: "Calling of Frames",
            videoSrc: "calling frame video.mp4",
            img1Src: "calling image 1 (1).png",
            img2Src: "calling image 2.png",
            description: "The Calling of Frames functionality is also developed using NetBeans. It demonstrates the implementation of navigating between different frames based on specific user roles, a feature widely utilized in real-world scenarios."
        },
        {
            heading: "iStory",
            videoSrc: "istory  video.mp4",
            img1Src: "istory image 1.png",
            img2Src: "istory image 2.png",
            description: "iStory is a dynamic and engaging website dedicated to storytelling. It serves as a platform spotlighting authors, showcasing their works, and sharing feedback from readers."
        },
        {
            heading: "Safeway",
            videoSrc: "safeway video.mp4",
            img1Src: "safeway image 1.png",
            img2Src: "safeway image 2.jpg",
            description: "Safeway is a website I developed to refine my skills in following web wireframes. It allowed me to enhance my proficiency in front-end development, creating a website that embodies a professional standard."
        },
        {
            heading: "GitHub Blocks",
            videoSrc: "github blocks video.mp4",
            img1Src: "github blocks image 1.png",
            img2Src: "github blocks image 2.png",
            description: "GitHub Blocks is a website I developed to refine my front-end development skills. It showcases various characters and who they are."
        },
        {
            heading: "Poke Bowl",
            videoSrc: "poke video.mp4",
            img1Src: "poke bowl image 1.png",
            img2Src: "poke bowl image 2.png",
            description: "Poke Bowl is another website I created to enhance my skills in both front-end and back-end development. It highlights a restaurant with essential features such as a menu. Additionally, it incorporates elements like video and audio embedding, data collection functionalities, and user alert systems."
        },
        {
            heading: "DOCUMENTATION",
            videoSrc: "documentation video.mp4",
            img1Src: "documentation image 1.png",
            img2Src: "documentation image 2.png",
            description: 'Check out more details in the project documentation: <a href="https://drive.google.com/drive/folders/1xjMWhhcsV1wW3cvEa736UE0hKO2K5rhv?usp=sharing" target="_blank" style="color: #fff; font-weight: bold;">Here</a> or <a href="https://github.com/jerseyloveu?tab=repositories" target="_blank" style="color: #fff; font-weight: bold;">GitHub</a>'
        }
        // Add more project objects as needed
    ];

    let currentIndex = 0;

    const headingElement = document.querySelector('.heading2');
    const videoElement = document.querySelector('.slider-content video');
    const img1Element = document.querySelector('.image-container img:nth-child(1)');
    const img2Element = document.querySelector('.image-container img:nth-child(2)');
    const descriptionElement = document.querySelector('.slider-content p');

    const updateContent = (index) => {
        headingElement.textContent = projects[index].heading;
        videoElement.src = projects[index].videoSrc;
        img1Element.src = projects[index].img1Src;
        img2Element.src = projects[index].img2Src;
        descriptionElement.innerHTML = projects[index].description; 
    };

    const leftBtn = document.querySelector('.left-btn');
    const rightBtn = document.querySelector('.right-btn');

    leftBtn.addEventListener('click', function () {
        currentIndex = (currentIndex === 0) ? projects.length - 1 : currentIndex - 1;
        updateContent(currentIndex);
    });

    rightBtn.addEventListener('click', function () {
        currentIndex = (currentIndex === projects.length - 1) ? 0 : currentIndex + 1;
        updateContent(currentIndex);
    });

    // Initial content update
    updateContent(currentIndex);
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Collect form data
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    // Validate form data (optional, since HTML5 validation is used)
    if (name && email && subject && message) {
        // Send email using EmailJS
        emailjs.send("service_jbjjzna", "template_fat9nqr", {
            from_name: name,
            from_email: email,
            subject: subject,
            message: message
        })
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Message sent successfully! Jersey will get back to you soon!');
        }, function(error) {
            console.error('FAILED...', error);
            alert('Failed to send message. Please try again later.');
        });
    } else {
        alert('Please fill in all fields.');
    }
});