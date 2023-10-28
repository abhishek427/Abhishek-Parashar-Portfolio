import React from "react";
import "./myProject.scss";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import sonu from "../images/sonu1.jpg";
import Carousel from "react-material-ui-carousel";
import education from "../images/education.jpeg";
import mental from "../images/mental.png";
import acc from "../images/accf.png";
import forte from "../images/forte-logo.png";
import doctor from "../images/doctor.jpg";
import golconda from "../images/golcondaF.webp";

let cardData = [
  { key: 1, title: "Illaj India", image: sonu, subheading: "Collaborating with Sonu Sood, we are developing an innovative platform to address the pressing issue of unaffordable surgery expenses for millions of underprivileged individuals. Leveraging a highly efficient tech stack, including React.js for a responsive and user-friendly front-end, Redux for state management, and Node.js with Express.js for a robust and scalable back-end, our platform will seamlessly connect patients with medical professionals, donors, and healthcare institutions. By optimizing our codebase, ensuring swift data retrieval, and implementing intelligent algorithms, we aim to streamline the process, reduce operational costs, and maximize the impact of every contribution. Our mission is to provide a more efficient and accessible solution to help those in need access life-saving surgeries while making the most of available resources." },
  { key: 2, title: "Education Solution", image: education, subheading: "Education LMS is a streamlined K-5 solution designed specifically for the Montessori school education system. Our role-based platform empowers SuperAdmins, Admins, Teachers, and Parents with tailored access to their respective modules, ensuring a personalized and efficient user experience. This versatile system encompasses a wide range of functions, including school creation, student admissions, class formation, curriculum development, task assignment, and evaluation. By optimizing user interfaces, automating administrative tasks, and enhancing communication between stakeholders, our goal is to foster a highly efficient and cohesive educational environment that caters to the unique needs of Montessori education." },
  { key: 3, title: "Mental Health", image: mental, subheading: "In this innovative project, Admin plays a pivotal role in aiding users to address mental health issues effectively. By leveraging a tech stack that includes React.js and Redux for a responsive and intuitive user interface, alongside Stripe for seamless payment processing, we have created a comprehensive platform. Admin collects valuable client data through user-friendly forms, offers tailored suggestions for improved well-being, and provides therapeutic music for relaxation. Our efficient design ensures a user-centric experience, streamlining the healing process while also allowing for secure and hassle-free payment transactions. This holistic approach to mental health support is geared towards enhancing the overall quality of life for our users." },
  { key: 4, title: "Dr./Pasent Project", image: doctor, subheading: "In this project, we've streamlined the healthcare process, where doctors prescribe medications to patients, and insurance managers efficiently handle the billing procedures. Our tech stack incorporates the versatility of React.js and Redux for a responsive and intuitive user interface, along with the power of Angular for robust functionality. To ensure reliability and accuracy, React unit testing is employed. This efficient system promotes seamless communication between healthcare providers and insurers, expediting medication access while simplifying the billing and reimbursement process for enhanced patient care and financial management." },
  { key: 5, title: "Accessibility", image: acc, subheading: "As an Accessibility Developer, I've successfully completed three projects, making a significant impact in enhancing digital accessibility. In two of these projects, I delivered over 1000 invaluable accessibility-related recommendations, ensuring that digital content and interfaces are inclusive and user-friendly. Additionally, I developed one entire project from the ground up, strictly adhering to accessibility guidelines, guaranteeing that it is usable by individuals of all abilities. These accomplishments demonstrate my unwavering commitment to promoting accessibility and inclusivity in the digital realm, making technology more accessible to all." },
  { key: 6, title: "Golconda - Automatic Filling Of Applications And SmartOffice", image: golconda, subheading: "Innovations in the life insurance industry have led to best practices over the years. A recent innovation is Golconda's client service platform, allowing clients and advisors to manage portfolios and policies seamlessly. It procures Pending Client Data in RPIQ format, syncs it with Smart Office database bidirectionally, and sends form data to Smart Office." },
  { key: 7, title: "Forte", image: forte, subheading: "Founded in 2015, FORTE has revolutionized the fitness industry by providing access to avant-garde boutique studio classes instructed by leading fitness experts worldwide. Both a technology and subscription based streaming platform, FORTE installs hardware and software into boutique studios, which enable the classes to be streamed live to FORTE's platform." },
];
function MyServices() {
  return (
    <Grid container justify="center" className="section-background-color" id="project">
      <Grid item lg={12} md={12} sm={12} xs={12} style={{ marginTop: "3%" }} className="heading-alignment heading-height">
        <Typography variant="h4" className="heading-color hover-high-effect">
          My Project
        </Typography>
        <Typography className="primary-color page-sub-heading">What I did</Typography>
      </Grid>
      <Grid item lg={12} md={12} sm={12} xs={12} className="project-card-spacing" style={{ width: "100%", height: "100%", marginBottom: "20px", marginLeft: "20px", marginRight: "20px" }}>
        <Carousel>
          {cardData.map((data) => {
            return (
              <Card className="card-color" elevation={10} key={data.key} data-aos="fade-down">
                <CardContent className="card-content">
                  <div className="imageContner-project">
                    <img src={data.image} alt="" className="image-size-project hover-effect" />
                  </div>
                  <p className="heading-color card-heading hover-high-effect">{data.title}</p>
                  <div className="project-heading-container">
                    <p className="heading-color">{data.subheading}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </Carousel>
      </Grid>
    </Grid>
  );
}

export default MyServices;
