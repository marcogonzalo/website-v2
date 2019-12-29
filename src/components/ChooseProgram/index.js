import React, {useEffect, useState} from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
import styled from 'styled-components';

const ChooseProgram = () => {
    const [option, setOption] = useState([
        {value: 'chocolate', label: 'Chocolate'},
        {value: 'strawberry', label: 'Strawberry'},
        {value: 'vanilla', label: 'Vanilla'},
    ])

    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Choose Your Program
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">
                    <Dropdown>
                        <Dropdown.Toggle variant="info" id="dropdown-basic">
                            Program
            </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Program</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#/action-2">Location</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#/action-3">Payment</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-2">
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Location
            </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Program</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#/action-2">Location</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#/action-3">Payment</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-3">
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Payment
            </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Program</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#/action-2">Location</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#/action-3">Payment</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
};

export default ChooseProgram;