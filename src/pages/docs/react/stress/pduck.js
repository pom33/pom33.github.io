import React from "react";
import { Link } from "gatsby"
import { Div, Text, Row, Col, Container, Image, Tag, Input, Button, Icon } from "atomize"
import Header from "../../../../components/common/header"
import Layout from "../../../../components/layout"
import { Component } from 'react';

class App extends Component {
    render() {
      return (
        <><Layout><Header />
            <Div d="flex" align={{ xs: "space-around", lg: "center" }} tag="section" id="features" p={{ t: "8rem" }}>
            <Container d="flex" align="center">
            <Div
                p={{ b: "2rem" }}
                d="flex"
                align="center"
                m={{ l: "18%", t: "5%", r : "8%" }}>
                    <Div
                        border="1px solid"
                        borderColor="gray200"
                        h="600px"
                        w="600px"
                        d="flex"
                        flexDir="column"
                        p="2rem"
                        shadow="4"
                        rounded="xl">
                       
                            <Text
                          textSize="subheader"
                          textWeight="500"
                          m={{ b: "0rem" }}> 
                          Research has shown that puzzle games can relieve stress by distracting from stress-inducing factors. 
                          Focusing on a single task can put the mind into a meditation-like state which helps us relax. Take 5 minutes to try it yourself!
                        </Text>
                        <Div flexGrow="1" bgPos="center" h="500px" w="100%" p="1rem">
                        <iframe width="100%" height="102%" src="https://www.addictinggames.com/embed/html5-games/19693" scrolling="no"></iframe>
                            </Div>
                    </Div>
                    </Div>
                  </Container>
              </Div>
          </Layout></>
      );
    }
  }
   
  export default App;