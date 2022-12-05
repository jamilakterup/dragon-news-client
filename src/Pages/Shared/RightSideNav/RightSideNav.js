import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaWhatsapp, FaTwitch, FaDribbble } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarousal from '../BrandCarousal/BrandCarousal';


const RightSideNav = () => {
    return (
        <div>
            <ButtonGroup vertical>
                <Button variant="outline-primary"><FaGoogle /> Login with Google</Button>
                <Button className="mt-1 mb-4 px-5" variant="outline-dark"><FaGithub /> Login with GitHub </Button>
            </ButtonGroup>
            <div>
                <h5>Find us on</h5>
                <ListGroup>
                    <ListGroup.Item className='mb-2'><FaFacebook /> Cras justo odio</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitter /> Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaWhatsapp /> Morbi leo risus</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitch /> Porta ac consectetur ac</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaDribbble /> Vestibulum at eros</ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <BrandCarousal></BrandCarousal>
            </div>
        </div>
    );
};

export default RightSideNav;