'use client';

import React from 'react';
import { Col, Container, Dropdown, Form, FormControl, Row } from 'react-bootstrap';
import { useRouter } from 'next/navigation';
import Sidebar from '@/Common/Sidebar';
import { HeroSecond } from '@/Common/heroSecond';
import ButtonComp from '@/Component/Button';
import CommonTable from '@/Component/CommonTable';
import Styles from './accessRole.module.css';

const Page = ({ params: { locale } }) => {
    const router = useRouter();

    const breadcrumb = [
        { text: 'Dashboard', link: "/carrier/dashboard-second" },
        { text: 'Workspace', link: '/carrier/workspace/dashboard' },
        { text: 'Access Role', link: '/' }
    ];

    const data = [
        { module: 'Dashboard', fullControl: true, modify: true, readExecute: true, approver: true, read: true, write: true, noAccess: false },
        { module: 'Administration', fullControl: true, modify: true, readExecute: true, approver: true, read: true, write: true, noAccess: false },
        { module: 'Manage Roles & Permissions', fullControl: false, modify: false, readExecute: false, approver: false, read: false, write: false, noAccess: true, parent: 'Administration' },
        { module: 'User Management', fullControl: false, modify: false, readExecute: false, approver: false, read: false, write: false, noAccess: true, parent: 'Administration' },
        { module: 'Manage Fleets', fullControl: false, modify: true, readExecute: false, approver: true, read: false, write: false, noAccess: false },
        { module: 'Manage Vendors', fullControl: false, modify: false, readExecute: false, approver: false, read: false, write: false, noAccess: true },
        { module: 'Manage RFQ’s', fullControl: false, modify: false, readExecute: false, approver: false, read: false, write: false, noAccess: true },
    ];

    const columns = [
        {
            label: 'Modules',
            key: 'module',
            render: (value, row) => (
                <div className='d-flex align-items-center gap-3'>
                    <div className={Styles.checkboxContainer}>
                        <input type="checkbox" checked={row.fullControl || row.modify || row.readExecute || row.approver || row.read || row.write} readOnly />
                    </div>
                    <div>
                        <span className={Styles.moduleName}>{value}</span>
                    </div>
                </div>
            ),
        },
        {
            label: 'Full Control',
            key: 'fullControl',
            render: (value) => (
                <div className={Styles.checkboxContainer}>
                    <input type="checkbox" checked={value} readOnly />
                </div>
            ),
        },
        {
            label: 'Modify',
            key: 'modify',
            render: (value) => (
                <div className={Styles.checkboxContainer}>
                    <input type="checkbox" checked={value} readOnly />
                </div>
            ),
        },
        {
            label: 'Read & Execute',
            key: 'readExecute',
            render: (value) => (
                <div className={Styles.checkboxContainer}>
                    <input type="checkbox" checked={value} readOnly />
                </div>
            ),
        },
        {
            label: 'Approver',
            key: 'approver',
            render: (value) => (
                <div className={Styles.checkboxContainer}>
                    <input type="checkbox" checked={value} readOnly />
                </div>
            ),
        },
        {
            label: 'Read',
            key: 'read',
            render: (value) => (
                <div className={Styles.checkboxContainer}>
                    <input type="checkbox" checked={value} readOnly />
                </div>
            ),
        },
        {
            label: 'Write',
            key: 'write',
            render: (value) => (
                <div className={Styles.checkboxContainer}>
                    <input type="checkbox" checked={value} readOnly />
                </div>
            ),
        },
        {
            label: 'No Access',
            key: 'noAccess',
            render: (value) => (
                <div className={Styles.checkboxContainer}>
                    <input type="checkbox" checked={value} readOnly />
                </div>
            ),
        },
    ];

    return (
        <div>
            <HeroSecond BoldText='Access Role' breadcrumb={breadcrumb} />
            <Container fluid className={`${Styles.layout} px-5`}>
                <Row>
                    <Col xxl={2} xl={0} lg={0} md={0} sm={0}>
                        <Sidebar locale={locale} />
                    </Col>
                    <Col xxl={10} xl={12} lg={12} md={12} sm={12} className={Styles.layoutSecond}>
                        <Row className='gy-4'>
                            <Col lg={12}>
                                <div className={`${Styles.tableMainBg} ${Styles.accessRole}`}>
                                    <div className={Styles.formContainer}>
                                        <Form className="d-flex w-100 gap-3 align-items-center">
                                            <FormControl
                                                type="text"
                                                placeholder="Search product by name, id, category"
                                                className={`mr-2 ${Styles.customInput}`}
                                            />
                                            <Dropdown>
                                                <Dropdown.Toggle variant="light" id="dropdown-basic" className={Styles.customDropdownToggle}>
                                                    Select the Menu
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu className={`${Styles.customDropdownMenu} ${Styles.customDropdownMenuR}`}>
                                                    <Dropdown.Item href="#/action-1">Menu 1</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-2">Menu 2</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-3">Menu 3</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                            <Dropdown>
                                                <Dropdown.Toggle variant="light" id="dropdown-basic" className={Styles.customDropdownToggle}>
                                                    Select Sub-Menu
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu className={`${Styles.customDropdownMenu} ${Styles.customDropdownMenuR}`}>
                                                    <Dropdown.Item href="#/action-1">Sub-Menu 1</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-2">Sub-Menu 2</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-3">Sub-Menu 3</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </Form>
                                    </div>
                                    <CommonTable columns={columns} data={data} />
                                </div>
                            </Col>
                            <Col lg={12}>
                                <div className='d-flex justify-content-end'>
                                    <ButtonComp text='Approve Role Access' onClick={() => router.push(`/${locale}/carrier/workspace/departments`)} />
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Page;
