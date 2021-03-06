import React, { useState } from "react";
import { Div, Text, Container, Button, Textarea } from "atomize";
import Header from "../../../components/common/header1";
import Footer from "../../../components/homepage/Footer";
import Layout from "../../../components/layout";

// import intro1 from "../../../../../images/insecurity/journal-therapy.jpg";

const item = {
    // icon: intro1,
    heading: "Contact Us",
    subheading: "Please feel free to send any feedback or contact us for any questions.",
    // secondSubHeader: "Tips for Therapeutic Journal Writing",
};

// const list = [
//     "Ensure your privacy: Keep your journal materials in a safe place which in this case, it is. Trust us, we do not have your journal contents.",
//     "Return to what you have written: Save everything you write, when appropriate, and review it often. The process of going back to what you have written can not only spark inspiration for future writing, but can offer perspective on how far you have come.",
//     "Time yourself: Using timed writing exercises can help you avoid writer’s block and help you tap into relevant unconscious material.",
//     "Write freely: Hush your inner critic and ignore the urge to edit your work. Therapeutic journal writing is not meant to be pretty or grammatically correct; it is meant to be real.",
//     "Be honest with yourself: Honor your thoughts, feelings, and experiences with the authenticity they deserve. More work gets accomplished when you are your genuine self in your writing.",
// ];

const ContactUs = () => {
    const storedText = localStorage.getItem("feedback");
    const [text, setText] = useState(storedText || "");

    const storeText = () => {
        console.log("Saved", text);
        localStorage.setItem("feedback", text);
    };

    return (
        <Layout>
            <Header />

            <Div tag="section" id="features" p={{ t: "6rem" }}>
                <Container d="flex" align="center">
                    <Div p={{ b: "2rem" }} align="center">
                        <Text textSize="title" textWeight="500" m={{ b: "1rem" }}>
                            {item.heading}
                        </Text>
                        <Text textSize="subheader" textColor="medium" textWeight="500">
                            {item.subheading}
                        </Text>
                        <Textarea
                            textColor="info700"
                            hoverTextColor="info800"
                            textWeight="500"
                            d="flex"
                            flexGrow={{ xs: "1", sm: "4", md: "2", lg: "3", xl: "2" }}
                            h={{ xs: "auto", md: "45vh" }}
                            w={{ xs: "auto", md: "180vh" }}
                            m={{ t: "2rem" }}
                            value={text}
                            onChange={event => setText(event.target.value)}
                        ></Textarea>
                        <Button
                            h="3rem"
                            w={{ xs: "100%", sm: "11rem" }}
                            bg="transparent"
                            hoverBg="gray200"
                            border="1px solid"
                            borderColor="gray400"
                            hoverBorderColor="gray600"
                            className="btn-access"
                            rounded="lg"
                            p={{ l: "0.5rem", r: "1rem" }}
                            m={{ t: "1rem", b: "0rem" }}
                            textColor="medium"
                            onClick={() => storeText()}
                        >
                            Submit
                        </Button>
                        {/* <Text
                            textSize="subheader"
                            textColor="medium"
                            textWeight="500"
                            m={{ t: "4rem", b: "1rem" }}
                        >
                            {item.secondSubHeader}
                        </Text>
                        <ul>
                            {list.map(text => {
                                return (
                                    <li>
                                        <Text
                                            tag="h5"
                                            textWeight="400"
                                            textSize="subheader"
                                            fontFamily="secondary"
                                            textColor="medium"
                                            m={{ b: "0.5rem" }}
                                        >
                                            {text}
                                        </Text>
                                    </li>
                                )
                            })}
                        </ul> */}
                    </Div>
                </Container>
            </Div>
            <Footer />
        </Layout>
    )
};

export default ContactUs;
