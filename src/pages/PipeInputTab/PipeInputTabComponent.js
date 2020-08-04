import React, { useState } from 'react';
import ExampleModal from "../../components/organisms/Modal/exampleModal";
import InputMultiSelect from "../../components/molecules/inputMultiSelect";
import { Tabs, Tab, Row, Col, Button, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function PipeInputTabComponent({ options }) {

    const [modalShow, setModalShow] = useState(false);


    return (
        <div className="frameInput rounded   h-v100-map" >
            <Tabs
                id="uncontrolled-tab-example"
                transition={false}
                defaultActiveKey="GWSW info"
            >
                <Tab eventKey="GWSW info" title="GWSW info" className="singleTab h-v100-main" >
                    <Row >
                        <Col sm="6">
                            <p className="text-muted text-sm pb-1">Value:</p>
                            <InputMultiSelect options={options} />
                        </Col>
                        <Col sm="6">
                            <p className="text-muted text-sm pb-1">Value:</p>
                            <InputMultiSelect options={options} />
                        </Col>
                    </Row>
                    <Row >
                        <Col sm="12">
                            <div className="ml-auto">
                                <Button className="mr-2" onClick={() => setModalShow(true)}>
                                    <FontAwesomeIcon
                                        icon="expand"
                                        className="mr-2 active-text text-primary white"
                                    />
                      Modal example
                    </Button>

                            </div>
                        </Col>

                    </Row>
                </Tab>
                <Tab eventKey="Roosendaal" title="Roosendaal" className="singleTab h-v100-main" >
                    <p>Roosendaal</p>
                </Tab>
                <Tab eventKey="contact" title="Connecties" className="singleTab h-v100-main">
                    <p>Connecties</p>
                </Tab>
                <Tab eventKey="Maatergelen" title="Maatergelen" className="singleTab h-v100-main">
                    <p>Maatergelen</p>
                </Tab>
            </Tabs>
            <ExampleModal show={modalShow} onHide={() => setModalShow(false)} />
        </div>
    )
}

export default PipeInputTabComponent