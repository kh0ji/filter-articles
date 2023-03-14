import React from 'react'
import { BsFillHandThumbsUpFill } from 'react-icons/bs'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { articleProps } from '../typings'
import { Col, Row } from 'react-bootstrap';
import moment from 'moment';


const Article = (props: articleProps) => {
    const { title, upvotes, date, image } = props
    return (
        <Col lg={12} className="shadow-sm rounded p-2 border">
            <Row>
                <Col xs={2} >
                    <img className="rounded-circle  " width={100} height={100} src={image} alt={title} />
                </Col>
                <Col xs={9} md={7} className="d-flex flex-column align-items-center align-items-md-start justify-content-center ">
                    <h3 className="fs-6 ">{title}</h3>
                    <p>
                        {moment(date, "MM/DD/YYYY").format("DD-MM-YYYY")}
                    </p>
                </Col>
                <Col className="d-flex justify-content-center align-items-center">
                    <OverlayTrigger
                        placement={"top"}
                        overlay={
                            <Tooltip>
                                Upvotes
                            </Tooltip>
                        }>
                        <span > <BsFillHandThumbsUpFill /> {upvotes}</span>
                    </OverlayTrigger>


                </Col>
            </Row>



        </Col>
    )
}


export default Article